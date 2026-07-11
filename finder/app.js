/* ============================================================
   RESOURCE FINDER — filtering logic
   Mirrors the founding memo's worked example: filter by lifecycle
   phase and responsible authority (the Framework's real taxonomy),
   plus free-text search across title/description/topic.
   Self-contained → becomes a GitBook webframe.
   ============================================================ */
(function () {
  var ALL = window.DPI_RESOURCES;
  var TAX = window.DPI_TAXONOMY;

  var qEl = document.getElementById('q');
  var phaseEl = document.getElementById('phase');
  var authEl = document.getElementById('authority');
  var rowsEl = document.getElementById('rows');
  var countEl = document.getElementById('count');

  TAX.phases.forEach(function (p) {
    var o = document.createElement('option');
    o.value = p.code; o.textContent = p.code + ' · ' + p.name;
    phaseEl.appendChild(o);
  });
  TAX.authorities.forEach(function (a) {
    var o = document.createElement('option');
    o.value = a.code; o.textContent = a.code + ' · ' + a.name;
    authEl.appendChild(o);
  });

  function tagHtml(cls, text) { return '<span class="tag ' + cls + '">' + text + '</span>'; }

  function codeName(list, code) {
    var m = list.filter(function (x) { return x.code === code; })[0];
    return m ? m.name : code;
  }

  function render(items) {
    countEl.innerHTML = '<b>' + items.length + '</b> resource' + (items.length === 1 ? '' : 's');
    if (!items.length) {
      rowsEl.innerHTML = '<div class="empty">No resources match these filters. Try clearing one.</div>';
      return;
    }
    rowsEl.innerHTML = items.map(function (r) {
      var tags = []
        .concat(r.phase.map(function (c) { return tagHtml('tag--phase', c + ' ' + codeName(TAX.phases, c)); }))
        .concat(r.authority.map(function (c) { return tagHtml('tag--auth', c + ' ' + codeName(TAX.authorities, c)); }))
        .concat(r.topic.map(function (t) { return tagHtml('tag--topic', t); }))
        .join('');
      return '<a class="row" href="' + r.link + '" target="_blank" rel="noopener">' +
        '<div>' +
          '<div class="row__type">' + r.type + '</div>' +
          '<div class="row__title">' + r.title + '</div>' +
          '<p class="row__desc">' + r.desc + '</p>' +
          '<div class="row__tags">' + tags + '</div>' +
        '</div>' +
        '<span class="row__go">Open</span>' +
      '</a>';
    }).join('');
  }

  function applyFilters() {
    var q = qEl.value.trim().toLowerCase();
    var phase = phaseEl.value;
    var auth = authEl.value;

    var filtered = ALL.filter(function (r) {
      if (phase && r.phase.indexOf(phase) === -1) return false;
      if (auth && r.authority.indexOf(auth) === -1) return false;
      if (q) {
        var hay = (r.title + ' ' + r.desc + ' ' + r.topic.join(' ') + ' ' + r.type).toLowerCase();
        if (hay.indexOf(q) === -1) return false;
      }
      return true;
    });
    render(filtered);
  }

  qEl.addEventListener('input', applyFilters);
  phaseEl.addEventListener('change', applyFilters);
  authEl.addEventListener('change', applyFilters);
  document.getElementById('reset').addEventListener('click', function () {
    qEl.value = ''; phaseEl.value = ''; authEl.value = '';
    applyFilters();
  });

  /* Tell the parent page our real height so the embedding <iframe>
     can resize instead of clipping or double-scrolling — this is
     the same pattern a real GitBook webframe uses via postMessage.
     A ResizeObserver on body reacts to any layout change regardless
     of what caused it (filtering, window resize, font load, etc.) —
     more robust than calling this only after specific known events. */
  function reportHeight() {
    if (window.parent !== window) {
      window.parent.postMessage({ dpiFrame: true, height: document.body.scrollHeight }, '*');
    }
  }

  render(ALL);

  if (window.ResizeObserver) {
    new ResizeObserver(reportHeight).observe(document.body);
  } else {
    reportHeight();
    window.addEventListener('resize', reportHeight);
  }
})();
