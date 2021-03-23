import { useState } from 'react';

const Form = () => {
	const [state, setState] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		gender: ''
	});

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setState({...state, [name]: value })
	}

	return (
		<>
			<h2>Form</h2>
			<hr />
			<form action="">
				<div>
					<label htmlFor="firstName">First Name</label>
					<input
						type="text"
						name="firstName"
						id="firstName"
						value={state.firstName}
						// onChange={(e) => setfirstName(e.target.value)}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor="lastName">Last Name</label>
					<input
						type="text"
						name="lastName"
						id="lastName"
						value={state.lastName}
						// onChange={(e) => setLastName(e.target.value)}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor="email">Email Address</label>
					<input
						type="text"
						name="email"
						id="email"
						value={state.email}
						// onChange={(e) => setEmail(e.target.value)}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor="password">Enter Password</label>
					<input
						type="password"
						name="password"
						id="password"
						value={state.password}
						// onChange={(e) => setPassword(e.target.value)}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor="confirmPassword">Confirm Password</label>
					<input
						type="password"
						name="confirmPassword"
						id="confirmPassword"
						value={state.confirmPassword}
						// onChange={(e) => setConfirmPassword(e.target.value)}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor="gender">Gender</label>
					<select name="gender" id="gender" value={state.gender}>
						<option value="Male">Male</option>
						<option value="Female">Female</option>
					</select>
				</div>
			</form>
			<p>Firstname {state.firstName}</p>
			<p>Lastname {state.lastname}</p>
			<p>Email {state.email}</p>
			<p>Password {state.password}</p>
			<p>Gender{state.gender}</p>
		</>
	);
};

export default Form;