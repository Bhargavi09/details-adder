import React, {useState} from 'react'

const ExperienceCounter = () => {

    const [experience, setExperience] = useState(0)

  return (
      <div>
          <button onClick={(experience)=> setExperience(experience-1) } >-</button>
          <p>{experience}</p>
          <button onClick={(experience)=> setExperience(experience+1) }>+</button>
    </div>
  )
}

export default ExperienceCounter