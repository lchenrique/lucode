import { Trans, TransProps } from "../translate/translate";

export interface ISectionTitleProps {
  title: string;
  translation: TransProps["i18nKey"];
}

const SectionTitle = ({ title, translation }: ISectionTitleProps) => {
  return (
    <h1 className="text-4xl mb-5 montserrat">
      <Trans i18nKey={translation}>{title}</Trans>
    </h1>
  );
};

export { SectionTitle };
