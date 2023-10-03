import React from 'react'
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';


const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center object-contain gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28 object-center key={technology.name}">
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "");