import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>👋 สวัสดีครับ! ผมชื่อ ซูโม่</h1>
        <p>ผมเป็นนักเรียนที่กำลังฝึกเขียนเว็บด้วย React.js</p>
      </header>

      <section className="about">
        <h2>เกี่ยวกับผม</h2>
        <p>ผมอายุ 15 ปี ชอบเขียนโปรแกรม เล่นเกม และเรียนรู้เทคโนโลยีใหม่ๆ</p>
      </section>

      <section className="skills">
        <h2>ความสามารถ</h2>
        <ul>
          <li>HTML / CSS / JavaScript</li>
          <li>React.js (พื้นฐาน)</li>
          <li>สร้างเว็บไซต์แบบ Responsive</li>
        </ul>
      </section>

      <footer>
        <p>ติดต่อผมได้ที่: <a href="mailto:sumo@example.com">sumo@example.com</a></p>
      </footer>
    </div>
  );
}

export default App;
