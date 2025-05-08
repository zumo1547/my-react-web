import React, { useState } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <header>
        <h1>💡 เริ่มต้นใช้งาน Git กับ ReactJS</h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </header>
      <main>
        <section className="block">
          <h2>1️⃣ สร้าง React App</h2>
          <code>npx create-react-app my-app</code>
        </section>
        <section className="block">
          <h2>2️⃣ เริ่มต้นใช้ Git</h2>
          <code>git init && git add . && git commit -m "Start project"</code>
        </section>
        <section className="block">
          <h2>3️⃣ Push ไป GitHub</h2>
          <code>git remote add origin https://github.com/user/repo.git</code><br />
          <code>git push -u origin main</code>
        </section>
        <section className="block">
          <h2>4️⃣ Deploy ผ่าน GitHub Pages</h2>
          <code>npm install gh-pages --save-dev</code><br />
          <code>npm run build && npm run deploy</code>
        </section>
      </main>
    </div>
  );
}

export default App;
