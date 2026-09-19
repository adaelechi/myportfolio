import Demo from "./assets/demo.png";



function About() {
    return (
        <div id="about" className=" bg-canvasbg gap-y-8 md:gap-x-16 grid grid-cols-1 md:grid-cols-2 px-8 md:px-12 py-24 md:py-32">
            <span className=" font-medium font-outfit col-span-2 text-lilac text-xs tracking-wider">03 / ABOUT</span>
            <figure className="col-start-1 col-end-2 row-start-2 row-end-3 h-30 md:h-full">
                <img src={Demo} alt="" className=" aspect-auto h-full" />
            </figure>
            <div className=" col-start-2 col-end-3 row-start-3 md:row-start-2 row-end-4 md:row-end-3">
                <h2 className=" font-fraunces font-normal italic leading-14 md:leading-18 text-5xl md:text-6xl text-ink">Building at the <br className=" block sm:hidden md:block" /> edge of <br /> design & code</h2>
                <div className=" border-b border-ink/45 py-5 md:py-8">
                    <p className=" font-outfit py-2.5 text-[0.95rem] text-ink/70">I'm Ada Elechi, a frontend developer. I specialise in turning complex design systems into living, breathing interfaces with a particular obsession for performance, accessibility, and micro-interaction craft.</p>
                    <p className=" font-outfit py-2.5 text-[0.95rem] text-ink/70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam veniam voluptates ex ipsum ut aliquid possimus? A error consectetur praesentium explicabo corrupti quo fugiat. Eaque quae laboriosam natus error ab.</p>
                </div>
                <div className=" grid grid-cols-[1fr_2fr]">
                    <span className=" border-b border-ink/45 font-normal font-outfit py-4 text-ink/70 text-sm">LOCATION</span>
                    <span className=" border-b border-ink/45 font-normal font-outfit py-4 text-ink text-sm">Lagos, Nigeria</span>
                    <span className=" border-b border-ink/45 font-normal font-outfit py-4 text-ink/70 text-sm">FOCUS</span>
                    <span className=" border-b border-ink/45 font-normal font-outfit py-4 text-ink text-sm">Frontend Developing</span>
                    {/* <span className=" border-b border-ink/45 font-normal font-outfit py-4 text-ink/70 text-sm">EDUCATION</span>
                    <span className=" border-b border-ink/45 font-normal font-outfit py-4 text-ink text-sm">BSc Economics, Covenant University</span> */}
                </div>
            </div>
        </div>
    )
};

export default About;