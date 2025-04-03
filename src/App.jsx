import React, { useEffect, useState } from "react";
import { Navbar, Footer, Stats, Info, Malla, Welcome } from "./components";
import PopUpMessage from "./components/PopUpMessage";

function App() {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const hasSeenPopup = localStorage.getItem("hasSeenPopup");
        // const hasSeenPopup = true
        if (!hasSeenPopup) {
            setShowPopup(true);
            localStorage.setItem("hasSeenPopup", "true");
        }
    }, []);

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <>
            {showPopup && <PopUpMessage onClose={handleClosePopup} />}
            <Navbar showPopup={showPopup} />
            <div className="max-w-screen-xl mx-auto">
                <Welcome />
                <Stats />
            </div>
            <Malla />
            <Info />
            <Footer />
        </>
    );
}

export default App;