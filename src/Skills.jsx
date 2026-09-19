import { useState } from "react";
import Stack from "./Stack";

function Skills() {
    const [isCore, setIsCore] = useState(true);
    const [isFrame, setIsFrame] = useState(false);
    const [isStyle, setIsStyle] = useState(false);
    const [isTool, setIsTool] = useState(false);
    const [isCreate, setIsCreate] = useState(false);

    const coreStack = () => {
        setIsCore(true),
        setIsFrame(false),
        setIsStyle(false),
        setIsTool(false),
        setIsCreate(false)
    };

    const frameStack = () => {
        setIsCore(false),
        setIsFrame(true),
        setIsStyle(false),
        setIsTool(false),
        setIsCreate(false)
    };

    const styleStack = () => {
        setIsCore(false),
        setIsFrame(false),
        setIsStyle(true),
        setIsTool(false),
        setIsCreate(false)
    };

    const toolStack = () => {
        setIsCore(false),
        setIsFrame(false),
        setIsStyle(false),
        setIsTool(true),
        setIsCreate(false)
    };

    const createStack = () => {
        setIsCore(false),
        setIsFrame(false),
        setIsStyle(false),
        setIsTool(false),
        setIsCreate(true)
    };

    return (
        <div id="skills" className=" bg-canvasdark  px-8 md:px-12 py-24 md:py-32">
            <span className=" font-medium font-outfit text-lilac text-xs tracking-wider">02 / SKILLS</span>
            <h2 className=" font-fraunces font-normal italic pb-4 md:pb-0 mt-8 mb-16 md:pr-4 text-6xl">Technical Stack</h2>
            <div className=" grid grid-cols-2 grid-rows-[auto_1fr]">
                <div className=" content-start flex flex-col flex-wrap row-start-1 row-end-2 md:row-end-3 mb-2 md:mb-0 justify-start">
                    <button onClick={coreStack} className={isCore ? "skillbtn-active w-32 md:w-80" : "skillbtn w-32 md:w-80"}>Core</button>
                    <button onClick={frameStack} className={isFrame ? "skillbtn-active w-32 md:w-80" : "skillbtn w-32 md:w-80"}>Frameworks</button>
                    <button onClick={styleStack} className={isStyle ? "skillbtn-active w-32 md:w-80" : "skillbtn w-32 md:w-80"}>Styling</button>
                    <button onClick={toolStack} className={isTool ? "skillbtn-active w-32 md:w-80" : "skillbtn w-32 md:w-80"}>Tooling</button>
                    <button onClick={createStack} className={isCreate ? "skillbtn-active w-32 md:w-80" : "skillbtn w-32 md:w-80"}>Creative</button>
                </div>
                <div className=" col-start-2 col-end-3 m-2 row-start-1 row-end-2 md:h-24">
                    <Stack id='core-stack' className={isCore ? 'stack' : 'hidden'} one="HTML5" two="CSS3" three="JavaScript" four="Git"  />
                    <Stack id='framework-stack' className={isFrame ? 'stack' : 'hidden'} one="React" two=""  />
                    <Stack id='styling-stack' className={isStyle ? 'stack' : 'hidden'} one="TailwindCSS" two="" />
                    <Stack id='tooling-stack' className={isTool ? 'stack' : 'hidden'} one="Vite" two="npm" three="ESLint" four="Prettier" />
                    <Stack id='creative-stack' className={isCreate ? 'stack' : 'hidden'} one="Figma" two="Canva" />
                </div>
                <div className=" col-start-1 md:col-start-2 col-end-3 row-start-2 row-end-3 grid grid-cols-2">
                    <div className=" border-r border-ink/30 col-start-1 col-end-2 row-start-1 row-end-2 pl-6 py-8">
                        <span className=" font-fraunces font-medium italic text-ink text-5xl">2+</span><br />
                        <span className=" font-outfit text-ink/70 text-xs">YEARS EXPERIENCE</span>
                    </div>
                    <div className=" border-ink/30 col-start-2 col-end-3 row-start-1 row-end-2 pl-6 py-8">
                        <span className=" font-fraunces font-medium italic text-ink text-5xl">40+</span><br />
                        <span className=" font-outfit text-ink/70 text-xs">PROJECTS SHIPPED</span>
                    </div>
                    <div className=" border-r border-t border-ink/30 col-start-1 col-end-2 row-start-2 row-end-3 pl-6 py-8">
                        <span className=" font-fraunces font-medium italic text-ink text-5xl">10M+</span><br />
                        <span className=" font-outfit text-ink/70 text-xs">USERS REACHED</span>
                    </div>
                    <div className=" border-t border-ink/30 col-start-2 col-end-3 row-start-2 row-end-3 pl-6 py-8">
                        <span className=" font-fraunces font-medium italic text-ink text-5xl">3</span><br />
                        <span className=" font-outfit text-ink/70 text-xs">OSS LIBRARIES</span>
                    </div>
                </div>
            </div>
            
        </div>
    )
};

export default Skills;