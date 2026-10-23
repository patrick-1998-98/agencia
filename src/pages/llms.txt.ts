import type { APIRoute } from 'astro';

import { BRAND_NAME, SITE_DESCRIPTION, absoluteUrl } from '~/constants';
import { fetchPosts } from '~/utils/blog';
import { getPermalink, getBlogPermalink } from '~/utils/permalinks';

// /llms.txt (https://llmstxt.org): resumen del sitio para asistentes de IA.
// Se genera en el build a partir de la configuración y de los posts, así que
// el nombre, el dominio y la lista de artículos se mantienen solos.
export const prerender = true;

export const GET: APIRoute = async () => {
  const posts = await fetchPosts();

  const pages = [
    ['Inicio', getPermalink('/'), 'Qué hacemos y cómo trabajamos.'],
    ['Servicios', getPermalink('/servicios'), 'Diagnóstico de IA, automatización de procesos y formación.'],
    ['Sobre nosotros', getPermalink('/sobre-nosotros'), 'Quiénes somos y cómo entendemos la IA en una pyme.'],
    ['Contacto', getPermalink('/contacto'), 'Formulario para contarnos tu caso.'],
    ['Blog', getBlogPermalink(), 'Artículos sobre IA, automatización y ayudas para pymes.'],
  ];

  const body = [
    `# ${BRAND_NAME}`,
    '',
    `> ${SITE_DESCRIPTION}`,
    '',
    `${BRAND_NAME} es una agencia que implanta inteligencia artificial y automatización en pequeñas y medianas empresas de España. Trabaja en español (es-ES).`,
    '',
    '## Páginas principales',
    '',
    ...pages.map(([title, href, desc]) => `- [${title}](${absoluteUrl(href)}): ${desc}`),
    '',
    '## Artículos',
    '',
    ...posts.map((post) => `- [${post.title}](${absoluteUrl(getPermalink(post.permalink, 'post'))}): ${post.excerpt ?? ''}`),
    '',
    '## Otros recursos',
    '',
    `- [Sitemap](${absoluteUrl('/sitemap-index.xml')})`,
    `- [RSS](${absoluteUrl('/rss.xml')})`,
    '',
  ].join('\n');

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
