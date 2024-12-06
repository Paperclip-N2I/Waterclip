import React from "react";
import BloodSvg from "./../../img/blood.svg";

function Blood({ position, onMouseDown }) {
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
                src={BloodSvg}
                alt="Heart"
                width="150"
                height="150"
                style={{ filter: "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))" }}
            />
        </div>
    );
}

export default Blood;
