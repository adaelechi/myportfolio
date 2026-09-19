


function Contact() {
    return (
        <div id="contact" className=" bg-ink border-b border-b-canvasbg/30 px-8 md:px-12 py-24 md:py-32">
            <span className=" font-medium font-outfit text-fuchsia-500 text-xs tracking-wider">04 / CONTACT</span>
            <div className=" gap-y-8 md:gap-x-16 grid grid-cols-1 md:grid-cols-2 mt-8 md:pr-4">
                <div className=" col-start-1 col-end-2">
                    <h2 className=" font-fraunces font-normal italic leading-14 md:leading-18 text-5xl md:text-6xl text-canvasbg">Let's build <br /> something <br /> remarkable</h2>
                    <div className=" border-b border-ink/45 py-5 md:py-8">
                        <p className=" font-outfit py-2.5 text-[0.95rem] text-canvasbg/70">
                            Open to full-time roles, contract work, and interesting collaborations. If you've got something worth building, I'd love to hear about it.
                        </p>
                    </div>
                    <div className=" grid grid-cols-2">
                        <span className=" border-b border-canvasbg/45 font-normal font-outfit py-4 text-canvasbg/70 text-sm">EMAIL</span>
                        <span className=" border-b border-canvasbg/45 font-normal font-outfit py-4 text-canvasbg text-right text-sm"><a href="mailto:otielechiesther@gmail.com">otielechiesther@gmail.com</a></span>
                        <span className=" border-b border-canvasbg/45 font-normal font-outfit py-4 text-canvasbg/70 text-sm">GITHUB</span>
                        <span className=" border-b border-canvasbg/45 font-normal font-outfit py-4 text-canvasbg text-right text-sm"><a href="" target="_blank">github.com/adaelechi</a></span>
                        <span className=" border-b border-canvasbg/45 font-normal font-outfit py-4 text-canvasbg/70 text-sm">LINKEDIN</span>
                        <span className=" border-b border-canvasbg/45 font-normal font-outfit py-4 text-canvasbg text-right text-sm"><a href="" target="_blank">linkedin.com/in/adaelechi</a></span>
                    </div>
                </div>
                <form action="" method="get" className=" col-start-1 md:col-start-2 col-end-2 md:col-end-3 md:py-10">
                    <div className=" py-3">
                        <label htmlFor="form-name" className=" block font-normal font-outfit mb-2 text-canvasbg/80 text-sm">NAME</label>
                        <input type="text" name="form-name" id="form-name" placeholder="Your name" className=" border border-canvasbg/45 focus-visible:border-canvasbg/80 font-normal font-outfit h-12 px-5 text-canvasbg text-sm w-full" />
                    </div>
                    <div className=" py-3">
                        <label htmlFor="form-email" className=" block font-normal font-outfit mb-2 text-canvasbg/80 text-sm">EMAIL</label>
                        <input type="email" name="form-email" id="form-email" placeholder="you@example.com" className=" border border-canvasbg/45 focus-visible:border-canvasbg/80 font-normal font-outfit h-12 px-5 text-canvasbg text-sm w-full" />
                    </div>
                    <div className=" py-3">
                        <label htmlFor="form-message" className=" block font-normal font-outfit mb-2 text-canvasbg/80 text-sm">MESSAGE</label>
                        <textarea name="form-message" id="form-message" placeholder="Tell me about your project..." className=" border border-canvasbg/45 focus-visible:border-canvasbg/80 font-normal font-outfit h-30 overflow-auto p-5 resize-none scrollbar-thin scrollbar-thumb-fuchsia-500 text-canvasbg text-sm w-full"></textarea>
                    </div>
                    <input type="submit" value="SEND MESSAGE" className=" bg-fuchsia-500 cursor-pointer font-normal font-outfit h-12 text-canvasbg text-center text-[16px] w-full" />
                </form>
            </div>
        </div>
    )
};


export default Contact;