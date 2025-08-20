import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Inbox from "./pages/Inbox";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/inbox" element={<Inbox />} />
			</Routes>
		</Router>
	);
}

export default App;
