export type ProjectProps = {
    id: number;
    name: string;
    description: string;
    technologies: string[];
    image: string;
    available: boolean;
    github: string;
}

export const devProject = [
    {
        id: 0,
        name: "PushSwap",
        description: "Le projet Push_swap est un programme qui permet de trier un tableau d'entiers en utilisant tableaux piles supplémentaires et un ensemble limité d'opérations de manipulation de tableau.",
        technologies: ["PHP"],
        github: "https://github.com/ppSt4rr/PushSwap",
        image: "/github-icon-2.svg",
        available: true,
    },
    {
        id: 1,
        name: "Snapchat",
        description: "Le projet My_Snapchat est un clone de Snapchat en React Native.",
        technologies: ["Javascript", "React-Native", "React"],
        github: "https://github.com/ppSt4rr/snapchat",
        image: "/github-icon-2.svg",
        available: true,
    },
    {
        id: 2,
        name: "Isola",
        description: "Le projet Isola est une reproduction du jeu Isola.",
        technologies: ["Javascript", "HTML", "CSS"],
        github: "https://github.com/ppSt4rr/Isola",
        image: "/github-icon-2.svg",
        available: true,
    },
    {
        id: 3,
        name: "EpiSkri",
        description: "Le Projet est un clone de Skribbl.io .",
        technologies: ["GO", "React", "Tailwind"],
        github: "https://github.com/ppSt4rr/EpiSkri",
        image: "/github-icon-2.svg",
        available: true,
    },
    {
        id: 4,
        name: "E-commerce",
        description: "Projet de groupe visant a reproduire un site ecommerce et tout ce qui suit avec.",
        technologies: ["PHP", "Javascript", "CSS"],
        github: "https://github.com/ppSt4rr/eCommerce",
        image: "/github-icon-2.svg",
        available: true,
    },
    {
        id: 5,
        name: "Puissance4",
        description: "Le Projet est un jeu de puissance 4.",
        technologies: ["HTML5", "Javascript"],
        github: "https://github.com/ppSt4rr/Puissance4",
        image: "/github-icon-2.svg",
        available: true,
    }

    // ajouter des projets
]