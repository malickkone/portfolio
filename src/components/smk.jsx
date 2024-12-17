import { about } from "../constants/constants";
import pic from "../assets/pic.jpg"
import ia from "../assets/IA.png"
import { motion } from "framer-motion"

export const container = (delay, x) => ({
    hidden: {x:x, opacity:0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: delay
        }
    }
})

export default function SMK() {
    return (
        <div className="pt-32 flex items-start px-24">
            <div className="max-w-screen-sm mr-auto">
                <motion.h1 
                variants={container(0,-100)}
                 initial="hidden"
                 animate="visible"
                 className="font-thin tracking-tight text-6xl pb-10 
              bg-gradient-to-r from-slate-500 to-white  text-transparent
            hover:from-pink-500 hover:to-orange-500 bg-clip-text">
                    SERIGNE MALICK KONE
                </motion.h1>
                <motion.h5 
                 variants={container(0.5,-100)}
                 initial="hidden"
                 animate="visible"
                className="bg-gradient-to-r from-pink-300 via-slate-500 
            to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent
            hover:from-pink-500 hover:to-orange-500">
                    Développeur web-mobile
                </motion.h5>
                <motion.p 
                 variants={container(1,-100)}
                 initial="hidden"
                 animate="visible"
                className="text-white font-thin tracking-tight text-justify pt-6">{about}</motion.p>
            </div>
            <motion.div 
            variants={container(1,100)}
            initial="hidden"
            animate="visible"
            className="size-[300px] ">
                <img src={ia} alt=""  className="size-full"/>
            </motion.div>
            
        </div>
    )
}