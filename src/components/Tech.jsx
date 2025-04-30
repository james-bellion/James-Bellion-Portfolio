/* eslint-disable react-refresh/only-export-components */
import React from 'react'

// get our balls!!
import { BallCanvas } from "./canvas" 

import { SectionWrapper } from "../hoc"

import { technologies } from "../constants"

// loop over all of technologies saying tech.map get each induvidual tech and the for each
// induvidual tech we return a div 
// add self closing BallCanvas with icon as its only paramater
const Tech = () => {
  return (
    <div
     className="flex flex-row flex-wrap justify-center gap-10">
     {technologies.map((technology) => (
       <div className="w-28 h-28" key={technology.name}>
        <BallCanvas  icon={technology.icon}/>
      </div>
     ))}
    

    </div>
  )
}

export default SectionWrapper(Tech, "")