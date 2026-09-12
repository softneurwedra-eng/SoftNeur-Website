(() => {
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  let preference;
  try { preference = localStorage.getItem('softneur-theme'); } catch {}
  const apply = dark => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#091426' : '#ffffff');
    const button = document.querySelector('.theme-toggle');
    if (button) {
      button.hidden = false;
      button.textContent = dark ? '☀ Mode clair' : '☾ Mode sombre';
      button.setAttribute('aria-label', dark ? 'Activer le mode clair' : 'Activer le mode sombre');
      button.setAttribute('aria-pressed', String(dark));
    }
  };
  const current = () => preference === 'dark' || (preference !== 'light' && system.matches);
  apply(current());
  document.addEventListener('DOMContentLoaded', () => {
    apply(current());
    document.querySelector('.theme-toggle')?.addEventListener('click', () => {
      preference = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('softneur-theme', preference); } catch {}
      apply(current());
    });
  });
  system.addEventListener('change', () => apply(current()));
  window.addEventListener('storage', event => {
    if (event.key === 'softneur-theme' || event.key === null) {
      preference = event.newValue;
      apply(current());
    }
  });
})();
