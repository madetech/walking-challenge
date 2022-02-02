import "./App.css";
import MonthView from "./MonthView";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 


const App = () => {
  return (
    <Router>
      <Routes>
      <Route  path ="/:year/:month" element={<MonthView/>} />
      </Routes>
    </Router>
  );
};

export default App;
