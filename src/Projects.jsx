import { useState } from "react";
import Card from "./Card";
import Demo from "./assets/demo.png";



function Projects() {
    const [isAll, setIsAll] = useState(true);
    const [isApp, setIsApp] = useState(false);
    const [isWeb, setIsWeb] = useState(false); 

    const allProjects = () => {
        setIsAll(true);
        setIsApp(false);
        setIsWeb(false);
    };

    const appProjects = () => {
        setIsAll(false);
        setIsApp(true);
        setIsWeb(false);
    };

    const webProjects = () => {
        setIsAll(false);
        setIsApp(false);
        setIsWeb(true);
    };

    return (
        <div id="work" className=" bg-canvasbg  px-8 md:px-12 py-24 md:py-32">
            <span className=" font-medium font-outfit text-lilac text-xs tracking-wider">01 / SELECTED WORK</span>
            <div className=" flex flex-col md:flex-row flex-wrap items-start md:items-center justify-center md:justify-between mt-8 mb-16 md:pr-4">
                <h2 className=" font-fraunces font-normal italic pb-4 md:pb-0 text-6xl text-ink">Projects</h2>
                <div>
                    <button onClick={allProjects} className={isAll ? "prj-filter-active" : "prj-filter"}>ALL</button>
                    <button onClick={appProjects} className={isApp ? "prj-filter-active" : "prj-filter"}>APP</button>
                    <button onClick={webProjects} className={isWeb ? "prj-filter-active" : "prj-filter"}>WEB</button>
                </div>
            </div>
            <div className="card-cont md:gap-x-10 gap-y-8 grid grid-rows-1 grid-cols-1 md:grid-cols-[1fr_1fr]">
                
                <Card status={"app"} image={Demo} title={"Expensable"} year={2026} desc={"Full stack storefront with animated product reveals, cart persistence, Stripe checkout,and a headless CMS layer"} tech1="React" tech2="TailwindCSS" />
                <Card status={"web"} title={"DecoVentory"} year={2026} desc={""} tech1="HTML" tech2="CSS" tech3="JavaScript" />
                {/* <Card /> */}
            </div>
        </div>
    )
};


export default Projects;