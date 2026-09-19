import './App.css';


function Hero() {
    return (
        <div id='home' className="  bg-canvasbg border-b border-b-ink/45 flex flex-col md:h-[calc(100vh-68px)] pb-28 px-8 md:px-12  z-0">
            <div className=' flex flex-row gap-2 justify-between mb-12 px-1 pt-1'>
                <span className=' flex font-outfit text-ink text-sm'><span className=' bg-lilac flex-wrap h-0.5 inline-block mr-2.5 self-center rounded-sm w-3 md:w-8'></span>FRONTEND DEVELOPER</span>
                <span className=' flex font-outfit pl-1 md:pl-0 text-ink text-sm'><span className=' bg-green-400 flex-wrap h-2 inline-block mr-2.5 self-center rounded-[50%] w-2'></span>AVAILABLE</span>
            </div>
            <div className=" items-end gap-6 grid grid-cols-1 md:grid-cols-[1fr_auto] max-w-7xl">
                <div className="">
                    <h1 className=" font-fraunces font-normal text-8xl text-[clamp(3.5rem,9vw,7.5rem)] text-ink ">
                        Crafting <br /> <span className=" font-normal italic text-lilac ">interfaces</span> <br /> that matter<span className=' animate-blink font-normal text-lilac'>.</span>
                    </h1>
                </div>
                <div className=' w-full md:max-w-70 pb-4'>
                    <p className=' font-light font-outfit pb-6 text-[0.95rem] text-ink/70'>I'm Ada Elechi - a frontend developer turning complex design systems into pixel-precise, performant, and accessible products.</p>
                    <div className='flex flex-wrap gap-3'>
                        <button className=' bg-lilac hover:bg-ink font-medium font-outfit hover:cursor-pointer px-5 py-2.5 text-white text-xs tracking-wider'><a href="#work">VIEW WORK</a></button>
                        <button className=' border border-ink/55 hover:border-ink font-medium font-outfit hover:cursor-pointer px-5 py-2.5 text-ink/70 hover:text-ink text-xs tracking-wider'><a href="#contact">SAY HELLO</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Hero;