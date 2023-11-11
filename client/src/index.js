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
      localStorage.setItem("scenarioId", "654f124932fb98f9b81ccaf6");

      setTimeout(() => {
        window.instrumentation.start({
          serverUrl: "usability-session-vfqp.onrender.com",
          scenarioId: "654f124932fb98f9b81ccaf6",
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
