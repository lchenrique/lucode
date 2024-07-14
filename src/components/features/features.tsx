import { ReactNode } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
const technologies = {
  "bootstrap": "#7952B3",
  "html5": "#E34F26",
  "css3": "#1572B6",
  "javascript": "#9c8a00",
  "typescript": "#3178C6",
  "react": "#19687e",
  "nextjs": "#222222",
  "angular": "#1d191a",
  "nodejs": "#339933",
  "docker": "#2496ED",
  "storybook": "#FF4785",
  "tailwindcss": "#007286",
  "antdesign": "#0170FE",
  "mongodb": "#47A248",
  "electron": "#47848F",
  "sass": "#CC6699",
  "cypressio": "#17202C",
  "prisma": "#0C344B"
};

export interface IFeaturesProps {
  title: ReactNode
  subtitle: ReactNode
  description: ReactNode
  preview?: string
  images?: string[]
  tags: (keyof typeof technologies)[]
}
const Features = ({ title, subtitle, preview, tags, description, images }: IFeaturesProps) => {



  return (
    <section className=" w-full lg:w-[653px] flex gap-6  justify-center flex-col xl:flex-row">
      <div className="flex flex-col gap-3">
        <div className="flex gap-3 w-full">
          <PhotoProvider>
            <PhotoView src={preview}>
              {<div className="rounded-md overflow-hidden h-[250px]  min-w-[330px] w-full  cursor-pointer hover:scale-105 transition-all">
                <img src={preview} alt="#_" className=" bg-background min-w-[330px] h-full w-full object-cover object-left-top" />
              </div>}
            </PhotoView>
            {images?.map(v => {
              return <PhotoView src={v} />
            })}
          </PhotoProvider>
        </div>
        <div className="flex flex-wrap gap-3">
          {tags?.map(value => {
            return <div className="px-2  rounded-lg w-max flex-1 " style={{ background: technologies[value] }}>{value}</div>
          })}
        </div>

      </div>



      <div className="w-full xl:max-w-[300px] gap-3 flex flex-col align-baseline justify-between">
        <div className="prose text-muted-foreground prose-sm prose-headings:font-normal prose-headings:text-xl">
          <div>
            <h1 className="text-xl font-bold">{title}</h1>
            <p className="text-balance">{subtitle}</p>

          </div>
          <ul className="mt-3 flex flex-col gap-2 text-muted-foreground/65">
            {description}
          </ul>
        </div>
      </div>

    </section>
  );
}

export { Features };

