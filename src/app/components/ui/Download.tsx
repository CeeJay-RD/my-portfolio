"use client"

interface DownloadProps {
    fileSrc: string,
    text: string,
}

const Download: React.FC<DownloadProps> = ({ fileSrc, text}) => {
    
    return (
      <>
        <a
          href={fileSrc}
          className="btn group flex items-center bg-transparent p-2 px-6 text-xl  tracking-widest"
        >
          <span className="relative pr-4 pb-1 text-black after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-emerald-500 after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100">
            {text}
          </span>
          <svg
            className="-translate-x-2 fill-slate-700 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-x-105 group-hover:fill-emerald-500"
            id="arrow-horizontal"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="10"
            viewBox="0 0 46 16"
          >
            <path
              id="Path_10"
              data-name="Path 10"
              d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
              transform="translate(30)"
            ></path>
          </svg>
        </a>
      </>
    );


}



export default Download