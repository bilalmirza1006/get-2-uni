"use client";

export default function ScrollingMarquee() {
    const items = [
        "APPLY WITH EASE",
        "SCHOLARSHIPS & FUNDING",
        "QUICKLY FIND UNIVERSITY",
        "VISA & SOP GUIDANCE",
        "TRUSTED BY THOUSANDS",
        "ALL COUNTRIES, ALL DEGREES",
    ];

    return (
        <div className="overflow-hidden whitespace-nowrap bg-primarycolor text-white text-lg font-inter font-medium py-4 ">
            <div className="animate-marquee inline-block">
                {items.map((item, i) => (
                    <span key={i} className="mx-6 flex items-center inline-flex">
                        {item}
                        <span className="mx-3 text-white">✦</span>
                    </span>
                ))}
                {/* Duplicate for smooth infinite loop */}
                {items.map((item, i) => (
                    <span key={`dup-${i}`} className="mx-6 flex items-center inline-flex">
                        {item}
                        <span className="mx-3 text-white">✦</span>
                    </span>
                ))}
            </div>
        </div>
    );
}
