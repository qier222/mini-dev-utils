import React, { useState } from "react";
import clsx from "clsx";

export function Base64EncoderDecoder() {
  const [base64, setBase64] = useState("");
  const [text, setText] = useState("");
  const [focusTextarea, setFocusTextarea] = useState("");

  const convert = (to) => {
    if (to === "toBase64") {
      if (text === "") return;
      try {
        setBase64(btoa(text));
      } catch (e) {
        setBase64(String(e));
      }
    } else {
      if (base64 === "") return;
      try {
        setText(atob(base64));
      } catch (e) {
        setText(String(e));
      }
    }
  };

  const getClassNamesForButton = (button) => {
    return clsx("font-medium text-sm rounded px-6 py-2 mx-4", {
      "bg-gray-100 text-gray-500 focus:bg-blue-100 focus:text-blue-600":
        focusTextarea !== button && focusTextarea !== "",
      "bg-blue-100 text-blue-600": focusTextarea === button,
      "bg-gray-100 text-gray-900": focusTextarea === "",
    });
  };

  return (
    <div id="base64EncoderDecoder">
      <h1 className="text-2xl my-5 font-bold text-gray-900">
        Base64 Encoder / Decoder
      </h1>
      <div>
        <div className="my-4">
          <div className="w-full">
            <div className="mt-1 relative rounded-md shadow-sm">
              <textarea
                className="appearance-none  block w-full sm:text-sm  rounded-md focus:border-blue-500 focus:ring-blue-500 border-gray-300"
                rows="9"
                placeholder="Base64 String"
                spellCheck="false"
                value={base64}
                onChange={(e) => setBase64(e.target.value)}
                onFocus={() => setFocusTextarea("base64")}
                onBlur={() => setFocusTextarea("")}
              ></textarea>
            </div>
          </div>

          <div className="flex justify-center my-4">
            <button
              className={getClassNamesForButton("base64")}
              onClick={() => convert("toText")}
            >
              To Text ↓
            </button>
            <button
              className={getClassNamesForButton("text")}
              onClick={() => convert("toBase64")}
            >
              To Base64 ↑
            </button>
          </div>

          <div className="w-full">
            <div className="mt-1 relative rounded-md shadow-sm">
              <textarea
                className="appearance-none  block w-full sm:text-sm  rounded-md focus:border-blue-500 focus:ring-blue-500 border-gray-300"
                rows="9"
                placeholder="Text"
                spellCheck="false"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onFocus={() => setFocusTextarea("text")}
                onBlur={() => setFocusTextarea("")}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
