import React from 'react';
import SkillCards from './SkillCards';
import AnimatedBody from '../animations/AnimatedBody';
import AnimatedWord2 from '../animations/AnimatedWord2';

import { motion } from 'framer-motion';
import { SkillDetails } from './SkillDetails';

const SkillGrid = () => {
  return (
    <motion.section className='z-10 flex w-full flex-col items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-20 md:pb-16 lg:pb-24'>
        
        <div className='relative mb-16 flex w-full flex-col items-center justify-center gap-10 text-[#e4ded7] lg:max-w-[1440px]'>
            <AnimatedWord2
            title={'skill'}
            style='flex max-w-[500px] flex-col items-start text-left pr-5 font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center lg:text-center text-[clamp(70px,14vw,155.04px)]'
            />

            <AnimatedBody
            text='Technologie'
            className='w-[90%] text-center text-[14px] font-semibold uppercase sm:w-[500px] md:w-[550px] md:text-[16px]' />
        </div>
        
        <motion.div
        className='flex justify-center w-full'>
          <div className='grid grid-cols-2 gap-16 sm:grid-cols-3 lg:grid-cols-4 pb-14 md:pb-7'>
            {SkillDetails.map((skill, index) => (
                <SkillCards
                  key={index}
                  name={skill.name}
                  icon={skill.icon}
                />
            ))}
          </div>
        </motion.div>
    </motion.section>
  );
}

export default SkillGrid;