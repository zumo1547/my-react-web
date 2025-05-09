import React, { useState } from 'react';

const data = [
  {
    title: 'คำสั่งที่ GitHub',
    short: 'คำสั่งใช้เมื่อไหร่และใช้ยังไง...',
    detail: `
คำสั่ง            ใช้เมื่อไหร่
-----------------------------------------------
git add .         เพิ่มทุกไฟล์ในโฟลเดอร์ปัจจุบันและย่อย (รวมไฟล์ใหม่)
git add -A        เพิ่มไฟล์ที่เปลี่ยนแปลง, ที่ลบ, และไฟล์ใหม่
git add -u        เพิ่มเฉพาะไฟล์ที่เปลี่ยนแปลงหรือลบ (ไม่รวมไฟล์ใหม่)
git commit -m     Commit การเปลี่ยนแปลงที่ add ไปแล้ว
git commit -am    Commit เฉพาะไฟล์ที่มีอยู่แล้ว (ไม่เพิ่มไฟล์ใหม่)
git rm            ลบไฟล์จาก repo และ staging area
git status        ตรวจสอบสถานะไฟล์ทั้งหมด
`
  },
  {
    title: 'Customizable Themes',
    short: 'Switch styles with simple CSS...',
    detail: `
คุณสามารถปรับธีมของเว็บได้ง่าย ๆ:
- เปลี่ยนสีหลักใน CSS
- สลับโหมด Light/Dark ด้วย toggle
- รองรับ Responsive สำหรับมือถือ
`
  },
  {
    title: 'Deploy Easily',
    short: 'Host your site with GitHub Pages...',
    detail: `
ขั้นตอน Deploy:
1. สร้าง repository บน GitHub
2. push โค้ดขึ้น
3. ตั้งค่า GitHub Pages
4. แชร์ลิงก์ให้เพื่อนดูเว็บได้เลย!
`
  }
];

function Section() {
  const [selectedCard, setSelectedCard] = useState(null);

  const openPopup = (index) => setSelectedCard(index);
  const closePopup = () => setSelectedCard(null);

  return (
    <section className="content">
      {data.map((item, i) => (
        <article className="card" key={i} onClick={() => openPopup(i)}>
          <h2>{item.title}</h2>
          <p>{item.short}</p>
        </article>
      ))}

      {selectedCard !== null && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closePopup}>&times;</button>
            <h2>{data[selectedCard].title}</h2>
            <pre style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6' }}>
              {data[selectedCard].detail}
            </pre>
          </div>
        </div>
      )}
    </section>
  );
}

export default Section;
