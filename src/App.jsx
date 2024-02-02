import"./App.scss"
import { Body } from "./Body/Body";
import { Hero } from "./Hero/Hero";
import { motion } from "framer-motion";


const variants ={
  initial:{
    y: 0,
  },
  animate:{
    y:-200,
    transition:{
      duration:2,
      delay:2,

    }
  },


  initialBottle:{
    y: 0,
  },
  animateBottle:{
    y:+280,
    transition:{
      duration:2,
      delay:2,

    }
  }
}



function App() {

  return (

    
    <div className="App">
 <motion.div className="image" variants={variants} intial="initial" animate="animate">

  <img src="Mask group.png" alt="" />
 </motion.div>
 <motion.div className="imageBottle" variants={variants} intial="initialBottle" animate="animateBottle">

<img src="Group 2836 (1).png" alt="" />
</motion.div>


      <section>
    
        <Hero/>
     
      
      </section>
      <section><Body/></section>
      
      </div>
    
  );
}

export default App;

