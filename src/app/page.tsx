import Image from 'next/image'
export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between mt-24">
      <section className=' p-24 bg-gradient-dark w-full h-full flex flex-col items-center justify-center'>
        <div className='flex flex-col gap-11 items-center '>
          <div className=' bg-white rounded-full p-10 w-24 h-24'>
            <img src="public\thumbs-up-memoji.png" alt="memoji-thumbsup" className='' />
          </div>
          <h3 className='text-5xl font-bold	 mt-4'>Hey, I'm <span>Carlos</span></h3>
          <h1 className='text-6xl text-center font-bold'> &lt;h1&gt; Bringing joy to users through web development &lt;/h1&gt; </h1>
        </div>
      </section>
    </main>
  )
}
