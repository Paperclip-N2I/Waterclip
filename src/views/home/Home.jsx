import React, { useState } from "react";
import Heart from "../../components/Body/Heart";
import Lung from "../../components/Body/Lung";
import Hand from "../../components/Body/Hand";
import Blood from "../../components/Body/Blood";
import BodySvg from "../../img/body.svg";

const Home = () => {
    const [elements, setElements] = useState([
        { id: 1, type: "Lung", position: { x: 50, y: 50 } },
        { id: 2, type: "Heart", position: { x: 150, y: 150 } },
        { id: 3, type: "Hand", position: { x: 50, y: 150 } },
        { id: 4, type: "Blood", position: { x: 150, y: 50 } },
    ]);

    const [isDragging, setIsDragging] = useState(null);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    // Activer le drag pour cet élément
    function handleMouseDown(id, e) {
        const element = elements.find((el) => el.id === id);
        if (element) {
            const offsetX = e.clientX - element.position.x;
            const offsetY = e.clientY - element.position.y;

            setOffset({ x: offsetX, y: offsetY });
            setIsDragging(id);
        }
    }

    function handleMouseMove(e) {
        if (isDragging === null) return;

        const parentBounds = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - parentBounds.left - offset.x + 25;
        const y = e.clientY - parentBounds.top - offset.y - 10;

        setElements((prevElements) =>
            prevElements.map((el) =>
                el.id === isDragging ? { ...el, position: { x, y } } : el
            )
        );
    }

    function handleMouseUp() {
        if (isDragging !== null) {
            const droppedElement = elements.find((el) => el.id === isDragging);
            console.log(
                `Position de l'élément ${isDragging} au drop :`,
                droppedElement.position
            );
        }
        setIsDragging(null);
    }

    function renderElement(el) {
        switch (el.type) {
            case "Lung":
                return (
                    <Lung
                        key={el.id}
                        id={el.id}
                        position={el.position}
                        onMouseDown={(e) => handleMouseDown(el.id, e)}
                    />
                );
            case "Heart":
                return (
                    <Heart
                        key={el.id}
                        id={el.id}
                        position={el.position}
                        onMouseDown={(e) => handleMouseDown(el.id, e)}
                    />
                );
            case "Hand":
                return (
                    <Hand
                        key={el.id}
                        id={el.id}
                        position={el.position}
                        onMouseDown={(e) => handleMouseDown(el.id, e)}
                    />
                );
            case "Blood":
                return (
                    <Blood
                        key={el.id}
                        id={el.id}
                        position={el.position}
                        onMouseDown={(e) => handleMouseDown(el.id, e)}
                    />
                );
            default:
                return null;
        }
    }

    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                position: "relative",
                border: "2px solid black",
            }}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
        >
            <img
                src={BodySvg}
                alt="Heart"
                width="70%"
                style={{
                    margin: "auto",
                    filter: "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))",
                }}
            />
            {elements.map(renderElement)}
        </div>
    );
};

export default Home;
