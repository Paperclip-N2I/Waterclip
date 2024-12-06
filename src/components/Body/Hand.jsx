// Lung.js
import React from "react";
import HandSvg from "./../../img/hand.svg";

function Hand({ position, onMouseDown }) {
    return (
        <div
            onMouseDown={onMouseDown}
            style={{
                position: "absolute",
                left: position.x,
                top: position.y,
                color: "white",
                cursor: "pointer",
            }}
        >
            <img
                src={HandSvg}
                alt="Heart"
                className="w-14 h-14 md:w-36 md:h-36"
                style={{
                    filter: "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))",
                    transform: "rotate(200deg)",
                }}
            />
        </div>
    );
}

export default Hand;
