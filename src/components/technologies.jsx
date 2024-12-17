import { FaDatabase, FaGithub, FaNodeJs} from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { RiReactjsLine } from "react-icons/ri";
import { motion } from "framer-motion"

const iconVariant = (duration) => ({
    initial: {y:-10},
    animate: {
        y:[10,-10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})



export default function Technologies(){
    return(
        <div>
             <h1 className="text-white text-center font-thin text-4xl underline">Technologies</h1>
             <div className="flex flex-wrap items-center justify-center gap-4 pt-20">
                <motion.div 
                variants={iconVariant(2.5)}
                initial='initial'
                animate='animate'
                className="rounded-2xl border-2 border-neutral-800 p-2">
                    <FaFlutter className="text-blue-400 text-5xl"/>
                </motion.div>
                <motion.div 
                variants={iconVariant(2.8)}
                initial='initial'
                animate='animate'
                className="rounded-2xl border-2 border-neutral-800 p-2">
                    <FaNodeJs className="text-green-500 text-5xl"/>
                </motion.div>
                <motion.div 
                variants={iconVariant(2.5)}
                initial='initial'
                animate='animate'
                className="rounded-2xl border-2 border-neutral-800 p-2">
                    <RiReactjsLine className="text-blue-400 text-5xl"/>
                </motion.div>
                <motion.div
                variants={iconVariant(2.8)}
                initial='initial'
                animate='animate'
                 className="rounded-2xl border-2 border-neutral-800 p-2">
                    <FaDatabase className="text-red-900 text-5xl"/>
                </motion.div>
                <motion.div
                variants={iconVariant(2.5)}
                initial='initial'
                animate='animate'
                 className="rounded-2xl border-2 border-neutral-800 p-2">
                    <FaGithub className="text-white text-5xl"/>
                </motion.div>
                {/* <motion.div
                variants={iconVariant(2.8)}
                initial='initial'
                animate='animate'
                 className="rounded-2xl border-2 border-neutral-800 p-2">
                    <SiNestjs className="text-pink-900 text-5xl"/>
                </motion.div> */}
             </div>
        </div>
    )
}