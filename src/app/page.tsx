"use client"
import Image from "next/image";
import SkillCard from "./components/SkillCard";
import { motion } from "framer-motion"


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between mt-24">
      <section className=" p-24 bg-gradient-dark w-full h-full flex flex-col items-center justify-center">
        <div className="flex flex-col gap-11 items-center ">
          <div className=" bg-white rounded-full w-40 h-40 p-2 grid items-center">
            <img
              src="https://github.com/CeeJay-RD/my-portfolio/blob/master/public/thumbs-up-memoji.png?raw=true"
              alt="memoji-thumbsup"
              className="w-40"
            />
          </div>
          <div>
            <h3 className="text-h3 font-bold text-center	mt-4">
              Hey, I'm <span className=" text-emerald-200">Carlos</span>
            </h3>
            <h1 className="max-w-5xl text-h1 text-center font-bold">
              {" "}
              <span className="text-slate-400">&lt;</span>
              <span className="text-emerald-400">h1</span>
              <span className="text-slate-400">&gt;</span> Bringing joy to users
              through web development
              <span className="text-slate-400">&lt;/</span>
              <span className="text-emerald-400">h1</span>
              <span className="text-slate-400">&gt;</span>{" "}
            </h1>
          </div>
        </div>
      </section>

      <section className=" py-24 px-9 md:px-36 flex flex-col-reverse md:flex md:flex-row items-center justify-between w-full h-full">
        <div className="">
          <div className="text-h1">
            <h1 className="text-h1 font-bold underline underline-offset-8 decoration-emerald-400">
              About me
            </h1>
          </div>

          <div className="flex mt-12 justify-start item gap-11">
            <div className=" h-auto w-1 text-emerald-50 bg-slate-50"></div>
            <p className=" max-w-md text-p">
              I'm passionate about creating dynamic and user-friendly web
              solutions. Let's build something great together! With experience
              in different roles and industries!
            </p>
          </div>

          <div className=" mt-8">
            <h4 className=" text-4xl font-bold">Skills</h4>
            <motion.div
              className=" grid grid-cols-3 gap-1 max-w-xl mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <SkillCard
                imgSrc="https://github.com/CeeJay-RD/my-portfolio/blob/master/public/React.png?raw=true"
                text="React"
              />
              <SkillCard
                imgSrc="https://github.com/CeeJay-RD/my-portfolio/blob/master/public/NodeJS.png?raw=true"
                text="Node.js"
              />
              <SkillCard
                imgSrc="https://github.com/CeeJay-RD/my-portfolio/blob/master/public/mongo.png?raw=true"
                text="MongoDB"
              />
              <SkillCard
                imgSrc="https://github.com/CeeJay-RD/my-portfolio/blob/master/public/Express.png?raw=true"
                text="Express"
              />
              <SkillCard
                imgSrc="https://github.com/CeeJay-RD/my-portfolio/blob/master/public/Tailwind.png?raw=true"
                text="Tailwind"
              />
              <SkillCard
                imgSrc="https://github.com/CeeJay-RD/my-portfolio/blob/master/public/JavasScript.png?raw=true"
                text="Javascript"
              />
            </motion.div>
          </div>
        </div>
        <motion.div 
          
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className=""
        >
          <img
            src="https://github.com/CeeJay-RD/my-portfolio/blob/master/public/Salute%20Memoji.png?raw=true"
            alt="salute-memoji"
            className="md:w-8/12 md:ml-16"
          />
        </motion.div>
      </section>
    </main>
  );
}
