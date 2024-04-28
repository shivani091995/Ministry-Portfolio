// News.jsx

import React from 'react';
import './News.css';
import NewsData from './NewsData';
import News1 from '../assets/news.jpg';
import News2 from '../assets/Link.jpg';
import News3 from '../assets/gallery.jpg';

function News() {
  return (
    <div className="news">
      <h5>Official Announcements, News & Gallery</h5>
      <p>
        <hr></hr>
        <br></br>
      Explore the latest official announcements, news updates, and a curated gallery of visual content on our Government of India platform. 
      Stay informed with authoritative news, access 
      important links, and immerse yourself in a visual journey showcasing key events and moments
      </p>
      <div className="newscard">
        <NewsData
          image={News1}
          heading="Headlines"
          para="Stay informed with our curated selection of news headlines, covering a wide range of topics from global affairs to technology, finance, politics, and more. 
          Explore the latest stories shaping our world and keep up with the most significant developments."
          url="/card1"
        />
        <NewsData
          image={News2} 
          heading="Official Announcements"
          para="Important Announcement and pdf links."
          url="/card2"
        />
        <NewsData
          image={News3}
          heading="Gallery"
          para="Explore our gallery to relive captivating moments and visual stories that highlight the essence of India's journey."
          url="/card3"
        />
        
      </div>
    </div>
  );
}

export default News;
