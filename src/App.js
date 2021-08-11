import { GetData } from "./utils/getData";
import {InfoApi} from "./utils/InfoApi"

function App() {
  GetData();
  InfoApi();
  return (
    <div className="App">
      hola
    </div>
  );
}

export default App;
