import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer/Index";
import NavBar from "./components/NavBar";
import ParkingScreen from "./components/Screen/ParkingScreen";
import background from "./img/background.jpg";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <NavBar />
      <div style={{ minHeight: "87vh" }}>
        <ParkingScreen />
      </div>
      {/* Footer */}
      <Footer />
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;
