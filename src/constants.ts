/**
 * Constantes de marca y negocio.
 *
 * El nombre y el dominio NO se escriben aquí: salen de `src/config.yaml`
 * (`site.name` y `site.site`). Este archivo solo los reexporta junto con el
 * resto de datos de la agencia, para que ninguna página los tenga hardcodeados.
 */
import { SITE, METADATA, I18N } from 'astrowind:config';

export const BRAND_NAME: string = SITE.name;
export const SITE_URL: string = SITE.site ?? '';
export const SITE_DESCRIPTION: string = METADATA.description ?? '';
export const SITE_LOCALE: string = I18N.locale ?? I18N.language;

/** Zona de actuación declarada en el JSON-LD de la organización. */
export const AREA_SERVED = 'ES';

/** TODO: email de contacto público (déjalo vacío para no mostrarlo). */
export const CONTACT_EMAIL = '';

/** TODO: perfiles sociales (LinkedIn, etc.) para `sameAs` en el JSON-LD. */
export const SOCIAL_PROFILES: string[] = [];

/**
 * ID del formulario de Formspree (la parte final de https://formspree.io/f/<ID>).
 * Se define en la variable de entorno PUBLIC_FORMSPREE_ID; si falta, el
 * formulario se muestra desactivado pero el build no falla.
 */
export const FORMSPREE_ID: string = (import.meta.env.PUBLIC_FORMSPREE_ID ?? '').trim();
export const FORMSPREE_ENDPOINT: string | null = FORMSPREE_ID ? `https://formspree.io/f/${FORMSPREE_ID}` : null;

const absolute = (path = '/') => new URL(path, SITE_URL || 'http://localhost').toString();

/** Schema.org Organization, incluido en todas las páginas desde Layout.astro. */
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': absolute('/#organization'),
  name: BRAND_NAME,
  url: absolute('/'),
  description: SITE_DESCRIPTION,
  areaServed: AREA_SERVED,
  knowsLanguage: SITE_LOCALE,
  ...(CONTACT_EMAIL ? { email: CONTACT_EMAIL } : {}),
  ...(SOCIAL_PROFILES.length ? { sameAs: SOCIAL_PROFILES } : {}),
};

export { absolute as absoluteUrl };
