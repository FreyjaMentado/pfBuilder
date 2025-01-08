import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './pages/homePage/Root';
import ErrorPage from "./pages/errorPage/ErrorPage";
import Navbar from './pages/navBar/NavBar';
import reportWebVitals from './reportWebVitals';
import Footer from './pages/footer/FooterComp';
import Class from './pages/class/Class';
import Race from './pages/race/Race';
import Abilities from './pages/abilities/Abilities';
import Equipment from './pages/equipment/Equipment';
import Finalize from './pages/finalize/Finalize';
import {
	createHashRouter,
	RouterProvider,
} from "react-router-dom";


const router = createHashRouter([
	{
		path: "/",
		element: <Navbar />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Root />
			},
      {
				path: "home",
				element: <Root />
			},
      {
				path: "class",
				element: <Class />
			},
      {
				path: "race",
				element: <Race />
			},
      {
				path: "abilities",
				element: <Abilities />
			},
      {
				path: "equipment",
				element: <Equipment />
			},
      {
				path: "finalize",
				element: <Finalize />
			},
		],
	},

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
    <Footer />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();