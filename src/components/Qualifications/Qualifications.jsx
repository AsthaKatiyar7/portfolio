import React, { useEffect, useRef } from 'react';
import './qualifications.scss';

const qualifications = [
  {
    year: "2021-2025",
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Institute of Engineering & Technology, Lucknow",
    score: "9.32 CGPA",
    progress: 93.2
  },
  {
    year: "2019-2020",
    degree: "Class XII",
    institution: "Study Hall School, Lucknow",
    score: "96.4%",
    progress: 96.4
  },
  {
    year: "2017-2018",
    degree: "Class X",
    institution: "Study Hall School, Lucknow",
    score: "96.6%",
    progress: 96.6
  }
];

const Qualifications = () => {
  const progressRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.5 }
    );

    progressRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      progressRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="qualifications" id="qualifications">
      <div className="qualifications-container">
        <h2 className="section-title">Qualifications</h2>
        <div className="timeline">
          {qualifications.map((qual, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <h3 className="year">{qual.year}</h3>
                <h4 className="degree">{qual.degree}</h4>
                <p className="institution">{qual.institution}</p>
                <p className="score">{qual.score}</p>
                <div className="progress-container">
                  <div 
                    className="progress-bar" 
                    ref={el => progressRefs.current[index] = el}
                    style={{"--progress": `${qual.progress}%`}}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualifications;