(() => {
  const DATA_URL = 'https://ourobyte.github.io/deliverydata/data.json';

  fetch(DATA_URL)
    .then(r => r.json())
    .then(db => {
      for (const id in db) {
        const el = document.getElementById(id);
        if (!el) continue;

        el.dataset.kurma = JSON.stringify(db[id]);
        el.style.cursor = 'pointer';
      }
    });
})();
