import { NewsLetter } from "./Components/NewsLetter/index";
import { Footer } from "./Components/Footer";
import { Router } from "./Routes/Router";

function App() {
  return (
    <div className="App">
      <Router />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
