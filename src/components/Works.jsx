import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github} from "../assets";
import { SectionWrapper} from "../hoc";
import { projects} from "../constants";
import { fadeIn, textVariant } from "../utils/motion";


const ProjectCard = ({ index, name, description, tags, image, color, source_code_link }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max:45,
            scale:1,
            speed:450
          }}
          className="bg-tertiary rounded-[20px] sm:w-[360px] w-full py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={image} alt={name}
          className="w-full h-full object-contain rounded-2xl"/>
          <h3 className="text-white text-[20px] font-bold text-center">{name}</h3>
          <p className='mt-2 text-secondary text-[14px] '>{description}</p>
          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p
                key={tag.name}
                className={`flex items-center justify-center ${tag.color} px-3 py-1 rounded-full text-[14px]`}
              >
                #{tag.name}
              </p>
            ))}

          </div>
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open (source_code_link, "blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img src={github} alt="github" className='w-1/2 h-1/2 object contain'>
              
              </img>

            </div>

          </div>
        </div>
      </motion.div>
    </Tilt>
  )

}



const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}
        >what my hands have done. . . 
        </p>
        <h2 className={styles.sectionHeadText}>Projects.
        </h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
         These projects showcases my skills and experience through real world examples. 
        </motion.p>
      </div>
      <div className='mt-20 flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard 
          key={`project-${index}`}
          index={index}
          {...project}
          />
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(Works, "");