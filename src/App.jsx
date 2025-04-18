import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./component/Home/Home";

const App = () => {
    return (
        <>
            <Router>
                <Navbar />
                <main className="min-h-screen">
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </>
    );
};

export default App;
