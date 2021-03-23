import closebtn from '../assets/svg/CircleButton.svg'
import placeholderImg from '../assets/svg/ImageP.svg'
import '../styles/SignUp.css';



const main = () => {

	// Header position
	return (
		<main>
		<section className="login-card">
			<div className="login">
				<div className="login-header">
					<h1>Create an Account</h1>
					<p>Already a user? <a href="/">Sign In</a></p>
				</div>
				<input type="text" name="first_name" id="" placeholder="First Name" className="input-style" />
				<input type="email" name="email" id="" placeholder="Email Address" className="input-style" />
				<input type="password" name="" id="" placeholder="Password" className="input-style" />
				<input type="password" name="" id="" placeholder="Confirm Password" className="input-style" />
				{/* <input type=""/> */}

				<button><a href="/">SIGN UP</a></button>

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