import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import './global.css'
import styles from './App.module.css'


function App() {
  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum"
          />
          <Post
            author="Guuilherme Tavares"
            content="Lorem ipsum"
          />
          <Post
            author="Guuilherme Tavares"
            content="Lorem ipsum"
          />
        </main>
      </div>
    </>
  )
}

export default App
