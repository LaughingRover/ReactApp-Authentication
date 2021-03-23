import Logo from '../assets/svg/LogoP.svg'
import '../styles/LoginHeader.css'


const nav = () => {

	// Header position
	return (
		<header>
			<div className="logo">
				<a href="/"><img src={Logo} alt="" className="logo-text" /></a>
			</div>
				<button><a href="/"><h1>SIGN IN</h1></a></button>
		</header>
)}
export default nav;