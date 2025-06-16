import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      welcome: "Welcome to Dashboard",
      login: "Login",
      signup: "Sign Up",
      email: "Email",
      password: "Password",
      remember: "Remember Me",
      logout: "Logout",
      dashboard: "Dashboard",
      switchLang: "عربي",
    },
  },
  ar: {
    translation: {
      welcome: "مرحبًا بك في لوحة التحكم",
      login: "تسجيل الدخول",
      signup: "إنشاء حساب",
      email: "البريد الإلكتروني",
      password: "كلمة المرور",
      remember: "حفظ تسجيل الدخول",
      logout: "تسجيل الخروج",
      dashboard: "لوحة التحكم",
      switchLang: "English",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "ar",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
