import Image from "next/image";
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

      <section className=" p-24 flex flex-col   w-full h-full">
        <div>
          <h3 className="text-h3 font-bold underline underline-offset-8 decoration-emerald-400">
            About me
          </h3>
        </div>

        <div className="flex mt-12 justify-start item gap-11">
          <div className=" h-auto w-1 text-emerald-50 bg-slate-50"></div>
          <p className=" max-w-md text-2xl">
            I'm passionate about creating dynamic and user-friendly web
            solutions. Let's build something great together! With experience in
            different roles and industries!
          </p>
        </div>

        <div className=" mt-8">
          <h4 className=" text-4xl">Skills</h4>
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>

        <div>
          <img src="" alt="salute-memoji" />
        </div>
      </section>
    </main>
  );
}
