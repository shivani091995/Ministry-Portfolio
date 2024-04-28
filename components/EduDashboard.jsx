// News.jsx

import React from 'react';
import './News.css';
import NewsData from './NewsData';
import News5 from '../assets/fly.jpg';
import News4 from '../assets/attempt.jpg';
import News3 from '../assets/book1.jpg';
import News6 from '../assets/book.jpg';
import News7 from '../assets/steps.png';
import News8 from '../assets/4119036.jpg';
function EduDashboard() {
  return (
    <div className="news">
      <h4><b>
        Prepare for government exams with our comprehensive quiz platform, designed to help you ace your tests and secure your dream job in the public sector.
        </b></h4> 
      <hr></hr>
        <br></br>
      <div className="newscard">
  
        <NewsData
          image={News3}
          heading="Create Quiz"
          para="Click here to create a new quiz."
          url="/card4"
        />
        <NewsData
          image={News4}
          heading="Attempt Quiz"
          para="Practice Sets"
          url="/card6"
        />
        <NewsData
          image={News5}
          heading="Question Bank"
          para="Read all the previously asked questions."
          url="/card5"
        />
         <NewsData
          image={News6}
          heading="Available Tests"
          para="Find all the Government mock tests."
          url="/card7"
        />
        <NewsData
          image={News7}
          heading="Add Questions"
          para="Add questions to the Question Bank."
          url="/card8"
        />
        <NewsData
          image={News8}
          heading="Questions from the quiz"
          para="Get all the questions from the available quizzes and modules."
          url="/card9"
        />
        
      </div>
    </div>
  );
}

export default EduDashboard;
