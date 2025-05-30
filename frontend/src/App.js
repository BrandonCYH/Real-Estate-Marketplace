import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import './App.css';
import './index.css';
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import LoginPage from "./Pages/LoginPage";
import Properties from "./Pages/Properties";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/real-estate-marketplace" element={<HomePage/>}/>
                <Route path="/about-us" element={<AboutUs/>}/>
                <Route path="/sign-in" element={<LoginPage/>}/>
                <Route path="/properties" element={<Properties/>}/>
            </Routes>
        </Router>
    );
}

export default App;
