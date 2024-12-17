import image1 from '../assets/cmsMobile.jpg'
import image2 from '../assets/cmsPlatform.jpg'
import image3 from '../assets/findme.png'
import image4 from '../assets/notNetflix.jpg'
import image5 from '../assets/portfolio.jpg'

export const about = "Je suis un développeur full stack passionné et doué pour créer des applications Web et mobile robustes et évolutives. Avec 2 ans d'expérience pratique, j'ai perfectionné mes compétences dans les technologies front-end comme React et flutter, ainsi que dans les technologies back-end comme Nestjs et MySQL. Mon objectif est de mettre à profit mon expertise pour créer des solutions innovantes qui stimulent la croissance de l'entreprise et offrir des expériences utilisateur exceptionnelles"

export const aboutMe = "Je suis un développeur full stack dévoué et polyvalent, passionné par la création d'applications Web ou mobile efficaces et conviviales. Avec 2 ans d'expérience professionnelle, j'ai travaillé avec diverses technologies, notamment React, Flutter, Nest.js, Nodejs, et MySQL. Mon parcours dans le développement  a commencé avec une profonde curiosité pour le fonctionnement des choses, et il a évolué vers une carrière où je m'efforce continuellement d'apprendre et de m'adapter aux nouveaux défis. Je m'épanouis dans des environnements collaboratifs et j'aime résoudre des problèmes complexes pour proposer des solutions de haute qualité. En dehors du codage, j'aime rester actif, explorer de nouvelles technologies et contribuer à des projets open source."

export const EXPERIENCES = [
    {
        year: "Mai - En cours",
        role: "Full Stack Developer",
        company: "QuickPay",
        description: `Créer des solutions numériques intégrées qui combinent des applications mobiles et plateforme en ligne, conçues pour répondre aux besoins spécifiques d'une cible (clients, employés ou partenaires). `,
        technologies: ["Flutter", "React.js", "MySQL"]
    },
    {
        year: "Janvier 2023 - Juillet 2023",
        role: "Mobile Developer",
        company: "FindMe",
        description: `Créer une application mobile qui automatise le processus d'adressage postal, facilitant la gestion des adresses pour les utilisateurs particuliers ou professionnels.`,
        technologies: ["Flutter", "MySQL"]
    },
    {
        year: "2021 - 2022",
        role: "Developer",
        company: "Freelance",
        description: `Créer des solutions numériques intégrées`,
        technologies: ["Flutter", "React.js", "MySQL"]
    }
]

export const PROJECTS = [
    {
      title: "Card Management System Mobile",
      image: image1,
      description:
        "Application mobile pour la gestion des achats et recharges de cartes dans les services de Quickay, avec une fonctionnalité d'impression de tickets, ",
      technologies: ["Flutter", "Nest.js", "MySQL"],
    },
    {
      title: "Card Management System Platform",
      image: image2,
      description:
        "Platforme pour la gestion de recharge et enrôlement des cartes, affectation des caissiers, suivi des transactions",
      technologies: ["TypeScript", "Nest.js", "MySQL"],
    },
    {
      title: "FindMe",
      image: image3,
      description:
        "Application mobile qui automatise le processus d'adressage postal",
      technologies: ["Flutter"],
    },
    {
      title: "Not Netflix",
      image: image4,
      description:
        "Application mobile de Clonage de Netflix en utilisant l'api themoviedb ",
      technologies: ["Flutter"],
    },
    {
      title: "Portfolio",
      image: image5,
      description:
        "Un site portfolio personnel présentant des projets, des compétences et des contacts",
      technologies: ["React.js","vite"],
    },

]