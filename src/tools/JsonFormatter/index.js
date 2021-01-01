import React, { useState, useEffect, useRef } from "react";
import "@/css/prism.css";
import Prism from "prismjs";

export function JsonFormatter() {
  const [uglyJSON, setUglyJSON] = useState("");
  const [prettyJSON, setPrettyJSON] = useState("");
  const [errorMessage, setErrorMessage] = useState("holder");
  const codeElement = useRef(null);

  useEffect(() => {
    if (codeElement.current) {
      Prism.highlightElement(codeElement.current);
    }
  }, [prettyJSON]);

  const formatJSON = (json) => {
    setUglyJSON(json);
    try {
      setPrettyJSON(JSON.stringify(JSON.parse(json), null, 2));
      setErrorMessage("");
    } catch (e) {
      setErrorMessage(String(e));
    }
  };

  const exampleJSON = `{
  "example": "I am pretty."
}`;

  return (
    <div id="jsonFormatter">
      <h1 className="text-2xl my-5 font-bold text-gray-900">JSON Formatter</h1>

      <div className="my-4 grid gap-4 grid-cols-2 grid-rows-1">
        <div>
          <div className="mt-1 relative rounded-md shadow-sm">
            <textarea
              className="appearance-none  block w-full sm:text-sm  rounded-md focus:border-blue-500 focus:ring-blue-500 border-gray-300"
              rows="23"
              placeholder="Paste ugly JSON here"
              spellCheck="false"
              value={uglyJSON}
              onChange={(e) => formatJSON(e.target.value)}
            ></textarea>
          </div>
        </div>

        <div>
          <div className="mt-1 relative rounded-md shadow-sm">
            {errorMessage === "" && (
              <div
                className="overflow-auto rounded-md bg-gray-800 prism-highlight"
                style={{ height: "478px" }}
              >
                <pre className="p-6 text-sm leading-snug text-white">
                  <code className="language-javascript" ref={codeElement}>
                    {prettyJSON}
                  </code>
                </pre>
              </div>
            )}
            {errorMessage !== "" && (
              <div
                className="rounded-md bg-gray-800 p-6 text-sm leading-snug text-white"
                style={{ height: "478px" }}
              >
                {errorMessage === "holder" && (
                  <pre>
                    <code className="language-javascript" ref={codeElement}>
                      {exampleJSON}
                    </code>
                  </pre>
                )}
                {errorMessage !== "holder" && errorMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
