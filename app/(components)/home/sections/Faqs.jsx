"use client";
import { useState, useRef } from "react";
import { ArrowRight, Minus, Plus } from "lucide-react";
import Button from "../../ui/Button";

const faqs = [
    {
        question: "What services do you offer?",
        answer:
            "We provide end-to-end support for students looking to study abroad — from course selection, applications, visa guidance, to post-admission support.",
    },
    {
        question: "How do I find the right program for me?",
        answer:
            "Our expert counselors guide you in choosing the best-fit program based on your goals, background, and preferred study destinations.",
    },
    {
        question: "Can you help with scholarships?",
        answer:
            "Yes! We help you identify and apply for scholarships based on your academic profile and destination.",
    },
    {
        question: "Do you help with SOPs, LORs, and resumes?",
        answer:
            "Absolutely! Our team assists you in crafting professional SOPs, LORs, and resumes that enhance your application’s impact.",
    },
    {
        question: "Is there a fee for your services?",
        answer:
            "We offer free initial consultations. Some specialized services may have minimal fees, which are transparently communicated upfront.",
    },
];

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState(null);
    const refs = useRef([]);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="mt-20 ">
            {/* Heading */}
            <div className="text-center mb-10">
                <p className="font-inter text-[#C7044C] text-sm font-semibold uppercase tracking-wide">
                    FAQ’s
                </p>
                <p className="font-inter text-2xl md:text-[38px] font-bold leading-14 text-primaryheading mt-3">
                    STUDY ABROAD:WHAT YOU <span className="text-[#c8004b]"> NEED TO KNOW</span>
                </p>
            </div>

            {/* FAQ Grid */}
            <div className="max-w-[1560px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={` border drop-shadow-sm duration-300 shadow-sm ${openIndex === index
                            ? "bg-white border-[#c8004b]/20"
                            : "bg-white hover:shadow-md"
                            }`}
                    >
                        {/* Question */}
                        <button
                            onClick={() => toggleFaq(index)}
                            className="w-full flex justify-start items-center text-left  md:gap-8 p-5"
                        >
                            {/* <span
                                className={`font-semibold text-gray-800 ${openIndex === index ? "text-[#190459]" : ""
                                    }`}
                            >
                                {faq.question}
                            </span> */}
                            {openIndex === index ? (
                                <Minus className="text-success w-5 h-5" />
                            ) : (
                                <Plus className="text-[#190459] w-5 h-5" />
                            )}
                            <span
                                className={`font-semibold text-primaryheading md:text-lg ${openIndex === index ? "text-[#190459]" : ""
                                    }`}
                            >
                                {faq.question}
                            </span>
                        </button>

                        {/* Answer with dynamic height */}
                        <div
                            ref={(el) => (refs.current[index] = el)}
                            className="px-5 overflow-hidden transition-all duration-300 text-lg font-normal text-secondarytext leading-relaxed"
                            style={{
                                height:
                                    openIndex === index
                                        ? `${refs.current[index]?.scrollHeight}px`
                                        : "0px",
                            }}
                        >
                            <div className="pb-5">{faq.answer}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA Banner */}
            <div className="my-16 bg-[#c8004b] text-white rounded-[4px] px-8 py-10 flex flex-col md:flex-row justify-between items-center gap-6 max-w-[1560px] mx-auto shadow-md">
                <div>
                    <h3 className="text-3xl font-bold mb-2">
                        Explore. Apply. Achieve. All in One Place
                    </h3>
                    <p className=" font-medium text-white/90 text-xl max-w-xl">
                        Discover top universities, apply with ease, and track your progress —
                        all through one smart dashboard.
                    </p>
                </div>
                {/* <button className="bg-white text-[#c8004b] font-semibold px-6 py-2 rounded-md shadow hover:bg-gray-100 transition">
                    Sign Up Now!
                </button> */}
                <Button text="Sign Up Now!" color="text-[#C7044C]" bg="bg-white" />
            </div>
        </section>
    );
}
