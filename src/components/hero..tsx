import { useEffect, useRef, useState } from "react";
import { Flex } from "./elements/flex";
import { Button } from "./ui/button";
import { Download, Github, Instagram, Linkedin } from "lucide-react";
import avataImg from "../assets/avatar-hero.png";
import { Trans } from "./translate/translate";
import i18n from "@/lib/i18n";


const Hero = () => {
  const [toggle, setToggle] = useState(false);
  const [width, setWidth] = useState("0");
  const [ref1, ref2] = [useRef<HTMLElement>(null), useRef<HTMLElement>(null)];

  useEffect(() => {
    const time = setInterval(() => {
      setToggle(!toggle);
      clearInterval(time);
    }, 3000);
  }, [toggle]);

  useEffect(() => {
    new Promise((resolve) => {
      const interval = setInterval(() => {
        if (!toggle) {
          if (ref1.current) {
            const width = ref1.current.offsetWidth;
            setWidth(width.toString() + "px");
          }
        } else {
          if (ref2.current) {
            const width = ref2.current.offsetWidth;
            setWidth(width.toString() + "px");
          }
        }
        clearInterval(interval);
        resolve(true);
      }, 500);
    }).then(() => {
      const interval = setInterval(() => {
        setWidth("0");
        clearInterval(interval);
      }, 2000);
    });
  }, [ref1, ref2, toggle]);

  return (
    <>
      <div id="hero" className="h-full flex-col-reverse lg:flex-row text-left  flex items-center justify-center w-full ">

        <div className="flex flex-col gap-2 sm:text-base mx-3">
          <h1 className="font-semibold text-foreground  mt-10 text-[2rem] sm:text-5xl text-center lg:text-left">
            <Trans i18nKey="hero.hello">Hi, I’m</Trans>{" "}
            <span className="text-primary whitespace-nowrap font-extrabold">
              Carlos Henrique
            </span>
            .
          </h1>
          <div className="items-baseline text-[1.5rem] justify-center lg:justify-start inline-flex mx-auto lg:mx-0  gap-3 sm:text-5xl w-full  max-w-[750px]">
            { i18n.resolvedLanguage == "en" && <span className="font-semibold leading-[100%] text-foreground">a</span>}
            <span
              style={{ width }}
              className="whitespace-nowrap  leading-[2.5rem] sm:leading-[3.5rem]  overflow-hidden transition-all duration-500 "
            >
              <b ref={ref1} className={toggle ? "hidden" : "visible text-foreground"}>
                <Trans i18nKey="role.ref1">
                  Developer.
                </Trans>
              </b>
              <b ref={ref2} className={!toggle ? "hidden" : "visible text-foreground"}>
                <Trans i18nKey="role.ref2">
                  Front-End Engineer.
                </Trans>
              </b>
            </span>
            <div
              className={`w-[3px] h-[1.5rem] sm:h-[42px]  bg-white leading-none animate-[pulse_800ms_ease-in-out_infinite]  ${width !== "0" ? "ml-0" : "-ml-3"}`}
            />
          </div>
          <div className="w-full ">
            <p className="text-card-foreground text-center lg:text-left">
              <Trans i18nKey="about.me">
                I specialize in front-end development, focusing on crafting
                beautiful and intuitive user interfaces. With a deep
                understanding of modern JavaScript frameworks and a keen eye for
                design, I strive to deliver exceptional user experiences.
              </Trans>
            </p>
          </div>
          <Flex
            gap="3"
            align="center"
            className="justify-center lg:justify-start mt-3"
          >
            <Button>
              <Trans i18nKey="contact.me">Contact Me</Trans>
            </Button>
            <Button asChild variant="link">
              <a href="https://github.com/lchenrique" target="_blank">
                <Github />
              </a>
            </Button>

            <Button asChild variant="link">
              <a href="https://www.linkedin.com/in/carlos-henrique-601797107/" target="_blank">
                <Linkedin />
              </a>
            </Button>
            <Button asChild variant="link">
              <a href="https://www.instagram.com/lucode.dev/" target="_blank">
                <Instagram />
              </a>
            </Button>
          </Flex>
          <Button
            variant="outline"
            className="max-w-[304px] gap-3 w-full mt-4 border-primary hover:bg-primary/10 mx-auto lg:mx-0">
            <Trans i18nKey="download.cv">
              Download CV
            </Trans>
            <Download className="size-4"/>
          </Button>
        </div>

        <section className="flex  w-full items-center justify-center lg:justify-end mt-8 h-full">
          <div className="max-w-[300px] relative  max-h-[300px] lg:max-w-[450px] lg:max-h-[450px] flex items-center justify-center animate-[bounce_15000ms_ease-in-out_infinite] " >
            <div className="absolute border-primary border-[5px] w-[calc(100%-50px)] h-[calc(100%-50px)] rounded-full" />
            <div className="absolute top-1/2 -translate-y-1/2 border-primary border-[15px] w-full h-full rounded-full" />
            <img
              src={avataImg}
              alt="Homem com óculos de armação preta e barba. Ele está sorrindo para a câmera e usando uma camiseta."
              className="w-full h-full z-50"
            />
          </div>
        </section>
      </div>

    </>
  );
};

export { Hero };