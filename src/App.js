import React, { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      <header className="header">
        <h1>แนะนำการใช้งาน Git กับ ReactJS</h1>
        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? "โหมดสว่าง" : "โหมดมืด"}
        </button>
      </header>

      <main className="content">
        <section className="block">
          <h2>เริ่มต้นติดตั้ง</h2>
          <p>1. ติดตั้ง Node.js และ Git</p>
          <p>2. สร้างโปรเจกต์ React ด้วยคำสั่ง:</p>
          <code>npx create-react-app my-app</code>
        </section>

        <section className="block">
          <h2>เชื่อมต่อ Git</h2>
          <p>1. git init</p>
          <p>2. git remote add origin [ลิงก์ GitHub]</p>
          <p>3. git add .</p>
          <p>4. git commit -m "first commit"</p>
          <p>5. git push -u origin master</p>
        </section>

        <section className="block">
          <h2>Deploy GitHub Pages</h2>
          <p>1. ติดตั้ง gh-pages</p>
          <code>npm install gh-pages --save-dev</code>
          <p>2. เพิ่ม `homepage` และ script ใน package.json</p>
          <code>\n\"predeploy\": \"npm run build\",\n\"deploy\": \"gh-pages -d build\"\n</code>
          <p>3. ใช้คำสั่ง:</p>
          <code>npm run deploy</code>
        </section>
      </main>

      <footer className="footer">
        <p>© 2025 Git + ReactJS Guide</p>
      </footer>
    </div>
  );
}

export default App;
