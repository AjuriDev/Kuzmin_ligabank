const AppRoute = {
  SERVICES: `/services`,
  CREDIT: `/credit`,
  CONVERTER: `/converter`,
  CONTACTS: `/contacts`,
  SUPPORT: `/support`,
  ROOT: `/`,
  NOT_FOUND: `/404`,
};

const APIRoute = {
  OFFERS: `/hotels`,
  LOGIN: `/login`,
  LOGOUT: `/logout`,
  NEARBY: `/nearby`,
  FAVORITE: `/favorite`,
  REVIEWS: `/comments`
};

const StoreNameSpace = {
  SERVER: `SERVER`,
  MAIN: `MAIN`,
  USER: `USER`,
  FORM: `FORM`,
};

const BtnTypes = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

const CURRENCIES = ['RUB', 'USD', 'EUR', 'GBP', 'CNY'];

const MIN_MONETARY_VALUE = 0;

const InitialConversationCurrencies = {
  FROM: 'RUB',
  TO: 'USD',
}

const CurrencyChangingTypes = {
  FROM: 'FROM',
  TO: 'TO',
}

const CURRENCY_CONVERTER_BASE_URL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1';

const CurrencyDateFormats = {
  REQUEST: 'YYYY-MM-DD',
  VIEW: 'd.MM.yyyy',
}

const DAYS_BEFORE_CNT = 7;

const CURRENCY_DECIMAL = 100;

export {
  AppRoute,
  APIRoute,
  StoreNameSpace,
  BtnTypes,
  CURRENCIES,
  MIN_MONETARY_VALUE,
  InitialConversationCurrencies,
  CurrencyChangingTypes,
  CURRENCY_CONVERTER_BASE_URL,
  CurrencyDateFormats,
  CURRENCY_DECIMAL,
  DAYS_BEFORE_CNT,
};
