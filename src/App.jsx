import { useRef, useEffect } from "react";
import "./App.scss"
import { Body } from "./Body/Body";
import { Hero } from "./Hero/Hero";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";


const variants = {
  initial: {
    y: 0,
  },
  animate: {
    y: -200,
    transition: {
      duration: 2,
      delay: 2,

    }
  },


  initialBottle: {
    y: 0,
  },
  animateBottle: {
    y: +280,
    transition: {
      duration: 2,
      delay: 2,

    }
  }
}


function App() {


  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

 
  const { scrollYProgress } = useScroll(

  )
  const ybg = useTransform(scrollYProgress, [0, 0.5], ["0%", "95%"])
  const yText = useTransform(scrollYProgress, [0, 0.5], ["0%", "-40%"])



// useEffect(()=>{
// console.log(scrollYProgress);
// },[scrollYProgress])


  return (
    <div
      className="App">
      <motion.div className="image" variants={variants} intial="initial" animate="animate">

        <motion.img style={{ y: ybg }} src="Mask group.png" alt="" />
      </motion.div>
      <motion.div className="imageBottle" variants={variants} intial="initialBottle" animate="animateBottle">

        <motion.img style={{y:yText }} src="Group 2836 (1).png" alt="" />
      </motion.div>

      <motion.section>

        <Hero />


      </motion.section>
      <motion.section>
        <Body />
        </motion.section>

    </div>

  );
}

export default App;

