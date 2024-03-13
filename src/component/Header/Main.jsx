import React, { useState, useEffect } from 'react';
import './Main.css';

function Main() {
    const [headerTitle, setHeaderTitle] = useState("Hiluf Meressa Developer");

    useEffect(() => {
        const titles = [
            "Hiluf",
            "Meressa",
            "Developer"
        ];

        let currentIndex = 0;

        const interval = setInterval(() => {
            setHeaderTitle(titles[currentIndex]);
            currentIndex++;
            if (currentIndex === titles.length) {
                setHeaderTitle(titles.join(" "));
                currentIndex = 0;
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <header className="header">
            <div className="container">
                <h1 className="header-title">{headerTitle}</h1>
            </div>
        </header>
    );
}

export default Main;
