import Navbar from "./components/Navbar/Navbar";
import "./index.scss";
import Home from "./pages/Home/Home";
import Services from './pages/Services/Services';


function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Services />
    </>
  );
}

export default App;
