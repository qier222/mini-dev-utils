import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { Sidebar } from "./components/Sidebar";
import { TimestampConverter } from "@/tools/TimestampConverter";
import { Base64EncoderDecoder } from "@/tools/Base64EncoderDecoder";
import { JsonFormatter } from "@/tools/JsonFormatter";
import { CaseConverter } from "@/tools/CaseConverter";
import { QRCodeGenerator } from "@/tools/QRCodeGenerator";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="flex">
        <Sidebar />
        <div
          id="contentContainer"
          className="flex-grow px-8 h-screen overflow-auto"
        >
          <Switch>
            <Route path="/qr-code-generator">
              <QRCodeGenerator />
            </Route>
            <Route path="/case-converter">
              <CaseConverter />
            </Route>
            <Route path="/json-formatter">
              <JsonFormatter />
            </Route>
            <Route path="/base64-encoder-decoder">
              <Base64EncoderDecoder />
            </Route>
            <Route path="/timestamp-converter">
              <TimestampConverter />
            </Route>
            <Route path="/">
              <TimestampConverter />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
