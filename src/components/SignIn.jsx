import closebtn from '../assets/svg/CircleButton.svg'
import placeholderImg from '../assets/svg/ImageP.svg'
import '../styles/SignIn.css';
// import customInput from './input'



const main = () => {

	// Header position
	return (
		<main>
		<section className="login-card">
			<div className="login">
				<div className="login-header">
					<h1>Sign In</h1>
					<p>New User? <a href="/">Create an account</a></p>
				</div>
				<input type="text" name="" id="" placeholder="Username or email" className="input-style" />
				<input type="password" name="" id="" placeholder="Password" className="input-style" />
				
				{/* <input type=""/> */}

				<div className="kmsi">
					<label className="container">
						<span className="kmsi-text">Keep me signed in</span>
						<input type="checkbox" checked="checked" />
						<span className="checkmark"></span>
					</label>
				</div>

				<button><a href="/">SIGN IN</a></button>

				<div className="divider">
					<hr />
					<p> Or Sign In With </p>
					<hr />
				</div>

				<div className="sso">
					<a href="/" className="sso-btn">GOOGLE</a>
					<a href="/" className="sso-btn">FACEBOOK</a>
				</div>

			</div>

			<div>
				<a href="/" className="close-btn-wrap">
					<img src={closebtn} alt="" className="close-btn" />
				</a>

				<div className="img-wrapper">
					<img src={placeholderImg} className="side-image" alt="" />
				</div>
			</div>

		</section>
	</main>
)}

export default main;