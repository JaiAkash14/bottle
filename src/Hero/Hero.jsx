import { Navbar } from "../Navbar/Navbar"
import "./hero.scss"
import { motion } from "framer-motion";
import { Button } from "@mui/material";



const variants={
  initial:{
    scale:0,
  },
  animate:{
   scale:1,
    transition:{
      delay:2,
      duration:2,
    }
  }
}

export const Hero = () => {
  return (
    <div className="Hero">
<div className="blur"></div>
<div className="circle"/>
<Navbar/>
<motion.div className="Text" variants={variants} initial="initial" animate="animate">
  <h1>Elevate Hydration, Inspire Living – Pure <br/>Essence in Every Drop.</h1>
  <a>Hydration Elevated: Sip Excellence with Every Drop</a>
  <Button variant="contained">Shop now</Button>
</motion.div>


    </div>
  )
}
