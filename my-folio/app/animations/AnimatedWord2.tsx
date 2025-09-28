import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react";
import { useInView } from "react-intersection-observer"

type AnimatedWords2Props ={
    title:string;
    style: string;
}

const AnimatedWord2: React.FC<AnimatedWords2Props> = ({title, style}) => {

    const ctrl = useAnimation();
    const {ref, inView} =useInView({
        threshold:0.5,
        triggerOnce: true,
    })

    useEffect(()=>{
        if(inView) {
            ctrl.start("animate");
        }
        if(!inView){
            ctrl.start("initial");
        }
    }, [ctrl, inView])

    const wordAnimation2 ={
        initial:{
            opacity: 0,
            y: 150,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                ease: [0.2, 0.65, 0.3, 0.9], 
                duration: 0.8,
             },
        }
    }

  return (
    <h1 aria-label={title} role="heading">
        <motion.span className={style} ref={ref}>
            {
                title.split(" ").map((word, index) => (
                    <motion.div 
                    key={index}
                    initial="initial"
                    animate={ctrl}
                    className="flex items-center justify-center overflow-hidden last:-mr-10 pb-2 sm:pb-0"
                    transition={{
                        delayChildren: index * 0.25,
                        staggerChildren: 0.05,
                    }}>
                        <motion.span
                        className="-mb-4 inline-block overflow-hidden pt-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
                        variants={wordAnimation2}>
                            {word + "\u00A0"}
                        </motion.span>
                    </motion.div>
                ))
            }
        </motion.span>
    </h1>
  )
}

export default AnimatedWord2