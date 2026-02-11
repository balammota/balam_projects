(function() {
  var KEY = 'balam_demo_unlocked';
  var PASSWORD = 'balam19952807';

  function init() {
    var overlay = document.getElementById('demo-gate-overlay');
    var content = document.getElementById('demo-content');
    if (!overlay || !content) return;

    if (sessionStorage.getItem(KEY) === '1') {
      overlay.classList.add('hidden');
      content.style.display = '';
      return;
    }

    content.style.display = 'none';
    var input = document.getElementById('demo-gate-password');
    var submit = document.getElementById('demo-gate-submit');
    var err = document.getElementById('demo-gate-error');

    function unlock() {
      if (input.value === PASSWORD) {
        sessionStorage.setItem(KEY, '1');
        overlay.classList.add('hidden');
        content.style.display = '';
        if (err) err.style.display = 'none';
      } else {
        if (err) {
          err.style.display = 'block';
          err.textContent = 'Incorrect password.';
        }
      }
    }

    if (submit) submit.onclick = unlock;
    if (input) {
      input.onkeydown = function(e) {
        if (e.key === 'Enter') unlock();
      };
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
