import { useHashLink } from "@/hooks/use-hash-link";
import i18n from "@/lib/i18n";
import { Moon, Sun } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { Trans } from "../translate/translate";
import { useTranslate } from "@/hooks/use-translate";
import { cn } from "@/lib/utils";
import { Theme, useTheme } from "../theme-provider";

export interface IHeaderProps {}

const Header = () => {
 const {setTheme, theme} = useTheme()

  const scrollWithOffset = (el: HTMLElement) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({
      top: yCoordinate + yOffset,
      behavior: "smooth",
    });
  };

  const { activeHashLink } = useHashLink([
    "#hero",
    "#my-services",
    "#skills",
    "#projects",
  ]);

  const mainTheme:any = {
    light: <Moon />,
    dark: <Sun />,
  };

  const { t } = useTranslate();

  const handleChangeLanguage = (lang: "pt" | "en") => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <header
      id="meuHeader"
      className="fixed z-50  flex justify-center items-center h-16 px-6 w-full shadow-lg shadow-foreground/10 rounded-md bg-clip-padding bg-background/70  backdrop-filter backdrop-blur-md bg-opacity-60"
    >
      <div className="flex container  w-full items-center justify-between">
        <span className="text-xl">
          lucode.
          <span className="text-primary font-bold">dev</span>
        </span>
        <nav className="flex items-center gap-6">
          <ul className="flex [&_li]:px-3 SMN_effect-31 [&_a]:font-semibold divide-x-2">
            <li className="font-light">
              <HashLink
                scroll={scrollWithOffset}
                smooth
                to={"#my-services"}
                data-hover={t("section.services")}
                className={`${activeHashLink.includes("#my-services") ? "text-primary" : "text-foreground"}  hover:text-primary`}
              >
                <span>
                  <Trans i18nKey="section.services">My Services</Trans>
                </span>
              </HashLink>
            </li>
            <li className="font-light">
              <HashLink
                scroll={scrollWithOffset}
                smooth
                to={"#skills"}
                data-hover={t("section.skills")}
                className={`${activeHashLink.includes("#skills") ? "text-primary" : "text-foreground"}  hover:text-primary`}
              >
                <span>
                  <Trans i18nKey="section.skills">Skills</Trans>
                </span>
              </HashLink>
            </li>
            <li className="font-light">
              <HashLink
                scroll={scrollWithOffset}
                smooth
                to={"#projects"}
                data-hover={t("section.projects")}
                className={`${activeHashLink.includes("#projects") ? "text-primary" : "text-foreground"}  hover:text-primary`}
              >
                <span>
                  <Trans i18nKey="section.projects">Projects</Trans>
                </span>
              </HashLink>
            </li>
          </ul>

          <ul className="flex items-center">
            <li
              className={cn(
                "font-light cursor-pointer border p-1 rounded-l-md",
                i18n.resolvedLanguage === "pt" ? " border-primary" : "",
              )}
              onClick={() => handleChangeLanguage("pt")}
            >
              PT-BR
            </li>
            <li
              className={cn(
                "font-light cursor-pointer border p-1 rounded-r-md",
                i18n.resolvedLanguage === "en" ? " border-primary" : "",
              )}
              onClick={() => handleChangeLanguage("en")}
            >
              EN
            </li>
          </ul>
          <div
            className="font-light cursor-pointer border p-1 rounded-md"
            onClick={() => setTheme( (theme === "dark" ? "light" as Theme : "dark"  as Theme))}
          >
            {mainTheme[theme]}
          </div>
        </nav>
      </div>
    </header>
  );
};

export { Header };
