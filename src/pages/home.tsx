import { Card } from "@/components/card";
import { Divider } from "@/components/divider/divider";
import { Flex } from "@/components/elements/flex";
import { Features } from "@/components/features/features";
import { Hero } from "@/components/hero.";
import { Main } from "@/components/layout/Main";
import { SectionTitle } from "@/components/section-title/section-title";
import { SkillIcon } from "@/components/skill-icon";
import { Trans } from "@/components/translate/translate";
import { Button } from "@/components/ui/button";
import {
  ChevronsUp,
  Globe,
  MonitorCheck,
  TabletSmartphone,
} from "lucide-react";
import { useEffect, useState } from "react";
import { portfolioImages } from "./images";

const Home = () => {
  const [showScrollToTopButton, setScrollToTopButton] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    function verificarPosicao() {
      const header = document.getElementById("hero");
      if (header) {
        const headerRect = header.getBoundingClientRect();
        if (headerRect.bottom <= 540 && headerRect.top <= 1) {
          if (!showScrollToTopButton) {
            setScrollToTopButton(true);
          }
        } else if (headerRect.top > 20) {
          if (showScrollToTopButton) {
            setScrollToTopButton(false);
          }
        }
      }
    }

    window.addEventListener("scroll", verificarPosicao);
    return () => {
      window.removeEventListener("scroll", verificarPosicao);
    };
  }, [showScrollToTopButton]);

  return (
    <>
      <Main>
        <Hero />
        <Divider />
        <section id="my-services" className="w-full mt-8">
          <SectionTitle title="My Services" translation="section.services" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-5">
            <Card
              title={
                <Flex gap="3" align="center">
                  <Globe className="text-primary" />
                  <Trans i18nKey="services.webdev.title">Web Development</Trans>
                </Flex>
              }
            >
              <Trans i18nKey="services.webdev.description">
                Create a modern, responsive, and mobile-friendly website that
                will strengthen your online presence and boost your marketing
                strategies. By utilizing the latest technologies and best design
                practices, I will ensure that your website not only looks
                visually appealing but also provides a smooth and intuitive user
                experience.
              </Trans>
            </Card>
            <Card
              title={
                <Flex gap="3" align="center">
                  <TabletSmartphone className="text-primary" />
                  <Trans i18nKey="services.mobiledev.title">
                    Mobile Development
                  </Trans>
                </Flex>
              }
            >
              <Trans i18nKey="services.mobiledev.description">
                I develop efficient and intuitive mobile applications for
                Android and iOS that will help promote your brand and achieve
                your business goals. Using frameworks like React Native and
                modern technologies, I will create apps that deliver an
                exceptional user experience and meet the specific needs of your
                users.
              </Trans>
            </Card>
            <Card
              title={
                <Flex gap="3" align="center">
                  <MonitorCheck className="text-primary" />

                  <Trans i18nKey="services.desktopdev.title">
                    Desktop Development
                  </Trans>
                </Flex>
              }
            >
              <Trans i18nKey="services.desktopdev.description">
                I develop cross-platform desktop applications using Electron,
                providing an efficient and integrated solution for your needs.
                By combining familiar web technologies like HTML, CSS, and
                JavaScript with native operating system features, I can create
                robust and powerful desktop applications that work on Windows,
                macOS, and Linux.
              </Trans>
            </Card>
          </div>
        </section>
        <Divider />
        <section id="skills" className="w-full my-8">
        <SectionTitle title="Skills" translation="section.skills" />
        </section>
        <div className="ticker-wrap">
          <div className="ticker flex">
            <span className="item-collection-1">
              <SkillIcon name="bootstrap-plain" colored />
              <SkillIcon name="html5-plain" colored />
              <SkillIcon name="css3-plain" colored />
              <SkillIcon name="javascript-plain" colored />
              <SkillIcon name="typescript-plain" colored />
              <SkillIcon name="react-plain" colored />
              <SkillIcon name="nextjs-plain" />
              <SkillIcon name="angular-plain" colored />
              <SkillIcon name="nodejs-plain" colored />
              <SkillIcon name="docker-plain" colored />
            </span>
            <span className="item-collection-2">
              <SkillIcon name="bootstrap-plain" colored />
              <SkillIcon name="storybook-plain" colored />
              <SkillIcon name="tailwindcss-original" colored />
              <SkillIcon name="antdesign-plain" colored />
              <SkillIcon name="mongodb-plain" colored />
              <SkillIcon name="electron-original" />
              <SkillIcon name="sass-original" colored />
              <SkillIcon name="cypressio-plain" />
              <SkillIcon name="prisma-original" />
            </span>
          </div>
        </div>
        <Divider />
        <section id="projects" className="w-full mt-8 flex flex-col gap-10">
          <SectionTitle title="Projects" translation="section.projects" />

          <div className="flex items-center w-full justify-between flex-col lg:flex-row gap-10">
            <Features
              preview={portfolioImages.colaborators}
              images={[
                portfolioImages.dashboard,
                portfolioImages.userdetails,
              ]}
              title="Reallagos"
              subtitle={
                <Trans i18nKey="system.for.accountants">
                  Sistema para contadores
                </Trans>
              }
              description={
                <Trans i18nKey="projects.reallagos.description">
                  O Sistema oferece uma solução abrangente para gerenciar
                  tarefas contábeis e financeiras. O sistema facilita o controle
                  de balanços, relatórios financeiros, lançamentos contábeis e
                  outras operações essenciais.
                </Trans>
              }
              tags={[
                "react",
                "typescript",
                "tailwindcss",
                "sass",
                "html5",
                "javascript",
              ]}
            />
            <Features
              preview={portfolioImages.softcontaLandingPage}
              images={[
                portfolioImages.cadastro,
                portfolioImages.login,
                portfolioImages.recoveryPass,
              ]}
              title="Softconta"
              subtitle="Landing page"
              description={
                <Trans i18nKey="projects.sofconta.description">
                  O sistema foi criado para atender às necessidades de
                  contadores modernos. Com ele, é possível eliminar totalmente a
                  dependência de planilhas e outras ferramentas manuais.
                </Trans>
              }
              tags={[
                "react",
                "typescript",
                "tailwindcss",
                "css3",
                "html5",
                "javascript",
              ]}
            />
          </div>
          <div className="flex items-center w-full justify-between flex-col lg:flex-row gap-10">
            <Features
              preview={portfolioImages.medtime}
              images={[
                portfolioImages.patients,
                portfolioImages.medtimeDark,
                portfolioImages.patientsDark,
              ]}
              title="Medtime"
              subtitle="Web app"
              description={
                <div className="">
                  <a
                    className="text-primary"
                    target="_blank"
                    href="https://medicine-time.vercel.app/"
                  >
                    Open
                  </a>
                  <div>
                    <Trans i18nKey="projects.medtime.description">
                      É um sistema web desenvolvido para ajudar usuários a
                      lembrar de tomar seus medicamentos na hora certa. Com uma
                      interface intuitiva e notificações automáticas, o MedTime
                      garante que você nunca mais perca uma dose dos seus
                      remédios.
                    </Trans>
                  </div>
                  <div className="text-sm font-bold">
                    {" "}
                    {"("}
                    {
                      <Trans i18nKey="under.development">
                        Em desenvolvimento
                      </Trans>
                    }
                    {")"}
                  </div>
                </div>
              }
              tags={[
                "react",
                "typescript",
                "tailwindcss",
                "css3",
                "html5",
                "javascript",
              ]}
            />

            <Features
              preview={portfolioImages.magicPanel}
              images={[
                portfolioImages.modal,
                portfolioImages.drawer,
                portfolioImages.drawerB,
              ]}
              title="Magic 🪄 Panel"
              subtitle={<Trans i18nKey="lib.for.react">Biblioteca React</Trans>}
              description={
                <div className="">
                  <a
                    className="text-primary"
                    target="_blank"
                    href="https://magic-panel-web.vercel.app/"
                  >
                    Open
                  </a>
                  <div>
                    <Trans i18nKey="projects.magicpanel.description">
                      This powerful React library allows you to easily create
                      modal panels and drawers in your web applications like
                      magic
                    </Trans>
                  </div>
                </div>
              }
              tags={[
                "react",
                "typescript",
                "tailwindcss",
                "css3",
                "html5",
                "javascript",
              ]}
            />
          </div>
        </section>
        <div className="w-full h-[1px] bg-gray-100/5 mt-10" />
        {showScrollToTopButton && (
          <Button
            onClick={scrollToTop}
            className="h-12 w-12 slide-top scale-up-center  rounded-full fixed right-10   min-[1395px]:right-20  min-[1795px]:right-80  -bottom-5 bg-primary flex items-center justify-center"
          >
            <ChevronsUp />
          </Button>
        )}
      </Main>
    </>
  );
};

export { Home };
