import "./navbar.scss"
import { Button } from "@mui/material"
import {motion} from "framer-motion"

const variants={
    opacity:1,
}




export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="element">
                <img src="Group.png"></img>
                <h1>Hydrate</h1>
              
            </div>
            <motion.div className="menu"   >
                <motion.p className="selectedtext" >Home</motion.p>
                     <motion.p className="unselectedtext" whileHover={variants} >About us</motion.p>
                    <motion.p className="unselectedtext" whileHover={variants}>All collection</motion.p>
                    <motion.p className="unselectedtext" whileHover={variants}>Contact us</motion.p>


            </motion.div>
            <div className="button">
                <Button variant="contained">Shop now</Button>
            </div>
        </div>
    )
}
