const AppRoute = {
  SERVICES: `/services`,
  CREDIT: `/credit`,
  CONVERTER: `/converter`,
  CONTACTS: `/contacts`,
  SUPPORT: `/support`,
  ROOT: `/`,
  NOT_FOUND: `/404`,
};

const StoreNameSpace = {
  CONVERSATION_HISTORY: `CONVERSATION_HISTORY`,
};

const BtnTypes = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

const CURRENCIES = ['RUB', 'USD', 'EUR', 'GBP', 'CNY'];

const MonetaryValues = {
  MIN: 0,
  MAX: 10000000,
}

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
  DATEPICKER_VIEW: 'd.MM.yyyy',
  CONVERSATION_HISTORY_VIEW: 'D.MM.YYYY',
}

const DAYS_BEFORE_CNT = 7;

const CURRENCY_DECIMAL = 100;

const HISTORY_LENGTH = 10;

export {
  AppRoute,
  StoreNameSpace,
  BtnTypes,
  CURRENCIES,
  MonetaryValues,
  InitialConversationCurrencies,
  CurrencyChangingTypes,
  CURRENCY_CONVERTER_BASE_URL,
  CurrencyDateFormats,
  CURRENCY_DECIMAL,
  DAYS_BEFORE_CNT,
  HISTORY_LENGTH,
};
