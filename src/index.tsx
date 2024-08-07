import ReactDOM from "react-dom/client";
import BaterPonto from './BaterPonto';

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
