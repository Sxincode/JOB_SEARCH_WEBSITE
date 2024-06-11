import React from 'react'
import InputField from '../component/InputField'


const WorkExperience = ({handleChange}) => {
  return (
    <div>
    <h4 className='text-lg font-medium mb-2'>Work Experience</h4>

    <div>
      <label className="sidebar-label-container">
        <input type="radio" name="test4" id="test" value="" onChange={handleChange} />
        <span className='checkmark'></span>Any experience
      </label>

      <InputField handleChange={handleChange} value="Internship" title="Internship" name="test4" />
      <InputField handleChange={handleChange} value="Work remotely" title="Work remotely" name="test4" />
    </div>
  </div>
  )
}

export default WorkExperience
