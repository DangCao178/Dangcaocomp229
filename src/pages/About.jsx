import React from 'react'

export default function About() {
  return (
    <section>
      <h2>About Me</h2>
      <img src="/images/me.webp" alt="me" style={{ width: 140, borderRadius: 8 }} />
      <p>My legal name: <strong>Dang Huy Cao</strong></p>
      <p>I am a passionate web development student at Centennial College, focusing on building clean, responsive, and user-friendly web applications. I enjoy learning modern web technologies like React, and I'm always eager to take on new challenges to grow my skills.</p>

      <p>
        <a href="/dang-cao-resume.docx" target="_blank" rel="noreferrer">
          Download my resume — <strong>Dang Cao Resume Project (DOCX)</strong>
        </a>
      </p>
    </section>
  )
}
