export const imageAnimation = {
    initial:{
        y:50,
        opacity:0,
        scale:0.8,
    },
    animate:{
        opacity:1,
        scale:1,
        y: `0em`,
        transition:{
            delay:0.5,
            duration:1,
            ease:[0.2,0.65,0.3,0.9],
        }
    }
}

export const bodyAnimation = {
    initial:{
        opacity:0,
        y:`1em`,
    },
    animate:{
        opacity:1,
        y: `0em`,
        transition:{
            delay:0.5,
            duration:1,
            ease:[0.2,0.65,0.3,0.9],
        }
    }
}

export const riseWithFade = {
    initial:{
        opacity:0,
        y:100,
    },
    animate:{
        opacity:1,
        y: 0,
        transition:{
            ease:[0.65, 0, 0.35, 1],
            duration:0.7,
        }
    }
}

export const sChildren = {
    animate:{
        transition:{
            delayChildren:0.4,
            staggerChildren:0.1,
        }
    }
}

export const wordAnimation = {
    initial:{
        opacity:0,
        y:150,
    },
    animate:{
        opacity:1,
        y: 0,
        transition:{
            delay:0.5,
            duration:1,
            ease:[0.2,0.65,0.3,0.9],
        }
    }
}

export const wordAnimation2 = {
    initial:{
        opacity:0,
        y:150,
    },
    animate:{
        opacity:1,
        y: 0,
        transition:{
            duration:1,
            ease:[0.2,0.65,0.3,0.9],
        }
    }
}