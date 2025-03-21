// src/Portfolio.js

import React, { useState } from 'react';
import './style.scss'
const projects = [
  {
    url: 'https://d3q5ph1a1lg1pd.cloudfront.net/1710925782277-8d2c5fc3-86c5-48ce-ad3d-d2439a562d0c.png',
    caption: 'https://thetote.io/',
    desc: 'TOTE',
    category: 'first'
  },
  {
    url: 'https://d3q5ph1a1lg1pd.cloudfront.net/1710926275464-352058bb-5214-4044-8cf6-f91ef1adfab0.png',
    caption: 'https://www.gamesfi.live/',
    desc: 'Gamesfi',
    category: 'second'
  },
  {
    url: 'https://d3q5ph1a1lg1pd.cloudfront.net/1710927711050-9d28665f-59ce-4fb6-990d-82164340f614.png',
    caption: 'https://kwiktrust.com/',
    desc: 'KwikSign',
    category: 'first'
  },
  {
    url: 'https://d3q5ph1a1lg1pd.cloudfront.net/1710927253000-de2a9fc6-e8e4-4ff1-beac-8c7c3c9a73ce.png',
    caption: 'https://www.metastadium.io/',
    desc: 'U-Meta',
    category: 'second'
  },
  {
    url: 'https://d3q5ph1a1lg1pd.cloudfront.net/1710927935409-9075699a-46c5-432f-ad6e-c0f7cfdadece.png',
    caption: 'https://www.pixelpaddle.com/',
    desc: 'Pixel Paddle',
    category: 'first'
  },
  {
    url: 'https://d3q5ph1a1lg1pd.cloudfront.net/1713354708406-b42ba0fd-6114-4384-90d9-754c71921c01.png',
    caption: 'https://e-buy-online.netlify.app/',
    desc: 'Ecommerce (in progress)',
    category: 'second'
  },
  {
    url: 'https://d3q5ph1a1lg1pd.cloudfront.net/1713354879897-9a31e00a-d24a-499d-9dc7-551d58b13d51.png',
    caption: 'https://mohsinalisyed-portfolio.netlify.app/',
    desc: 'Portfolio',
    category: 'first'
  },
];

const Portfolio = () => {
  const [filter, setFilter] = useState('*');

  const filteredProjects = filter === '*'
    ? projects
    : projects.filter(project => project.category === filter.slice(1));

  return (
    <div className="container-xxl py-6 pt-5" id="project">
      <div className="container">
        <div className="row g-5 mb-5 align-items-center">
          <div className="col-lg-6">
            <h2>My Projects</h2>
          </div>
          <div className="col-lg-6 text-lg-end">
            <ul className="list-inline mx-n3 mb-0 d-flex justify-content-end" id="portfolio-flters">
              <li className={`mx-3 ${filter === '*' ? 'active' : ''}`} data-filter="*" onClick={() => setFilter('*')}>All Projects</li>
              <li className={`mx-3 ${filter === '.first' ? 'active' : ''}`} data-filter=".first" onClick={() => setFilter('.first')}>UI/UX Design</li>
              <li className={`mx-3 ${filter === '.second' ? 'active' : ''}`} data-filter=".second" onClick={() => setFilter('.second')}>Graphic Design</li>
            </ul>
          </div>
        </div>
        <div className="row g-4 portfolio-container">
          {filteredProjects.map((project, index) => (
            <div key={index} className={`col-lg-4 col-md-6 portfolio-item mb-4 ${project.category}`}>
              <div className="portfolio-img rounded overflow-hidden">
                <img className="img-fluid" src={project.url} alt={project.desc} />
                <div className="portfolio-btn">
                  <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href={project.url} data-lightbox="portfolio">
                    <i className="fa fa-eye"></i>
                  </a>
                  <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href={project.caption} target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-link"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
