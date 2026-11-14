# Búsqueda de trabajo de Flor

Material de la búsqueda laboral de Florencia Quiroga y lo necesario para correr nuevas tandas con Claude Code.

## Correr una tanda nueva

1. `git pull` para tener la lista de mails usados al día.
2. Abrir Claude Code en la raíz del repo y pedir, por ejemplo: "Corré el agente buscador-empleo para una tanda nueva de búsquedas, ordenadas por más nuevas". El agente está en `.claude/agents/buscador-empleo.md` y ya tiene el perfil de Flor y las reglas.
3. El resultado se guarda como `mails_AAAA-MM_tandaN.md` en esta carpeta.
4. Agregar los mails nuevos a `mails_ya_usados.txt` (uno por línea, en minúsculas, ordenado) para que la próxima tanda no los repita.
5. Generar la versión para Outlook: `python3 busqueda_trabajo/tools/md2outlook.py busqueda_trabajo/mails_AAAA-MM_tandaN.md --copy` y pegar con Cmd+V. El `--copy` solo funciona en macOS; sin él, abrir el `_outlook.html` en el navegador y copiar desde ahí.
6. Commit y push a `main`.

## Archivos

- `mails_ya_usados.txt`: todos los mails ya entregados. El agente lo usa para no repetir.
- `mails_2026-10*.md` y `mails_2026-11*.md`: tandas de octubre y noviembre 2026 (la 1 por rubro, la 2 por zona, de la 3 a la 6 con avisos nuevos, la 7 con avisos nuevos y espontáneas de fuentes nuevas).
- `00_RESUMEN.md`, `01_...` a `60_...`, `plan.md`: búsqueda de marzo y abril 2026.
- `tools/md2outlook.py`: convierte una tanda a HTML para Outlook.

## Lo que se aprendió

- Computrabajo, Bumeran e Indeed ocultan los mails: sirven para encontrar empresas con búsqueda activa, y el mail se busca en la web de la empresa.
- Las fuentes que más mails dieron: directorios de parques industriales y municipios de zona sur, webs de empresas ("Trabajá con nosotros"), consultoras que publican mail por búsqueda (Hidalgo & Asociados, Pullmen) y Revista Empleo.
- Los avisos nuevos con mail son pocos por semana (5 a 20). Las tandas que solo buscan avisos dan pocos mails (tandas 3 a 6: entre 12 y 22). Para que rinda, cada tanda tiene que sumar agentes de envío espontáneo en fuentes que no se hayan usado. La tanda 7 lo hizo y dio 104 mails nuevos. El agente tiene la lista de fuentes usadas y pendientes.
- Mejor fuente de avisos con mail: reclutadoras de LinkedIn que republican búsquedas (Macu Pucci). No correr dos agentes con Chrome a la vez.
- Conviene correrla una o dos veces por semana.
