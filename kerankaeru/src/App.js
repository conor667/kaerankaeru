import './App.css';
import Home from "./components/pages/Home";
import Navbar from './components/navbar/Navbar';
import About from './components/pages/About';
import Upcoming from './components/pages/Upcoming';

function App() {

  let Component;

	//Switch statement to change web pages
	switch (window.location.pathname) {
		case "/Home":
			Component = Home;
			break;
		case "/About":
			Component = About;
			break;
    case "/Upcoming":
      Component = Upcoming;
      break;
		default:
			Component = Home;
			break;
  }
  return (
    <div>
      <Navbar/>
      <Component/>
    </div>
  );
}

export default App;
