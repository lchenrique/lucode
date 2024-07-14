export interface ISkillIconProps {
  name: string
  colored?: boolean
}

const SkillIcon = (props: ISkillIconProps) => {
  return (
    <div className="group text-lg flex flex-col text-center item">
      <i className={`group-hover:scale-125  transition-transform devicon-${props.name} ${props.colored ? "colored":""}  text-2xl`}></i>
      <span className="capitalize"> {props.name.split("-")[0]}</span>
    </div>
  );
};

export { SkillIcon };