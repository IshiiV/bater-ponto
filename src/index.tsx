import ReactDOM from "react-dom/client";
import BaterPonto from './components/BaterPonto';
import './index.css';

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el!);

const App = () => {
	return (
		<div>
			<BaterPonto/>
		</div>
	);
};

root.render(<App />);




// import ReactDOM from "react-dom/client";
// import BaterPonto from "./components/BaterPonto";
// import { Provider } from "react-redux";
// import { store } from "./state/store";

// const el = document.getElementById("root");
// const root = ReactDOM.createRoot(el!);

// const App = () => {
// 	return (
// 		<Provider store = {store}>
// 			<div>
// 				<BaterPonto/>
// 			</div>
// 		</Provider>
// 	);
// };

// root.render(<App />);
