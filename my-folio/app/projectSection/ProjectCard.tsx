import { ProjectProps } from "./projectDetails";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import AnimatedTitle from "../animations/AnimatedTitle";
import { useRef } from "react";
import AnimatedBody from "../animations/AnimatedBody";

const ProjectCard = ({
    id,
    name,
    description,
    technologies,
    image,
    github,
}: ProjectProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0.1", "1.33 1"],
    });

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <a href={github} target="_blank" rel="noopener noreferrer" className="block" data-blobity="none" data-no-blobity>
            <motion.div
                ref={ref}
                style={{
                    backgroundColor: "#222",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    position: "relative",
                    scale: scaleProgress,
                    opacity: opacityProgress,
                }}
                className="relative z-10 h-[550px] w-full items-stretch justify-center overflow-hidden rounded-3xl bg-center py-0 sm:h-[700px] sm:w-[100%] md:h-[550px] md:w-[100%] lg:h-[400px]"
                initial="initial"
                animate="animate"
                data-no-blobity
            >
                <Image
                    src={image}
                    alt={name}
                    width={500}
                    height={500}
                    className={`absolute -bottom-2 mb-8 w-[50%] sm:w-[25%] md:w-[30%] lg:max-w-[25%] ${id % 2 === 0 ? "right-10" : "left-10"
                        }`}
                />
                <div
                    className={`absolute text-white ${!(id % 2 === 0)
                            ? "right-0 top-20 mr-0 ml-10 md:right-0 md:ml-0 lg:right-0 lg:top-20 lg:mr-4"
                            : "left-10 top-20 ml-0 md:mr-12 lg:top-20 lg:ml-4"
                        } mb-10 md:mb-16 lg:mb-14`}
                >
                    <AnimatedTitle
                        text={name}
                        className="max-w-[90%] text-[40px] leading-none text-white md:text-[44px] md:leading-none lg:max-w-[450px] lg:text-[48px]"
                        wordSpace="mr-[0.25em]"
                        charSpace="-mr-[0.01em]"
                    />

                    <AnimatedBody
                        text={description}
                        className="mt-4 w-[90%] max-w-[457px] text-[16px] font-semibold text-[#95979D]"
                    />

                    <div className="mt-9 flex gap-4">
                        {technologies.map((tech, id) => (
                            <AnimatedTitle
                                text={tech}
                                wordSpace="mr-[0.25em]"
                                charSpace="mr-[0.01em]"
                                key={id}
                                className="text-[14px] font-bold uppercase md:text-[16px] lg:text-[18px]"
                            />
                        ))}
                    </div>
                </div>
            </motion.div>
        </a>
    );
};

export default ProjectCard;