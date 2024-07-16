import { useHashLink } from "@/hooks/use-hash-link";
import i18n from "@/lib/i18n";
import { Moon, Sun } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { Trans, TransProps } from "../translate/translate";
import { useTranslate } from "@/hooks/use-translate";
import { cn } from "@/lib/utils";
import { Theme, useTheme } from "../theme-provider";
import logo from "@/assets/codebycarlos.svg";
import logoDark from "@/assets/codebycarlosdark.svg";
import { Link } from "react-router-dom";

export interface IHeaderProps {}

const Header = () => {
  const { setTheme, theme } = useTheme();

  const scrollWithOffset = (el: HTMLElement) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({
      top: yCoordinate + yOffset,
      behavior: "smooth",
    });
  };

  const hashLinkArr = ["#my-services", "#skills", "#projects"];
  const { activeHashLink } = useHashLink(hashLinkArr);

  const mainTheme: any = {
    light: <Moon />,
    dark: <Sun />,
  };

  const { t } = useTranslate();

  const handleChangeLanguage = (lang: "pt" | "en") => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const menu: { title: TransProps["i18nKey"]; id: string }[] = [
    { title: "section.services", id: "#my-services" },
    { title: "section.skills", id: "#skills" },
    { title: "section.projects", id: "#projects" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header
        id="myHeader"
        className="fixed z-50  flex justify-center items-center h-16 px-6 w-full shadow-lg shadow-foreground/10 rounded-md bg-clip-padding bg-background/70  backdrop-filter backdrop-blur-md bg-opacity-60"
      >
        <div className="flex sm:container gap-2  w-full items-center justify-between">
          {/* <span className="text-xl jets-brains">
          Code by <span className="text-primary font-bold jets-brains">Carlos</span>
        </span> */}
          <Link onClick={scrollToTop} to="/">
            <img src={theme === "dark" ? logo : logoDark} className="w-40" />
          </Link>
          <nav className="flex items-center gap-6  h-16">
            <ul className="md:flex hidden [&_li]:px-3 SMN_effect-31 [&_a]:font-semibold divide-x-2 h-full">
              {menu.map((value) => {
                return (
                  <HashLink
                    scroll={scrollWithOffset}
                    smooth
                    to={value.id}
                    data-hover={t(value.title)}
                    className={`${activeHashLink.includes(value.id) ? "text-primary" : "text-foreground"}  group-hover:text-primary hover:text-primary h-full flex items-center`}
                  >
                    <li>
                      <span>
                        <Trans i18nKey={value.title}>My Services</Trans>
                      </span>
                    </li>
                  </HashLink>
                );
              })}
            </ul>

            <ul className="flex items-center">
              <li
                className={cn(
                  "font-light cursor-pointer border p-1 rounded-l-md text-nowrap",
                  i18n.resolvedLanguage === "pt" ? " border-primary" : "",
                )}
                onClick={() => handleChangeLanguage("pt")}
              >
                PT-BR
              </li>
              <li
                className={cn(
                  "font-light cursor-pointer border p-1 rounded-r-md text-nowrap",
                  i18n.resolvedLanguage === "en" ? " border-primary" : "",
                )}
                onClick={() => handleChangeLanguage("en")}
              >
                EN
              </li>
            </ul>
            <div
              className="font-light cursor-pointer border p-1 rounded-md"
              onClick={() =>
                setTheme(
                  theme === "dark" ? ("light" as Theme) : ("dark" as Theme),
                )
              }
            >
              {mainTheme[theme]}
            </div>
          </nav>
        </div>
      </header>
      <div className="flex md:hidden border-t fixed  items-center justify-around left-0 bottom-0 w-full h-16 z-50  bg-background/70  backdrop-filter backdrop-blur-md bg-opacity-60">
        <ul className="flex [&_li]:px-3 SMN_effect-31 [&_a]:font-semibold divide-x-2 h-full">
          {menu.map((value) => {
            return (
              <HashLink
                scroll={scrollWithOffset}
                smooth
                to={value.id}
                data-hover={t(value.title)}
                className={`${activeHashLink.includes(value.id) ? "text-primary" : "text-foreground"} group-active:text-primary active:text-primary h-full flex items-center`}
              >
                <li>
                  <span className="align-middle self-center block">
                    <Trans i18nKey={value.title}>My Services</Trans>
                  </span>
                </li>
              </HashLink>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export { Header };
