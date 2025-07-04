import { useState } from "react";
import type { ToggleData } from "../interfaces";
import "../styles/Toggle.css";

export const Toggle: React.FC<ToggleData> = ({ name, id }) => {
    function load() {
        const loaded = localStorage.getItem(id);
        return loaded ? JSON.parse(loaded) : false;
    }

    function set(value: boolean) {
        localStorage.setItem(id, JSON.stringify(value));
        setIsChecked(load());
    }

    const [isChecked, setIsChecked] = useState(load());

    return (
        <>
            <div>
                <label style={{ cursor: "pointer" }}>
                    <span className="setting-name">{name}</span>
                    <input
                        type="checkbox"
                        id={id}
                        checked={isChecked}
                        onChange={() => set(!isChecked)}
                        style={{ display: "none" }}
                    />
                    <span className="slider">
                        <span className="slider-track"></span>
                        <span className="slider-thumb"></span>
                    </span>
                </label>
            </div>
        </>
    );
};
