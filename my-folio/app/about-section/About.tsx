import "../animations/animate.css";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedBody from "../animations/AnimatedBody";

const About = () => {
  return (
    <section 
    className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#02020A] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
    id="about">

        <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
            <AnimatedTitle
            text={
                "About"
            }
            wordSpace={"mr-[0.5em]"}
            charSpace={"mr-[0.01em]"}
            className="mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#fff] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
            />
        </div>

        <div className="mx-auto flex w-[100%] flex-col items-center justify-center lg:max-w-[1212.8px] px-14 sm:px-12 md:px-10 lg:px-8">
            <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] 
            font-medium leading-relaxed tracking-wide text-[#FFF] md:mb-16
            md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16 lg:text-[24px]">
                <AnimatedBody
                text={`Je suis un développeur passionné, actuellement en pré-MSc, et en recherche d’une alternance à partir de janvier. Au fil de mes études et projets personnels. 
                J'ai acquis une expertise en développement front-end et back-end, travaillant sur divers projets avec une multitude de technologies. Mon parcours académique et pratique m'a permis de développer des compétences solides et une compréhension approfondie du domaine.`
                }
                />
            </div>
        </div>

        <div className="mx-auto flex w-[100%] flex-col items-center justify-center lg:max-w-[1212.8px] px-14 sm:px-12 md:px-10 lg:px-8">
            <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] 
            font-medium leading-relaxed tracking-wide text-[#FFF] md:mb-16
            md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16 lg:text-[24px]">
                <AnimatedBody
                text={`Experience`}
                className="flex justify-center items-center text-left text-[30px] font-bold leading-[0.9em] tracking-tighter text-[#fff] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                />
                <AnimatedBody
                text={`- Developpeur fullStack chez Tech4gaia de Octobre 2023 a Juillet 2024`}
                />
            </div>
        </div>
    </section>
  )
}

export default About