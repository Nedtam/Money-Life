/* life120 · 介紹站
   只做五件事：接遊戲連結、頂欄滾動態、手機選單、底部導航高亮、進場動畫。
   內容全部寫在 index.html。
   ───────────────────────────────────────────────── */

const SITE = {
  // 遊戲本體位置。本機預覽用相對路徑；部署後改成正式網址，例如：
  // 'https://nedtam.github.io/life120/'
  gameUrl: 'https://nedtam.github.io/life120/',
  gameNewTab: true,
};

/* 1. 所有「玩一局」按鈕接上遊戲 */
document.querySelectorAll('[data-game]').forEach((a) => {
  a.href = SITE.gameUrl;
  if (SITE.gameNewTab) {
    a.target = '_blank';
    a.rel = 'noopener';
  }
});

/* 2. 頂欄捲動後加深底色 */
const head = document.getElementById('head');
if (head) {
  let ticking = false;
  const sync = () => {
    head.classList.toggle('is-scrolled', window.scrollY > 10);
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(sync);
    }
  }, { passive: true });
  sync();
}

/* 3. 手機選單：點完連結自動收起 */
document.querySelectorAll('.menu-panel a').forEach((a) => {
  a.addEventListener('click', () => {
    const menu = a.closest('details');
    if (menu) menu.open = false;
  });
});

/* 4. 底部導航：目前所在區塊高亮 */
(() => {
  const tabs = [...document.querySelectorAll('.tab')];
  if (!tabs.length) return;
  const map = tabs
    .map((tab) => {
      const id = (tab.getAttribute('href') || '').replace('#', '');
      const el = document.getElementById(id);
      return el ? { tab, el } : null;
    })
    .filter(Boolean);

  const sync = () => {
    const line = window.innerHeight * 0.35;
    let current = map[0];
    map.forEach((entry) => {
      if (entry.el.getBoundingClientRect().top <= line) current = entry;
    });
    map.forEach(({ tab }) => tab.classList.toggle('is-active', tab === current.tab));
  };

  window.addEventListener('scroll', sync, { passive: true });
  sync();
})();

/* 5. 進場動畫（不支援 IntersectionObserver 就全部直接顯示） */
(() => {
  const groups = [
    '.hero-copy > *',
    '.stat',
    '.goals li',
    '.plan-card',
    '.wk',
    '.fact',
    '.news-card',
    '.member',
    '.cta-band',
  ];
  const targets = [];
  groups.forEach((sel) => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add('reveal');
      el.style.setProperty('--d', `${Math.min(i, 5) * 60}ms`);
      targets.push(el);
    });
  });

  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('in'));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -6% 0px', threshold: 0.06 }
  );

  targets.forEach((el) => io.observe(el));

  // 首屏已可見的元素立即顯示，避免延遲一幀才淡入
  requestAnimationFrame(() => {
    targets.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('in');
    });
  });
})();
