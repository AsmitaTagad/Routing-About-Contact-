import React from 'react';
import Contact from './Contact';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div style={{backgroundColor:"skyblue", height:"550px",padding:"72px", }}>
      <p> Welecome To About Page....</p>
      <Link to={'/Contact'}>...To contact Page</Link>
    </div>
  );
}
