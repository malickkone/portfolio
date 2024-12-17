import { EXPERIENCES } from "../constants/constants";


export default function Experience(){
    return(
        <div className="pt-24 px-24">
            <h1 className="text-white text-center font-thin text-4xl underline mb-28">Expérience</h1>
            <div className="mx-64">
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className="mb-8 flex  text-white">
                        <div className="w-full">
                            <p className="mb-2 text-sm font-thin ">{experience.year}</p>
                        </div>
                        <div className="w-full m-w-xl">
                            <h6 className="mb-2 font-serif text-sm">
                                {experience.role} - <span className="text-purple-400">{experience.company}</span>
                            </h6>
                            <p className="font-thin text-sm mb-2">{experience.description}</p>
                            {experience.technologies.map((tech, index) => (
                                <span key={index} className="mr-2 mt-4 rounded font-serif text-sm text-purple-200 bg-neutral-900 px-2 py-1">{tech}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}