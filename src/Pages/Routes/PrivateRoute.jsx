import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoute() {
	const [user, loading, error] = useAuthState(auth);
	if (loading) return <p>Loading...</p>;
	return <>{user ? <Outlet /> : <Navigate to={"/"} />}</>;
}
