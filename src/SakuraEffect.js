import React, { useEffect, useRef } from 'react';
// import $ from 'jquery';
import './SakuraEffect.css';
// import 'sakura.js';  // Import the sakura plugin

const SakuraEffect = () => {
    // Create a ref for the element to apply the sakura effect
    const sakuraRef = useRef(null);

    useEffect(() => {
        // Ensure the element exists before applying the Sakura plugin
        const sakuraNode = sakuraRef.current;
        if (sakuraNode) {
            // Apply the sakura effect to the element
            window.$(sakuraNode).sakura();
        }

        // Clean up when the component unmounts
        return () => {
            if (sakuraNode) {
                window.$(sakuraNode).sakura('destroy');  // Clean up the sakura effect if needed
            }
        };
    }, []); // Empty dependency array to ensure this runs only once after mount

    return (
        <div
            className="sakura-falling"
            ref={sakuraRef}
        >
            {/* Your content here */}
        </div>
    );
};

export default SakuraEffect;
