// import vendors
import i18next from 'i18next';

import fr from '../../../../i18n/fr.json';

function promise() {
  return new Promise((resolve, reject) => {

    let locale = (window.config.locale) ? window.config.locale : 'fr';

    i18next.init({
      lng: locale,
      fallbackLng: 'fr',
      resources: {
        fr: {
          translation: fr
        }
      }
    }, (err, t) => {
      if (err) {
        reject(err);
      }

      resolve();
    });
  });
}

export default promise;
