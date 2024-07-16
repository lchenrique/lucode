import { TransProps } from "@/components/translate/translate";
import { useTranslation } from "react-i18next";


const useTranslate = () => {

  const {t:trans, ...rest} = useTranslation()

  const t = (value:TransProps["i18nKey"]) => trans(value)

  return {t, ...rest}
};

export { useTranslate };