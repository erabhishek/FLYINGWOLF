import LocalizedStrings from 'react-native-localization';

export const GlobalConstant = {
  NONE: 'none',
  ANDROID: 'android',
  iOS: 'ios',
  WINDOW: 'window',
  NO_INTERNET: 'No Internet Connection',
  CHECK_INTERNET_CONNECTION: 'Please check your network connectivity',
  OK: 'OK',
  NO_INTERNET: 'No Internet',
  TRY_AGAIN: 'Try Again',
};

export const localizedStrings = new LocalizedStrings({
  'en-US': {
    USERNAME: 'Username',
    PASSWORD: 'Password',
    RECOMMENDED_SECTION: 'Recommended for you',
    FLYINGWOLF: 'Flyingwolf',
    LOGOUT: 'LOGOUT!!!',
    YES: 'YES',
    NO: 'NO',
    LOGOUT_MESSAGE: 'Are sure you want to Logout?',
    ELO_RATING: 'Elo Rating',
    LOGIN_FAILED: 'Login failed!!!',
    LOGIN: 'LOGIN',
    TOURNAMENTS: 'Tournaments',
    PLAYED: 'played',
    WON: 'won',
    WINNING: 'Winning',
    PERCENTAGE: 'percentage',
  },
  en: {
    USERNAME: 'Username',
    PASSWORD: 'Password',
    RECOMMENDED_SECTION: 'Recommended for you',
    FLYINGWOLF: 'Flyingwolf',
    LOGOUT: 'LOGOUT!!!',
    YES: 'YES',
    NO: 'NO',
    YES: 'YES',
    NO: 'NO',
    LOGOUT_MESSAGE: 'Are sure you want to Logout?',
    ELO_RATING: 'Elo Rating',
    LOGIN_FAILED: 'Login failed!!!',
    LOGIN: 'LOGIN',
    TOURNAMENTS: 'Tournaments',
    PLAYED: 'played',
    WON: 'won',
    WINNING: 'Winning',
    PERCENTAGE: 'percentage',
  },
  ja: {
    USERNAME: 'ユーザー名',
    PASSWORD: 'パスワード',
    RECOMMENDED_SECTION: 'あなたにおすすめ',
    FLYINGWOLF: 'フライングウルフ',
    LOGOUT: 'ログアウト!!!',
    YES: 'はい',
    NO: '番号',
    LOGOUT_MESSAGE: 'ログアウトしますか？',
    LOGIN_FAILED: 'ログインに失敗しました!',
    LOGIN: 'ログインする',
    ELO_RATING: 'エロ評価',
    TOURNAMENTS: 'トーナメント',
    PLAYED: '演奏した',
    WON: '勝った',
    WINNING: '勝利',
    PERCENTAGE: '割合',
  },
});

export const KeyBoardType = {
  NUMBER: 'numeric',
};

export const LoginConstant = {
  USERNAME: 'Username',
  PASSWORD: 'Password',
};
