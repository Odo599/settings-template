import { useState } from "react";
import type { InputData } from "../interfaces";
import "../styles/Input.css";

export const Input: React.FC<InputData> = ({ name, id, placeholder }) => {
    const [value, setValue] = useState(load());

    function load() {
        const loaded = localStorage.getItem(id);
        return loaded ? JSON.parse(loaded) : "";
    }

    function set(value: string) {
        localStorage.setItem(id, JSON.stringify(value));
        setValue(load);
    }

    return (
        <div className="form-group">
            <label>
                <span className="setting-name">{name}</span>
                <input
                    type="text"
                    id={id}
                    name={id}
                    placeholder={placeholder}
                    value={value}
                    onBlur={(e) => set(e.target.value)}
                    onChange={(e) => setValue(e.target.value)}
                />
            </label>
        </div>
    );
};
