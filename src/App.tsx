import "./App.css";
import { SettingsTemplate } from "./components/SettingsTemplate";

function App() {
    return (
        <SettingsTemplate
            title="Test Settings"
            toggles={[
                { name: "toggle1", id: "toggle1id" },
                { name: "toggle2", id: "toggle2id" },
            ]}
            inputs={[
                {
                    name: "Input 1 Name",
                    id: "inputid",
                    placeholder: "Placeholder",
                },
                {
                    name: "Input 2 Name",
                    id: "inputid2",
                    placeholder: "Placeholder 2",
                },
            ]}
        />
    );
}

export default App;
