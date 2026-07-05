/* Helpers pour les liens de contact configurés via variables d'environnement.
   Renseignez PUBLIC_WHATSAPP_NUMBER et PUBLIC_FORMSPREE_ID dans `.env`
   (voir `.env.example`). Des valeurs de repli sûres sont fournies pour que
   le build fonctionne même sans configuration. */

const whatsappNumber = (import.meta.env.PUBLIC_WHATSAPP_NUMBER ?? '').replace(/\D/g, '');
const formspreeId = import.meta.env.PUBLIC_FORMSPREE_ID ?? '';

export const WHATSAPP_URL = whatsappNumber
  ? `https://wa.me/${whatsappNumber}`
  : 'https://wa.me/';

export const WHATSAPP_CONFIGURED = Boolean(whatsappNumber);

export const FORMSPREE_ACTION = formspreeId
  ? `https://formspree.io/f/${formspreeId}`
  : '';

export const FORMSPREE_CONFIGURED = Boolean(formspreeId);
