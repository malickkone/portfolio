import { PROJECTS } from "../constants/constants";


export default function Projects() {
    return (
        <div className="px-24 pt-24">
            <h1 className="text-white text-center font-thin text-4xl underline">Projets</h1>
            <div className="pt-24 mx-20">{PROJECTS.map((project, index) => (
                <div key={index} className="flex flex-wrap mb-8  ">
                    <div className="mr-auto ">
                        <img src={project.image} width={150} height={150} alt="" className="mb-6 rounded-md" />
                    </div>
                    <div className="w-full max-w-xl text-white">
                        <h6 className="mb-2 font-serif text-sm">{project.title}</h6>
                        <p className="font-thin text-sm mb-2">{project.description}</p>
                        {project.technologies.map((tech, index) => (
                            <span key={index} className="mr-2 mt-4 rounded font-serif text-sm text-purple-200 bg-neutral-900 px-2 py-1">{tech}</span>
                        ))}
                    </div>
                </div>
            ))}</div>
        </div>
    )
}