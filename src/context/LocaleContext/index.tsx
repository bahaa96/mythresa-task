import * as Localization from 'expo-localization';
import * as SplashScreen from 'expo-splash-screen';
import * as Updates from 'expo-updates';
import i18n from 'i18n-js';
import moment from 'moment';
import arLocale from 'moment/locale/ar';
import React, { createContext, useEffect, useState } from 'react';
import { I18nManager } from 'react-native';

import { getStoredData, storeData } from '../../utils/storage';

interface IContextProps {
  locale: string;
  handleLanguageChange: (lang: string) => void;
}

const LocaleContext = createContext<IContextProps>({
  handleLanguageChange: () => {},
  locale: Localization.locale,
});

export const LocaleContextProvider: React.FC = ({ children }) => {
  const [locale, setLocale] = useState<string>(Localization.locale);
  const [isReady, setIsReady] = useState<boolean>(false);

  const handleLanguageChange = async (lang: string) => {
    console.log(lang);
    if (lang && locale !== lang) {
      await storeData('locale', lang);
      await I18nManager.forceRTL(lang.includes('ar'));
      await Updates.reloadAsync();
    }
  };

  useEffect(() => {
    (async () => {
      if (isReady) {
        try {
          await SplashScreen.hideAsync();
        } catch (e) {
          alert(e.message);
        }
      }
    })();
  }, [isReady]);

  useEffect(() => {
    (async () => {
      const storedLocale = await getStoredData('locale');
      console.log('stored: ', storedLocale);

      let currentLocale: string = locale;
      if (storedLocale) {
        currentLocale = storedLocale;
      }
      setLocale(currentLocale);
      i18n.locale = currentLocale;
      if (currentLocale.__proto__ === String.prototype) {
        let timeLocale: string | string[] = currentLocale.split('-');
        if (timeLocale) {
          timeLocale = timeLocale.slice(0, 1).join('');
          moment.updateLocale(timeLocale, [arLocale]); // can pass in 'en', 'fr', or 'es'
        }
      }
      setIsReady(true);
    })();
  }, []);

  const value = {
    locale,
    handleLanguageChange,
  };

  if (!isReady) {
    return false;
  }

  return (
    <LocaleContext.Provider {...{ value }}>{children}</LocaleContext.Provider>
  );
};

export default LocaleContext;
