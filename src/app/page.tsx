import Image from 'next/image'
export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between mt-24">
      <section className=' p-24 bg-gradient-dark w-full h-full flex flex-col items-center justify-center'>
        <div className='flex flex-col gap-11 items-center '>
          <div className=' bg-white rounded-full w-40 h-40 p-2 grid items-center'>
            <img src="https://raw.githubusercontent.com/CeeJay-RD/my-portfolio/792ab4a4ddabd946be033d6cf295cafd7461c53d/public/thumbs-up-memoji.png?token=GHSAT0AAAAAACEAHOPTUXTIEF4P6AOF5H4GZF2UEZA" alt="memoji-thumbsup" className='w-40' />
          </div>
          <div>
            <h3 className='text-h3 font-bold text-center	mt-4'>Hey, I'm <span className=' text-emerald-200'>Carlos</span></h3>
            <h1 className='max-w-5xl text-h1 text-center font-bold'> <span className='text-slate-400'>&lt;</span><span className='text-emerald-400'>h1</span><span className='text-slate-400'>&gt;</span> Bringing joy to users through web development<span className='text-slate-400'>&lt;/</span><span className='text-emerald-400'>h1</span><span className='text-slate-400'>&gt;</span> </h1>
          </div>
        </div>
      </section>
    </main>
  )
}