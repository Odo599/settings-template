import "./App.css";
import { SettingsTemplate } from "./components/SettingsTemplate";

function App() {
    return (
        <>
            <SettingsTemplate
                title="Test Settings"
                toggles={[{ name: "toggle1", state: false, id: "toggle1id" }]}
            />
        </>
    );
}

export default App;
