import Navbar from "./components/Navbar/Navbar";
import "./index.scss";
import Boost from "./pages/Boost/Boost";
import Home from "./pages/Home/Home";
import Services from './pages/Services/Services';
import Footer from './pages/Footer/Footer';


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
