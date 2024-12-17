import pic from "../assets/pic.jpg"
import { aboutMe } from "../constants/constants"
import { motion } from "framer-motion"


const container = (delay, x) => ({
    hidden: { x: x, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: delay
        }
    }
})

export default function AboutMe() {
    return (
        <div className="pt-28 px-24">
            <h1 className="text-white text-center font-thin text-4xl underline">A propos</h1>
            <div className="flex pt-20">
                <motion.div
                    variants={container(1.2, -100)}
                    initial="hidden"
                    animate="visible"
                    className="size-[400px] mr-auto">
                    <img src={pic} alt="" className="w-full rounded-xl" />
                </motion.div>
                <motion.div
                    variants={container(1.2, 100)}
                    initial="hidden"
                    animate="visible"
                    className="size-[500px] h-auto">
                    <p className="text-white text-justify font-thin">{aboutMe}</p>
                </motion.div>
            </div>
        </div>
    )
}