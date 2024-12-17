import { FaLinkedin,  FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa"

export default function Header(){
    return(
        <div className="text-white flex ">
            <p className=" text-2xl mr-auto">Kangam</p>
            <div className="flex gap-3 text-2xl">
                <FaLinkedin/>
                <FaGithub/>
                <FaInstagram/>
                <FaWhatsapp/>
            </div>
        </div>
    )
}