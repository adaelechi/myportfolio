import { useState } from "react";



function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className=" bg-canvasbg/90 content-center flex flex-wrap h-17 justify-between px-13 sticky top-0 z-30">
            <div>
                <h3 className=" backdrop-blur-sm cursor-default font-fraunces font-semibold text-[18px] text-ink hover:text-lilac "><a href="#home">Ada Elechi</a></h3>
            </div>
            <div className=" h-fit self-center">
                <div className={isOpen ? " flex md:hidden menu" : " flex md:hidden menu"} onClick={()=> setIsOpen((prev) => !prev)}>
                    <span id={isOpen ? "bar-a-open" : "bar-a"} className="menubar"></span>
                    <span id={isOpen ? "bar-b-open" : "bar-b"} className="menubar"></span>
                    <span id={isOpen ? "bar-c-open" : "bar-c"} className="menubar"></span>
                </div>
                <div className={isOpen ? " backdrop-blur-sm menu-open flex flex-col" : "hidden md:flex md:flex-row"}>
                    <button className={isOpen ? " nav-link nav-link-open" : "nav-link"}><a href="#work">Work</a></button>
                    <button className={isOpen ? " nav-link nav-link-open" : "nav-link"}><a href="#skills">Skills</a></button>
                    <button className={isOpen ? " nav-link nav-link-open" : "nav-link"}><a href="#about">About</a></button>
                    <button className={isOpen ? " nav-link nav-link-open" : "nav-link"}><a href="#contact">Contact</a></button>
                    <button className={isOpen ? " nav-linkbrdr nav-linkbrdr-open" : "nav-linkbrdr"}><a href="" target="_blank">Resume</a></button>
                </div>
            </div>
        </div>
    )
};

export default NavBar;