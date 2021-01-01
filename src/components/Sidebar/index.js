import React, { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { paramCase } from "change-case";

export function Sidebar() {
  const [activeItem, setActiveItem] = useState("timestampConverter");

  const items = [
    // { key: "smartConverter", name: "Smart Converter" },
    { key: "timestampConverter", name: "Timestamp Converter" },
    // { key: "colorConverter", name: "Color Converter" },
    { key: "qrCodeGenerator", name: "QR Code Generator" },
    { key: "base64EncoderDecoder", name: "Base64 Encoder/Decoder" },
    { key: "jsonFormatter", name: "JSON Formatter" },
    { key: "caseConverter", name: "Case Converter" },
  ];

  function getClassNamesFor(item) {
    return clsx(
      "font-semibold text-sm font-medium transition-all duration-100 rounded-md py-2 px-3 cursor-pointer select-none my-2",
      {
        "text-gray-900 bg-gray-100": activeItem === item,
        "text-gray-600 hover:text-gray-900 hover:bg-gray-100":
          activeItem !== item,
      }
    );
  }

  return (
    <div
      id="sidebar"
      className="h-screen p-4 border-r overflow-auto"
      style={{ minWidth: "229px" }}
    >
      {items.map((item, index) => (
        <Link to={"/" + paramCase(item.key)} key={item.key}>
          <div
            className={getClassNamesFor(item.key)}
            onClick={() => setActiveItem(item.key)}
          >
            {item.name}
          </div>
        </Link>
      ))}
    </div>
  );
}
