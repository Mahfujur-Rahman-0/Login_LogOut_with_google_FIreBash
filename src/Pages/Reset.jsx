import { useState } from "react";
import { sendresetPass } from "../firebase";
import { NavLink, useNavigate } from "react-router-dom";

export default function Reset() {
	const [email, setEmail] = useState();
	const navigate = useNavigate();
	return (
		<>
			<h1 className="text-center text-4xl mt-8">Reset Page Running...</h1>
			<form>
				<div className="w-2/5 mx-auto mt-10 flex justify-center">
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
				<div className="w-2/5 my-20 mx-auto flex justify-center">
					<button
						className="border-2 px-3 py-2"
						onClick={() => {
							sendresetPass(email);
							navigate("/");
						}}
					>
						Reset email
					</button>
				</div>
				<p className="text-center ">
					No account ?{" "}
					<span className=" mx-auto border-b-2 border-black w-14">
						<NavLink to="/Register">Sign Up</NavLink>
					</span>
				</p>
			</form>
		</>
	);
}
