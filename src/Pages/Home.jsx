import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

export default function Home() {
	const navigate = useNavigate();
	const [user, loading, error] = useAuthState(auth);
	function handelLogout() {
		signOut(auth)
			.then(() => {
				navigate("/");
			})
			.catch((error) => {
				console.error(error);
			});
	}
	if (loading) return <p>User info Loading </p>;
	return (
		<>
			<h1>Wellcome {user.email}</h1>
			<button onClick={handelLogout} className="border-2 px-3 py-2">
				Log out
			</button>
		</>
	);
}
