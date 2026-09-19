// import Demo from './assets/demo.png';


function Card(card) {
    const tech = [card.tech1, card.tech2, card.tech3, card.tech4, card.tech5];

    const cardStatus = card.status;

    // if (cardStatus === "app") {
    //     if (isApp) {

    //     }
    // }

    return (
        <div id={card.id} className={` ${cardStatus} grid grid-rows-[1fr_auto] hover:shadow-lg hover:-translate-y-0.5 `}>
            <figure className="  h-48 md:h-64">
                <img className=" aspect-auto h-full w-full" src={card.image} alt="" />
            </figure>
            <div className=" bg-canvasdark p-6 md:p-8">
                <div className=" flex flex-row items-center justify-between">
                    <h3 className=" font-fraunces font-normal text-3xl text-ink">{card.title}</h3>
                    <span className=" font-outfit font-light text-ink/70 text-sm">{card.year}</span>
                </div>
                <p className=" font-outfit font-light my-4 text-ink/70 text-[0.95rem]">{card.desc}</p>
                <div className=" my-2.5">
                    {tech.filter(Boolean).map((tech, i) => (
                        <span key={i} className=" bg-ink/10 cursor-default font-normal font-outfit mr-3 my-2.5 md:my-0 px-3 py-1 text-ink/70 text-sm" >{ tech }</span>
                    ))}
                </div>
                <a href="" className=" font-outfit font-light text-ink/70 text-xs tracking-wider">VIEW CASE STUDY</a>
            </div>
        </div>
    )
};


export default Card;
