import { CredentialsScreen } from "pages/CredentialsScreen/CredentialsScreen";
import "./styles/index.scss";
import { AdditionalInfoScreen } from "pages/AdditionalInfoScreen/AdditionalInfoScreen";
import { AppRouter } from "./providers/router";

function App() {
  return (
    <div className="App">
      <div className="form-frame">
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
