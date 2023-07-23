
interface SkillProps {
    imgSrc: string,
    text: string,
}


const SkillCard: React.FC<SkillProps> = ({ imgSrc, text }) => {
    return (
      <div className="flex-col">
        <img src={imgSrc} alt={text} className="w-32 bg-cyan-100 rounded-3xl p-4 " />
        <p className="w-32 text-center">{text}</p>
      </div>
    );
  };
  
export default SkillCard;