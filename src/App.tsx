import "./App.css";
import { SettingsTemplate } from "./components/SettingsTemplate";

function App() {
    return (
        <>
            <SettingsTemplate
                title="Test Settings"
                toggles={[
                    { name: "toggle1", state: false, id: "toggle1id" },
                    { name: "toggle2", state: true, id: "toggle2id" },
                ]}
            />
        </>
    );
}

export default App;
