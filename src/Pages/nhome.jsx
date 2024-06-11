import React, { useState, useEffect } from 'react';
import Banner from '../component/Banner';
import Card from '../component/Card';
import Sidebar from '../sidebar/Sidebar';
import Jobs from './Jobs';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch('jobs.json')
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleChange = (event) => {
    console.log('Selected value:', event.target.value); // Debug log
    setSelectedCategory(event.target.value);
  };

  const filteredItems = jobs.filter((job) =>
    job.jobTitle?.toLowerCase().includes(query.toLowerCase())
  );

  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;

    if (query) {
      filteredJobs = filteredItems;
    }

    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({ jobLocation, maxPrice, salaryType, empLoymentType }) => {
          return (
            jobLocation?.toLowerCase() === selected.toLowerCase() ||
            parseInt(maxPrice) <= parseInt(selected) ||
            salaryType?.toLowerCase() === selected.toLowerCase() ||
            empLoymentType?.toLowerCase() === selected.toLowerCase()
          );
        }
      );
      console.log(filteredJobs);
    }
    return filteredJobs.map((data, i) => <Card key={i} data={data} />);
  };

  const result = filteredData(jobs, selectedCategory, query);

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />
      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        <div className="bg-white p-4 rounded">
          <Sidebar handleChange={handleChange} />
        </div>
        <div className="col-span-2 bg-white p-4 rounded-sm">
          <Jobs result={result} />
        </div>
        <div className="bg-white p-4 rounded">Right</div>
      </div>
    </div>
  );
};

export default Home;
