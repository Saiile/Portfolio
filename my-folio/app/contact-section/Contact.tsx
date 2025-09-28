'use client';

import { motion } from "framer-motion"
import { useRef } from "react"
import AnimatedWord2 from "../animations/AnimatedWord2"
import AnimatedBody from "../animations/AnimatedBody"
import emailjs from "@emailjs/browser"


const Contact = () => {

const formu = useRef<HTMLFormElement>(null);

    const sendEmail = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        if (!formu.current) return;
        emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICEKEY!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATEKEY!,
            formu.current,
            process.env.NEXT_PUBLIC_EMAILJS_ID!).then(
            ()=>{
                alert("Votre mail est bien envoyé");
                formu.current!.reset();
            },
            (error)=>{
                alert("L'envoi du mail a recontré une erreur" + error.text);
            }
        )
    }

    return (
        <motion.section
            className="relative z-10 flex h-[95vh] w-full items-center
            justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center py-16
            md:h-[80vh] md:py-20 lg:h-[90vh] lg:pt-30 lg:pb-40 3xl:h-[75vh]"
            id="contact"
            initial="initial"
            animate="animate">
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center pt-0 md:pt-0 lg:pt-24">
                <div className={`flex flex-col items-start justify-center font-sans relative w-full sm:items-center lg:max-w-[1440px] `}>
                    <AnimatedWord2
                        title={"Contactez moi"}
                        style="flex max-w-[500px] flex-col items-start text-left text-[60px] font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center sm:text-[70px] md:text-[80px] lg:text-center lg:text-[100px] xl:text-[110px]"

                    />
                </div>

                <div className="mt-20 flex w-full flex-col items-end justify-center gap-16 sm:mt-32 sm:gap-12 md:mt-10 md:flex-row md:items-start md:justify-between lg:mt-12 lg:max-w-[1440px]">
                    <div className="flex w-[350px] max-w-[90%] flex-col items-end text-right text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[350px] sm:text-[14px] md:w-[310px] md:items-start md:text-left md:text-[16px] lg:w-[420px] lg:text-[16px]"
                    >
                        <AnimatedBody
                            text={"Tout commence par un mail"}
                            className="-mb-1 inline-block overflow-hidden pt-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
                        />

                        <div className="mt-5 flex w-[298px] items-center gap-1 md:w-[335px] md:gap-2.5">
                        </div>
                    </div>
                </div>
                <form ref={formu} onSubmit={sendEmail} action="" className="mt-16 w-full max-w-lg space-y-6 text-[#e4ded7]">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="mb-2 text-sm font-medium">
                            Nom
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Votre nom"
                            required
                            className="rounded-md border border-gray-600 bg-[#1a1c23] px-4 py-3 text-white placeholder-gray-400 focus:border-[#e4ded7] focus:outline-none focus:ring-1 focus:ring-[#e4ded7]"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-2 text-sm font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Votre email"
                            required
                            className="rounded-md border border-gray-600 bg-[#1a1c23] px-4 py-3 text-white placeholder-gray-400 focus:border-[#e4ded7] focus:outline-none focus:ring-1 focus:ring-[#e4ded7]"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="message" className="mb-2 text-sm font-medium">
                            Message
                        </label>
                        <textarea
                            name="message"
                            placeholder="Votre message"
                            required
                            rows={6}
                            className="rounded-md border border-gray-600 bg-[#1a1c23] px-4 py-3 text-white placeholder-gray-400 focus:border-[#e4ded7] focus:outline-none focus:ring-1 focus:ring-[#e4ded7]"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="mt-4 rounded-md bg-[#e4ded7] px-6 py-3 text-sm font-bold uppercase text-black transition hover:bg-white"
                    >
                        Envoyer
                    </button>
                </form>

            </div>
        </motion.section>
    )
}

export default Contact