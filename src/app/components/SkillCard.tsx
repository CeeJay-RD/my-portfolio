import { motion } from "framer-motion";
interface SkillProps {
    imgSrc: string,
    text: string,
}


const SkillCard: React.FC<SkillProps> = ({ imgSrc, text }) => {
    return (
      <div>
        <motion.div className="flex flex-col  items-center"
        whileHover={{ scale: 1.1 }}
        transition={{
          duration: 0.5,
          delay: 0,
          ease: [0, 0.71, 0.2, 1.01],
        }}>
          <img src={imgSrc} alt={text} className="" />
          <p className="">{text}</p>
        </motion.div>
      </div>
    );
  };
  
export default SkillCard;