"use client"

import Hero from "./heroSection/Hero";
import Skill from "./skill-section/SkillGrid";

//Blobity
// import useBlobity from 'blobity/lib/react/useBlobity';
// import { initialBlobityOptions } from "./utils/BlobityConfig"
import { useEffect } from "react";

import dynamic from "next/dynamic";
const Project = dynamic(()=> import("./projectSection/Project"))
const About = dynamic(()=> import("./about-section/About"))
const Contact = dynamic(()=> import("./contact-section/Contact"))
const Footer = dynamic(()=> import("./footer/Footer"))

export default function Home() {

  // const blobityInstance = useBlobity(initialBlobityOptions)

  // useEffect(()=>{
  //   if(blobityInstance.current){
  //     window.blobity = blobityInstance.current
  //   } 
  // },[blobityInstance]);

 useEffect(()=>{
  window.scrollTo({
    top:0,
    left:0,
  })
 },[])

  return (
    <>
      <main className="flex flex-col items-center justify-center">
        <Hero />
        <About />
        <Skill />
        <Project />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
