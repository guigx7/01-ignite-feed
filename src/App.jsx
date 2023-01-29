import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/guigx7.png',
      name: 'Guilherme Tavares',
      role: 'IVR Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera!' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no Rocketseat Ignite. O nome do projeto é IgniteFeed 🚀' },
      { type: 'link', content: 'www.offguigx7.com/portfolio/ignitefeed' },
    ],
    publishedAt: new Date('2023-01-28 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO at Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'www.diegofernandes.com/doctorcare' },
    ],
    publishedAt: new Date('2023-01-26 16:20:00')
  },
];


function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App
