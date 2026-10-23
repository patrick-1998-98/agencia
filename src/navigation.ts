import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';
import { BRAND_NAME } from './constants';

export const headerData = {
  links: [
    { text: 'Inicio', href: getPermalink('/') },
    { text: 'Servicios', href: getPermalink('/servicios') },
    { text: 'Blog', href: getBlogPermalink() },
    { text: 'Sobre nosotros', href: getPermalink('/sobre-nosotros') },
    { text: 'Contacto', href: getPermalink('/contacto') },
  ],
  actions: [{ text: 'Hablemos', href: getPermalink('/contacto') }],
};

export const footerData = {
  links: [
    {
      title: 'Agencia',
      links: [
        { text: 'Servicios', href: getPermalink('/servicios') },
        { text: 'Sobre nosotros', href: getPermalink('/sobre-nosotros') },
        { text: 'Contacto', href: getPermalink('/contacto') },
      ],
    },
    {
      title: 'Recursos',
      links: [
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'llms.txt', href: getAsset('/llms.txt') },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [{ ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') }],
  footNote: `© ${new Date().getFullYear()} ${BRAND_NAME}. Todos los derechos reservados.`,
};
