// Publication topic filter and active-section highlighting in the top bar.
(function () {
  // ----- Publication filter -----
  var bar = document.querySelector('.filters');
  if (bar) {
    bar.hidden = false; // only shown when JavaScript is available
    var buttons = bar.querySelectorAll('button');
    var items = document.querySelectorAll('.pubs li');
    var groups = document.querySelectorAll('.pub-group');

    bar.addEventListener('click', function (e) {
      var btn = e.target.closest('button');
      if (!btn) return;
      var f = btn.getAttribute('data-filter');
      buttons.forEach(function (b) { b.setAttribute('aria-pressed', String(b === btn)); });
      items.forEach(function (li) {
        var tags = (li.getAttribute('data-tags') || '').split(/\s+/);
        li.hidden = !(f === 'all' || tags.indexOf(f) !== -1);
      });
      groups.forEach(function (g) {
        g.hidden = !g.querySelector('.pubs li:not([hidden])');
      });
    });
  }

  // ----- Active nav link -----
  var links = Array.prototype.slice.call(document.querySelectorAll('.topbar nav a[href^="#"]'));
  if (!('IntersectionObserver' in window) || !links.length) return;
  var byId = {};
  links.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });
  var sections = Object.keys(byId).map(function (id) { return document.getElementById(id); }).filter(Boolean);

  var visible = {};
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { visible[en.target.id] = en.isIntersecting; });
    var current = null;
    for (var i = 0; i < sections.length; i++) {
      if (visible[sections[i].id]) { current = sections[i].id; break; }
    }
    links.forEach(function (a) { a.classList.toggle('active', a === byId[current]); });
  }, { rootMargin: '-35% 0px -55% 0px' });
  sections.forEach(function (s) { io.observe(s); });
})();
