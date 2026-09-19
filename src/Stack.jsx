


function Stack(stack) {
    const items = [stack.one, stack.two, stack.three, stack.four, stack.five];

    return (
        <div id={stack.id} className={stack.className}>
            {items
                .filter(Boolean)
                .map((item, i) => (
                    <span key={i} className=" border border-ink/60 hover:border-ink cursor-default font-normal font-outfit mx-2.5 my-2.5 md:my-0 px-3 py-1 text-ink text-sm" >{item}</span>
                ))}
        </div>
    )
};

export default Stack;