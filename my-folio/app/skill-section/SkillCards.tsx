import "../globals.css";
import { skillProps } from "./SkillDetails";

const SkillCards = ({
    name,
    icon,
}: skillProps) => {
    return (
        <div
            className="flex flex-col items-center justify-center h-40 w-40 rounded-[23px] border-[1px] hover:border-white transition-all duration-300 border-[#212531] bg-transparent p-4"
        >
            <div className="mb-4">
                {icon}
            </div>
            <p className="text-center">
                {name}
            </p>
        </div>
    );
}

export default SkillCards;