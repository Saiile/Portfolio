import React from 'react'
import Link from 'next/link'
import Image from 'next/image';


import {motion} from "framer-motion"
import AnimationMot from '../animations/AnimationMot';
import { bodyAnimation, imageAnimation } from '../animations/animations'

// Icon
import profile from "../../public/mouaaa.png"
import {AiFillGithub, AiFillTwitterCircle, AiFillSpotify, AiFillLinkedin} from 'react-icons/ai'

function Hero() {
  return (
    <motion.section className="relative z-10 flex h-screen w-full items-stretch justify-center 
    bg-[url('/black-blur.jpg')] bg-cover bg-center py-0"
    id='home'
    initial="initial"
    animate="animate">
      <div
      className="absolute left-0 top-0 inset-0 h-full w-full 
      bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
      />
      <div className='absolute top-10 flex
      justify-between sm:w-[90%] lg:max-w-[1440px]'>
        {/* CV button */}
        <div>
          <Link
          href="/CVE.pdf" 
          target="_blank" 
          download
          >
            <motion.button className='hidden rounded-full border-[#e4ded7] border-2
            py-2 px-4 font-semibold text-[#e4ded7] sm:block md:text-[16px]
            lg:block'
            variants={bodyAnimation}>
              CV
            </motion.button>
          </Link>
        </div>
        {/* social button */}
        <div className='flex gap-10 text-[#e4ded7] sm:gap-6 md:gap-8 lg:gap-8'>
          <Link
          href={'https://github.com/ppSt4rr'}
          target='_blank'>
            <motion.p
            variants={bodyAnimation}>
              <AiFillGithub size={24}/>
            </motion.p>
          </Link>
          <Link
          href={'https://www.linkedin.com/in/elias-ouissi/'}
          target='_blank'>
            <motion.p
            variants={bodyAnimation}>
              <AiFillLinkedin size={24}/>
            </motion.p>
          </Link>
          <Link
          href={'https://x.com/'}
          target='_blank'>
            <motion.p
            variants={bodyAnimation}
            >
              <AiFillTwitterCircle size={24}/>
            </motion.p>
          </Link>
          <Link
          href={'https://open.spotify.com/user/lxdptbgmv9buucdyp1x3463c8?si=2b9a86d7c7244915'}
          target='_blank'>
            <motion.p 
            variants={bodyAnimation}>
              <AiFillSpotify size={24}/>
            </motion.p>
          </Link>
        </div>
      </div>

      <div className='-mt-36 flex flex-col items-center justify-center'>
        <div
        className={`relative flex flex-col items-center justify-center`}
        >
          <AnimationMot
          title='Elias Ouissi'
          style='inline-block overflow-hidden pt-1 -mr-4 sm:-mr-5 md:-mr-7 lg:-mr-9 -mb-1 sm:-mb-2 md:-mb-3 lg:-mb-4 font-sans' />
          <motion.div
           className='absolute bottom-[-110px] mx-auto sm:bottom-[-100px] md:bottom-[-130px] lg:bottom-[-190px]'
           variants={imageAnimation}>
            <Image 
            src={profile}
            priority
            alt='photo'
            data-blobity-invert="false"
            className='w-[150px] grayscale hover:grayscale-0 md:w-[200px] rounded-full lg:w-[245px]'
            />
          </motion.div>
        </div>
      </div>

      <div className='absolute bottom-10 flex items-center justify-center md:bottom-10 lg:w-[90%] lg:max-w-[1440px] lg:justify-between'>
        <motion.div
        className='max-w-[350px] md:max-w-[400px] lg:max-w-[400px]'
        variants={bodyAnimation}
        >
          <p className='z-50 text-center text-[16px] font-medium text-[#e4ded7] md:text-[20px] lg:text-left'>
            Developpeur FullStack, Web Designer.
          </p>
        </motion.div>

        <motion.div
        className='max-w-[500px] hidden lg:block lg:max-w-[420px]'
        variants={bodyAnimation}
        >
          <p className='text-right text-[16px] font-semibold text-[#e4ded7] md:text-[20px]'>
              Etudiant 
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Hero