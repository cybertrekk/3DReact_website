import {React} from 'react';
import Tilt from 'react-parallax-tilt';
import {AnimatePresence, motion}  from 'framer-motion';
import {styles}  from '../styles';
import {services} from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import {SectionWrapper}  from '../hoc';

const ServiceCard = ({index, title, icon }) => {
  return(
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
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title}
          className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <AnimatePresence>
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>  Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="my-4 mx-4 text-[17px] max-w-3xl leading-[30px] text-justify"
        >  
          I am a DevOps engineer with 7+ years of experience in SDLC methodologies like Agile and SCRUM. I have:
          Set up and optimized Kubernetes clusters for high availability and scalability using helm charts, replica sets, and EKS.
          Used Docker and Kubernetes as the CI/CD system's runtime environment to build, test, and deploy containerized microservices.
          Written Terraform scripts, cloud formation templates, Azure Resource manager to provision Prod and Dev environments with secret management using HashiCorp vault, AWS secret manager, azure key vaults.
          Used Chef and Ansible to automate configurations and update the wildcard SSL certificate.
          Administered databases and collected AWS and Azure automated backups of DBs for regular db. refresh/sync.
          Exploited services like AWS CloudFront, Azure Front Door for global content delivery and monitored latency in remote regions using digital ocean. Also, set up cache control headers in dev environments web servers.
          Created log groups and generated a debugging system to analyze and filter logs using CLI and log insights.
          Inaugurated aws storage gateway, snowflakes, Azure StorSimple to connect on-premises storage to cloud services like S3, Blob storage and EFS file systems.
          Designed Python/Bash scripts to automate tasks. 
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
    </AnimatePresence>
  )
}

export default SectionWrapper(About, "about")