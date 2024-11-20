import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { logInwithEmailPass, signinWithGoogle } from "../firebase";

export default function Login() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	async function handelLogin(e) {
		e.preventDefault();
		try {
			const response = await logInwithEmailPass(email, password);
			console.log(response);
			navigate("/Home");
		} catch (err) {
			console.log(err);
		}
	}
	async function HandelsigninWithGoogle() {
		await signinWithGoogle();

		navigate("/Home");
	}
	return (
		<>
			<h1 className="text-center text-4xl mt-8">Login Page</h1>
			<p className="text-center mb-40 ">Running...</p>
			<form className="">
				<div className="w-2/5 mx-auto flex justify-center">
					<label className="mx-4" htmlFor="email">
						Email address
					</label>
					<input
						className=" border-gray-400 px-3 border-2"
						type="email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						placeholder="Email address"
					/>
				</div>
				<div className="w-2/5 my-5 mx-auto flex justify-center">
					<label className="mx-4" htmlFor="pass">
						Password
					</label>
					<input
						id="pass"
						className=" border-gray-400 px-3 border-2"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Password"
					/>
				</div>
				<div className="w-2/5 my-20 mx-auto flex justify-center">
					<button
						className="border-2 mx-3 px-3 py-2"
						type="submit"
						onClick={handelLogin}
					>
						Login
					</button>
					<button
						className="border-2 mx-3 bg-blue-700 text-white px-3 py-2"
						type="button"
						onClick={HandelsigninWithGoogle}
					>
						Login with Google
					</button>
				</div>
			</form>
			<p className="text-center ">
				No account ?{" "}
				<span className=" mx-auto border-b-2 border-black w-14">
					<NavLink to="/Register">Sign Up</NavLink>
				</span>
			</p>
			<p className="text-center mx-auto  border-black border-b-2 w-12">
				<NavLink to="/Reset">Reset</NavLink>
			</p>
		</>
	);
}
