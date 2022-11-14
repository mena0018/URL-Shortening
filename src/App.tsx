import Navbar from "./components/Navbar/Navbar";
import "./index.scss";
import Boost from "./components/Boost/Boost";
import Home from "./pages/Home/Home";
import Services from './pages/Services/Services';
import Footer from './components/Footer/Footer';


function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Boost />
      <Footer />
    </>
  );
}

export default App;
