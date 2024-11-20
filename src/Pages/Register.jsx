import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { registerWithEmailAndPassword } from "../firebase";

export default function Register() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const handelSubmit = async (e) => {
		e.preventDefault();
		try {
			const user = await registerWithEmailAndPassword(email, password);
			console.log(user);
			navigate("/");
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<>
			<h1 className="text-center text-2xl mt-8">Register Page</h1>
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
					{email == "" || password == "" ? (
						""
					) : (
						<button
							className="border-2 px-3 py-2"
							type="submit"
							onClick={handelSubmit}
						>
							Submit
						</button>
					)}
				</div>
			</form>

			<p className="text-center">
				Already Have an account ?{" "}
				<span className=" mx-auto border-b-2 border-black w-14">
					<NavLink to="/">Log In</NavLink>
				</span>
			</p>
		</>
	);
}
