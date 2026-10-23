# CLAUDE.md

- **Qué es:** web de una agencia de IA para pymes, solo en español de España (`lang="es"`, locale `es-ES`), basada en la plantilla AstroWind (Astro + Tailwind).
- **Marca provisional:** "Agencia IA Tyler". El nombre y el dominio se cambian solo en `src/config.yaml` (`site.name`, `site.site`); el código los lee a través de `src/constants.ts`. Nunca los escribas a mano en las páginas.
- **Servicios:** el servicio principal aún no está decidido; los servicios de Inicio y Servicios están marcados con `TODO`.
- **Bono IA:** es contenido de blog y puerta de entrada, no el foco del negocio.
- **Regla de contenido:** no inventar datos. Todo lo que no esté verificado va como "pendiente de confirmar", con la fecha de "Última actualización" en el post.
- **Al terminar cada tarea:** `npm run build` sin errores, commit y push directo a `main`.
