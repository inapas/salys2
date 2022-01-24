
import Countries from "./components/Countries";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Country from "./components/Country";


function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/">
        <Countries />
      </Route>
      <Route path="/countries/:name" children={<Country />}></Route>
    </Router>
  );
}

export default App;
