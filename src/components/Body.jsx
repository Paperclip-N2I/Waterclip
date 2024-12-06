import React, { useState, useEffect } from "react";
import Heart from "./Body/Heart";
import Lung from "./Body/Lung";
import Hand from "./Body/Hand";
import Blood from "./Body/Blood";
import BodySvg from "../img/body.svg";

const Home = () => {
    const [elements, setElements] = useState([
        { id: 1, type: "Lung", position: { x: 50, y: 50 }, placed: false },
        { id: 2, type: "Heart", position: { x: 150, y: 150 }, placed: false },
        { id: 3, type: "Hand", position: { x: 50, y: 150 }, placed: false },
        { id: 4, type: "Blood", position: { x: 150, y: 50 }, placed: false },
    ]);

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [bodyHeight, setBodyHeight] = useState(0);
    const bodyContainerRef = React.useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
            if (bodyContainerRef.current) {
                setBodyHeight(bodyContainerRef.current.getBoundingClientRect().height);
            }
        };
        window.addEventListener("resize", handleResize);
        setTimeout(handleResize, 0); // Call it initially to set the height after ref is set
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    console.log("Largeur de l'écran :", screenWidth);
    console.log("Hauteur du corps :", bodyHeight);

    const [isDragging, setIsDragging] = useState(null);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    // Activer le drag pour cet élément
    function handleMouseDown(id, e) {
        const element = elements.find((el) => el.id === id);
        if (element && !element.placed) {
            const offsetX = e.clientX - element.position.x;
            const offsetY = e.clientY - element.position.y;
            console.log('client Y', e.clientY);

            setOffset({ x: offsetX, y: offsetY });
            setIsDragging(id);
        }
    }

    function handleMouseMove(e) {
        if (isDragging === null) return;

        const x = e.clientX - offset.x + 25;
        const y = e.clientY - offset.y - 10;

        setElements((prevElements) =>
            prevElements.map((el) =>
                el.id === isDragging ? { ...el, position: { x, y } } : el
            )
        );
    }

    function handleMouseUp() {
        if (isDragging !== null) {
            const droppedElement = elements.find((el) => el.id === isDragging);
            if (droppedElement) {
                if (droppedElement.position) {
                    const x = droppedElement.position.x;
                    // const y = droppedElement.position.y;
                    if (x > (screenWidth / 2 - 150) && x < (screenWidth / 2 + 150)) {
                        setElements((prevElements) =>
                            prevElements.map((el) =>
                                el.id === isDragging
                                    ? { ...el, placed: true, position: { x: screenWidth / 2, y: bodyHeight / 4 } }
                                    : el
                            )
                        );
                        if (isDragging === 1) {
                            setElements((prevElements) =>
                                prevElements.map((el) =>
                                    el.id === isDragging
                                        ? { ...el, placed: true, position: { x: screenWidth / 2 - 50, y: bodyHeight / 4 } }
                                        : el
                                )
                            );
                        } else if (isDragging === 2) {
                            setElements((prevElements) =>
                                prevElements.map((el) =>
                                    el.id === isDragging
                                        ? { ...el, placed: true, position: { x: screenWidth / 2 - 50, y: bodyHeight / 4 } }
                                        : el
                                )
                            );
                        } else if (isDragging === 3) {
                            setElements((prevElements) =>
                                prevElements.map((el) =>
                                    el.id === isDragging
                                        ? { ...el, placed: true, position: { x: 2*(screenWidth / 5.3), y: bodyHeight / 2 - 20} }
                                        : el
                                )
                            );
                        } else if (isDragging === 4) {
                            setElements((prevElements) =>
                                prevElements.map((el) =>
                                    el.id === isDragging
                                        ? { ...el, placed: true, position: { x: screenWidth / 2, y: bodyHeight / 3 + 50 } }
                                        : el
                                )
                            );
                        }
                        console.log("Element dropped in the drop zone");
                    }
                }
            }
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
                        className="animate-ping"
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
                height: "auto",
                position: "relative",
                top: "0px"
            }}
            id="body-container"
            ref={bodyContainerRef}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
        >
            <img
                src={BodySvg}
                alt="Heart"
                height="100%"
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