import ReactDOM from "react-dom";
import { App } from "./renderer/App";
import "./renderer/index.css";

function render() {
  ReactDOM.render(<App />, document.getElementById("root"));
}

render();
