import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';

function App() {
  const [resumeData, setResumeData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://personal-website-server-3.onrender.com`);
        
        setResumeData(response.data);
        console.log(response.data.experience);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch data. Please check your server connection.');
      }
    };

    fetchData();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!resumeData) return <div>Loading...</div>;

  return (
    <div className="App">
      <Header headerData={resumeData.header} />
      <About aboutData={resumeData.about} />
      <Experience experiences={resumeData.experience} />
      <Education educationData={resumeData.education} />
      <Skills skillsData={resumeData.skills} />
      <Footer footerData={resumeData.footer} />
    </div>
  );
}

export default App;
