
interface SkillProps {
    imgSrc: string,
    text: string,
}


const SkillCard: React.FC<SkillProps> = ({ imgSrc, text }) => {
    return (
      <div>
        <div className="flex flex-col  items-center">
          <img src={imgSrc} alt={text} className="" />
          <p className="">{text}</p>
        </div>
      </div>
    );
  };
  
export default SkillCard;