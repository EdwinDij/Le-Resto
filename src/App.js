import Main from "./Components/Main";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
