/* Google Analytics 4 loads only after the visitor accepts analytics cookies */
var GA_ID = 'G-R5KZG8X4K5';

function loadGA() {
  if (window.__gaLoaded) return;
  window.__gaLoaded = true;
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { dataLayer.push(arguments); };
  gtag('js', new Date());
  gtag('config', GA_ID);
}

/* ---- COOKIE BANNER (delete this whole block when Mediavine adds its own CMP) ---- */
CookieConsent.run({
  disablePageInteraction: true, /* dims the page and blocks reading until the visitor chooses */
  guiOptions: {
    consentModal: { layout: 'box wide', position: 'middle center' }
  },
  categories: {
    necessary: { enabled: true, readOnly: true },
    analytics: {}
  },
  onConsent: function () {
    if (CookieConsent.acceptedCategory('analytics')) loadGA();
  },
  onChange: function () {
    if (CookieConsent.acceptedCategory('analytics')) loadGA();
  },
  language: {
    default: 'en',
    translations: {
      en: {
        consentModal: {
          title: 'Cookies on Fix Car',
          description: 'I use cookies to see which guides are useful, and ads may use them too. You can accept all, keep only the necessary ones, or choose. Details in the <a href="/privacy-policy.html">Privacy Policy</a>.',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Necessary only',
          showPreferencesBtn: 'Choose'
        },
        preferencesModal: {
          title: 'Cookie settings',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Necessary only',
          savePreferencesBtn: 'Save choices',
          closeIconLabel: 'Close',
          sections: [
            { title: 'Your choice', description: 'Pick which cookies the site may use. You can change this any time from the footer.' },
            { title: 'Necessary', description: 'Remember your cookie choice. Always on.', linkedCategory: 'necessary' },
            { title: 'Analytics and advertising', description: 'Google Analytics and, where shown, ad partners. They help me understand traffic and pay for the site.', linkedCategory: 'analytics' }
          ]
        }
      }
    }
  }
});