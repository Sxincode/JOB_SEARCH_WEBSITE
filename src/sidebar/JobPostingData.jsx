import React from 'react'
import InputField from '../component/InputField'

const JobPostingData = ({handleChange}) => {
    const now = new Date();
    const twentyFourhourAgo = new Date(now - 24*60*60*1000);
    const SevenDaysAgo = new Date(now - 7*24*60*60*1000);
    const ThirtydaysAgo = new Date(now - 30*24*60*60*1000);

    // convert date to string
    const twentyFourHoursAgoDate = twentyFourhourAgo.toISOString().slice(0,10);
    const SevenDaysAgoDate = SevenDaysAgo.toISOString().slice(0,10);
    const ThirtyDaysAgoDate = ThirtydaysAgo.toISOString().slice(0,10);
    return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Date of Posting</h4>

      <div>
        <label className="sidebar-label-container">
          <input type="radio" name="test3" id="test" value="" onChange={handleChange} />
          <span className='checkmark'></span>All time
        </label>

        <InputField handleChange={handleChange} value={twentyFourHoursAgoDate} title="Last 24 hours" name="test3" />
        <InputField handleChange={handleChange} value={SevenDaysAgoDate} title="Last 7 days" name="test3" />
        <InputField handleChange={handleChange} value={ThirtyDaysAgoDate} title="Last Month" name="test3" />
      </div>
    </div>
    )
}

export default JobPostingData
