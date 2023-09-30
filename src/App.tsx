import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/profile/:userId" element={<Profile />} />
    </Router>
  );
};

export default App;
