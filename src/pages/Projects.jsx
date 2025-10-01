import React from 'react'

export default function Projects() {
  const projects = [
    { id: 1, title: 'Project One', img: '/images/proj1.jpg', desc: 'Developed the frontend UI with React and integrated REST APIs.' },
    { id: 2, title: 'Project Two', img: '/images/proj2.jpg', desc: 'Created backend services using Node.js and Express.' },
    { id: 3, title: 'Project Three', img: '/images/proj3.jpg', desc: 'Designed the database schema and implemented authentication.' }
  ]

  return (
    <section>
      <h2>Projects</h2>
      {projects.map(p => (
        <article key={p.id} style={{ marginBottom: '1rem' }}>
          <img src={p.img} alt={p.title} style={{ width: 200 }} />
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
        </article>
      ))}
    </section>
  )
}
