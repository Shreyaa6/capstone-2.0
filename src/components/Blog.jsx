import React from 'react';
import Footer from './Footer';
import styles from '../styles/Blog.module.css';
import NavBar from './Navbar';
import { useNavigate } from 'react-router-dom';
import blog1 from '../assets/blog1.jpg';
import blog2 from '../assets/blog2.jpg';
import blog3 from '../assets/blog3.jpg';

const blogPosts = [
  {
    id: 1,
    title: 'The Art of Custom Phone Cases',
    date: 'June 1, 2024',
    summary: 'Discover how custom phone cases can express your personality and make your device truly yours.',
    image: blog1,
  },
  {
    id: 2,
    title: 'Top 5 Trends in Mobile Accessories 2024',
    date: 'May 20, 2024',
    summary: 'Stay ahead with the latest trends in mobile accessories, from eco-friendly materials to bold designs.',
    image: blog2,
  },
  {
    id: 3,
    title: 'How to Design Your Own Case: Tips & Tricks',
    date: 'May 10, 2024',
    summary: 'A step-by-step guide to designing a phone case that stands out and lasts.',
    image: blog3,
  },
];

export default function Blog() {
  const navigate = useNavigate();
  return (
    <div className={styles.blogPage}>
      <NavBar />
      <h1 className={styles.heading}>Our Blog</h1>
      <p className={styles.intro}>Insights, tips, and stories about custom phone cases and mobile accessories.</p>
      <div className={styles.posts}>
        {blogPosts.map(post => (
          <div className={styles.card} key={post.id}>
            <img src={post.image} alt={post.title} className={styles.cardImg} />
            <h2 className={styles.title}>{post.title}</h2>
            <p className={styles.date}>{post.date}</p>
            <p className={styles.summary}>{post.summary}</p>
            <button className={styles.readMore}>Read More</button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
} 