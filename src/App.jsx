import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Reset from "./Pages/Reset";
import Login from "./Pages/Login";
import PrivateRoute from "./Pages/Routes/PrivateRoute";
function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Login />,
		},
		{
			element: <PrivateRoute />,
			children: [{ path: "/Home", element: <Home /> }],
		},

		{
			path: "/Register",
			element: <Register />,
		},
		{
			path: "/Reset",
			element: <Reset />,
		},
	]);
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
