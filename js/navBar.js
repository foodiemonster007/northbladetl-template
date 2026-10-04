// Mobile menu: tap a dropdown button to open or close its list of links.
(function () {
  function init() {
    // Desktop uses CSS hover instead.
    if (window.innerWidth >= 601) return;

    const COOLDOWN_MS = 200; // ignore a second click this soon after the first (double-fire on one tap)
    const SETTLE_MS = 400;   // after a toggle, ignore link taps while the layout moves
    let lastClickTime = 0;

    const trigger = document.querySelector('.trigger');
    if (!trigger) return;

    // Opening or closing a dropdown moves everything below it. Disable the
    // links briefly so a tap aimed at the old layout can't hit a link that
    // has just moved under the finger.
    function guardAgainstShift() {
      const dropdowns = document.querySelectorAll('.dropdown-content');
      dropdowns.forEach(function (el) { el.style.pointerEvents = 'none'; });
      window.setTimeout(function () {
        dropdowns.forEach(function (el) { el.style.pointerEvents = ''; });
      }, SETTLE_MS);
    }

    // One listener on the menu container handles every dropdown button.
    // Capture phase, so it runs before any other click handler.
    trigger.addEventListener('click', function (event) {
      const button = event.target.closest('.dropbtn');
      if (!button) return;

      const now = Date.now();
      if (now - lastClickTime < COOLDOWN_MS) {
        event.stopPropagation();
        event.preventDefault();
        return;
      }
      lastClickTime = now;

      event.stopPropagation();
      event.stopImmediatePropagation();
      event.preventDefault();

      const dropdown = button.nextElementSibling;
      if (!dropdown || !dropdown.classList.contains('dropdown-content')) return;

      // Toggle with an inline style so no stylesheet rule can override it.
      // Only the clicked dropdown changes; the others keep their state.
      const isOpen = dropdown.style.display === 'block';
      dropdown.style.display = isOpen ? 'none' : 'block';

      guardAgainstShift();
    }, true);
  }

  // This script is loaded in <head>, so wait for the menu markup to exist.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
