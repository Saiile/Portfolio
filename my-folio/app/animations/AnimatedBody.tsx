import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react";
import { useInView } from "react-intersection-observer"

type AnimatedBodyProps ={
    text: string;
    className?: string;
    wordSpace?: string;
    charSpace?: string;
};

function AnimatedBody({ 
    text, 
    className, 
}:AnimatedBodyProps){

    const ctrl = useAnimation();
    
    const {ref, inView} = useInView({
        threshold:0.1,
        triggerOnce: true,
    });

    useEffect(()=>{
        if(inView){
            ctrl.start("visible");
        }
        if(!inView){
            ctrl.start("hidden");
        }
    }, [ctrl, inView]);

    const bodyAnimation ={
        hidden:{
            opacity:0,
            y:`1em`,
        },
        visible:{
            opacity:1,
            y:`0em`,
            transition:{
                delay:0.1,
                duration: 1,
                ease:[0.2,0.65,0.3,0.9],
            }
        }
    } 

    return(
        <motion.p
        aria-label={text}
        role="heading"
        className={className}
        ref={ref}
        aria-hidden="true"
        initial="hidden"
        animate={ctrl}
        variants={bodyAnimation}
        >
            {text}
        </motion.p>
    )
}

export default AnimatedBody