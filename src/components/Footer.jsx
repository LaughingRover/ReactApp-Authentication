import audio from '../assets/svg/Volume.svg'
import '../styles/Footer.css'


const footer = () => {

	// Header position
	return (
		<footer>
			<div className="page-links">
				<a href="/">SUPPORT</a>
				<a href="/">ABOUT</a>
				<a href="/">CREDITS</a>
			</div>

			<div className="icon">
				<a href="/"><img src={audio} alt="" /></a>
			</div>
		</footer>
	)
}
export default footer;