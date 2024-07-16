import { useTranslate } from "@/hooks/use-translate"
import { resources } from "@/lib/i18n"

export interface TransProps {
  children?: string
  i18nKey?: keyof typeof resources["pt"]["translation"]
}

export const Trans = ({ children, i18nKey }: TransProps) => {
  const { t } = useTranslate()


  if (i18nKey) {
    return t(i18nKey)
  }
  return children
}