# Web de la agencia

Web estática en español (es-ES) hecha con [Astro](https://astro.build/) a partir de la plantilla [AstroWind](https://github.com/arthelokyo/astrowind) (licencia MIT, ver `LICENSE.md`).

```bash
npm install
npm run dev     # http://localhost:4321
npm run build   # genera dist/
```

## Cambiar el nombre de la marca

Edita `site.name` en `src/config.yaml`. Desde ahí se actualizan títulos, logo, pie, JSON-LD, `llms.txt` y RSS (las páginas lo leen a través de `src/constants.ts`).

## Cambiar el dominio

Edita `site.site` en `src/config.yaml` (por ejemplo `https://www.midominio.es`). Se usa para canonical, sitemap, la línea `Sitemap:` de `robots.txt`, `llms.txt` y JSON-LD.

## Configurar Formspree

1. Crea un formulario en [formspree.io](https://formspree.io) y copia su ID (lo que va detrás de `https://formspree.io/f/`).
2. Defínelo como variable de entorno `PUBLIC_FORMSPREE_ID`: en local, copia `.env.example` a `.env`; en producción, en el panel del hosting.
3. Vuelve a hacer el build. Sin la variable, el formulario aparece desactivado con un aviso, pero el build no falla.

## Otros datos

En `src/constants.ts` están el email de contacto y los perfiles sociales (`sameAs` del JSON-LD), ambos vacíos de momento.
