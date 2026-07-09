/* ============================================================
   DPI SAFEGUARDS — INTERACTIVE MAP
   Leaflet map with brand-styled country pins + info panel.
   Reads window.DPI_COUNTRIES from data.js.
   Self-contained: hosting this folder = a working GitBook webframe.
   ============================================================ */
(function () {
  var STATUS = {
    featured:       { label: 'Featured story',                  color: '#F2A63B' },
    implementation: { label: 'Implementation around the world', color: '#1B9CD8' }
  };

  var map = L.map('map', {
    zoomControl: true,
    scrollWheelZoom: false,     // don't hijack page scroll inside an embed
    minZoom: 2, maxZoom: 7,
    worldCopyJump: true
  }).setView([15, 5], 2);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap &copy; CARTO',
    subdomains: 'abcd'
  }).addTo(map);

  function makeIcon(status) {
    var c = (STATUS[status] || STATUS.implementation).color;
    var featured = status === 'featured';
    return L.divIcon({
      className: 'dpi-pin-wrap',
      html: '<span class="dpi-pin' + (featured ? ' dpi-pin--featured' : '') + '" style="--pin:' + c + '">' +
              '<span class="dpi-pin__core"></span></span>',
      iconSize: featured ? [26, 26] : [20, 20], iconAnchor: featured ? [13, 13] : [10, 10]
    });
  }

  var panel = document.getElementById('panel');

  function renderPanel(c) {
    var s = STATUS[c.status] || STATUS.implementation;
    var label = c.status === 'featured' ? 'Read the story' : 'View country page';
    var tags = (c.tags || []).map(function (t) { return '<span class="tag">' + t + '</span>'; }).join('');
    var cta = c.link
      ? '<a class="dpi-btn dpi-btn--amber panel__cta" href="' + c.link + '" target="_blank" rel="noopener">' + label + ' <span class="dpi-btn__dot">&rarr;</span></a>'
      : '';
    panel.innerHTML =
      '<span class="dpi-badge" style="color:' + s.color + ';background:' + s.color + '14">' +
        '<span class="dpi-badge__dot"></span>' + s.label + '</span>' +
      '<h3 class="panel__name">' + c.name + '</h3>' +
      (c.headline ? '<p class="panel__headline">' + c.headline + '</p>' : '') +
      '<p class="panel__summary">' + (c.summary || '') + '</p>' +
      (tags ? '<div class="panel__tags">' + tags + '</div>' : '') + cta;
    panel.classList.add('is-open');
  }

  function resetPanel() {
    var featured = window.DPI_COUNTRIES.filter(function (c) { return c.status === 'featured'; }).length;
    var total = window.DPI_COUNTRIES.length;
    panel.innerHTML =
      '<span class="dpi-eyebrow">On the map</span>' +
      '<h3 class="panel__name">Implementation around the world</h3>' +
      '<p class="panel__summary">From instant payments in Brazil to refugee IDs in Ethiopia and offline Digital ID in Malawi — select a country to explore how safe and inclusive DPI is being built.</p>' +
      '<div class="panel__stats">' +
        '<div class="pstat"><span class="pstat__num">' + total + '</span><span class="pstat__lbl">countries engaged</span></div>' +
        '<div class="pstat"><span class="pstat__num">' + featured + '</span><span class="pstat__lbl">featured stories</span></div>' +
      '</div>' +
      '<ul class="panel__legend">' + legendRow('featured') + legendRow('implementation') + '</ul>';
    panel.classList.remove('is-open');
  }

  function legendRow(key) {
    return '<li><span class="legend-dot" style="background:' + STATUS[key].color + '"></span>' + STATUS[key].label + '</li>';
  }

  window.DPI_COUNTRIES.forEach(function (c) {
    var m = L.marker(c.coords, { icon: makeIcon(c.status), title: c.name }).addTo(map);
    m.on('click', function () { renderPanel(c); });
  });

  var countEl = document.getElementById('stat-count');
  if (countEl) countEl.textContent = window.DPI_COUNTRIES.length;
  resetPanel();
  map.on('click', resetPanel);
})();
