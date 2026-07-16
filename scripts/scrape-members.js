// Script para ejecutar en la consola de Chrome (DevTools) en:
// https://www.linkedin.com/company/tuteur/people/
//
// Antes de ejecutar: scrolleá y hacé clic en "Mostrar más resultados"
// hasta cargar todos los miembros (LinkedIn los carga de forma diferida).
// Luego pegá este script en la consola. Copia al portapapeles un array
// de objetos con todos los miembros visibles.

(() => {
  const clean = (s) => (s || '').replace(/\s+/g, ' ').trim();

  const members = [...document.querySelectorAll(
    'li.org-people-profile-card__profile-card-spacing'
  )].map((li) => {
    const titleEl = li.querySelector('.artdeco-entity-lockup__title');
    const img = li.querySelector('.artdeco-entity-lockup__image img');

    return {
      name: clean(titleEl?.innerText) || clean(img?.alt),
      title: clean(li.querySelector('.artdeco-entity-lockup__subtitle')?.innerText),
      degree: clean(li.querySelector('.artdeco-entity-lockup__degree')?.innerText)
                .replace(/^·\s*/, ''),
    };
  }).filter((m) => m.name);

  const json = JSON.stringify(members, null, 2);
  copy(json); // en la consola de Chrome, copy() manda al portapapeles
  console.log(`✅ ${members.length} miembros copiados al portapapeles`);
  console.table(members);
  return members;
})();
