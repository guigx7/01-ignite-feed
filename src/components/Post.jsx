import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar className={styles.avatar} src="https://github.com/diego3g.png" />
					<div className={styles.authorInfo}>
						<strong>Diego Fernandes</strong>
						<span>CTO / Web Developer</span>
					</div>
				</div>

				<time title='27 de Janeiro às 15:38' dateTime='2023-01-27 15:38'>Publicado há 1h</time>
			</header>

			<div className={styles.content}>

				<p>Fala galeraa 👋</p>

				<p>Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

				<p><a href="#">www.diegofernandes.com/doctorcare</a></p>

				<p>
					<a href="#">#novoprojeto</a>{' '}
					<a href="#">#nlw</a>{' '}
					<a href="#">#rocketseat</a>
				</p>
			</div>

			<form className={styles.commentForm}>
				<strong>Deixe seu feedback</strong>
				<textarea placeholder='Deixe um comentário'></textarea>

				<footer>
					<button type='submit'>Publicar</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				<Comment />
				<Comment />
				<Comment />
			</div>
		</article>
	)
}