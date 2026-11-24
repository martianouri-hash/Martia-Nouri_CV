(() => {
  'use strict';
  document.documentElement.classList.add('js');
  const menu = document.querySelector('.menu-toggle');
  const nav = document.getElementById('main-nav');
  const setMenu = open => {
    menu.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  };
  menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', event => { if (event.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') setMenu(false); });

  const filters = document.querySelectorAll('[data-filter]');
  const samples = document.querySelectorAll('.sample-grid [data-project]');
  filters.forEach(button => button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filters.forEach(other => {
      const active = other === button;
      other.classList.toggle('active', active);
      other.setAttribute('aria-pressed', String(active));
    });
    let count = 0;
    samples.forEach(sample => {
      const visible = filter === 'all' || sample.dataset.project === filter ||
        (filter === 'independent' && ['blade-of-persia','universal-power'].includes(sample.dataset.project));
      sample.hidden = !visible;
      if (visible) count++;
    });
    document.querySelector('.sample-count').textContent = `${count} video${count === 1 ? '' : 's'}`;
  }));

  const dialog = document.querySelector('.video-dialog');
  const frame = dialog.querySelector('.video-frame');
  let opener;
  document.querySelectorAll('a[data-video]').forEach(link => link.addEventListener('click', event => {
    // Preserve normal link behavior for modifier clicks and browsers without dialog support.
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || typeof dialog.showModal !== 'function') return;
    event.preventDefault();
    opener = link;
    const title = link.dataset.title || 'Video showcase';
    dialog.querySelector('#video-title').textContent = title;
    dialog.querySelector('.video-external').href = link.href;
    const iframe = document.createElement('iframe');
    const start = Number.parseInt(link.dataset.start || '0', 10) || 0;
    iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(link.dataset.video)}?autoplay=1&rel=0&start=${start}`;
    iframe.title = title;
    iframe.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    frame.replaceChildren(iframe);
    document.body.classList.add('modal-open');
    dialog.showModal();
    dialog.querySelector('.dialog-close').focus();
  }));
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => {
    frame.replaceChildren();
    document.body.classList.remove('modal-open');
    opener?.focus();
  });
})();
