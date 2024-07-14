import { resources } from "@/lib/i18n";
import { useTranslation } from "react-i18next";


const useTranslate = () => {

  const {t:trans, ...rest} = useTranslation()

  const t = (value: keyof typeof resources["pt"]["translation"]) => trans(value)

  return {t, ...rest}
};

export { useTranslate };