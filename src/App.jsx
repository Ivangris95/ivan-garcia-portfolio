import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./component/navbar";
import Footer from "./component/Footer";

const App = () => {
    return (
        <>
            <Router>
                <Navbar />
                <main>Main</main>
                <Footer />
            </Router>
        </>
    );
};

export default App;
