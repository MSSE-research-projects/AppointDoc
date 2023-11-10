import "antd/dist/reset.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import store from "./redux/store";

class Root extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src =
      "https://usability-session-vfqp.onrender.com/static/plugin/instrumentation.js";

    script.addEventListener("load", () => {
      localStorage.setItem("scenarioId", "654eb43df76c4e08a6a45984");

      setTimeout(() => {
        window.instrumentation.start({
          serverUrl: "usability-session-vfqp.onrender.com",
          scenarioId: "654eb43df76c4e08a6a45984",
        });
      }, 3000);
    });

    document.head.appendChild(script);
  }
  render() {
    return (
      <Provider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Provider>
    );
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
