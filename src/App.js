import "./styles/App.css";
import HeaderComponent from "./components/HeaderComponent";
import MainComponent from "./components/MainComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <MainComponent />
      {/* <FooterComponent /> */}
    </div>
  );
}

export default App;
