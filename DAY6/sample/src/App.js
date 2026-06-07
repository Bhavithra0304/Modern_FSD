import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./Routers/AppRoutes";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <AppRoutes></AppRoutes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
