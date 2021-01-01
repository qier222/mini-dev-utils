import React, { useState } from "react";
import clsx from "clsx";
import QRCode from "qrcode";

export function QRCodeGenerator() {
  const [text, setText] = useState("");
  const [image, setImage] = useState("");

  const generateQR = async (text) => {
    setText(text);
    try {
      setImage(
        await QRCode.toDataURL(text, {
          scale: 8,
        })
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div id="qrCodeGenerator">
      <h1 className="text-2xl my-5 font-bold text-gray-900">
        QR Code Generator
      </h1>

      <div className="my-4 grid gap-4 grid-cols-5 grid-rows-1">
        <div className="col-span-3">
          <div className="mt-1 relative rounded-md shadow-sm">
            <textarea
              className="appearance-none h-full  block w-full sm:text-sm  rounded-md focus:border-blue-500 focus:ring-blue-500 border-gray-300"
              rows="8"
              placeholder="Paste text or URL here"
              spellCheck="false"
              value={text}
              onChange={(e) => generateQR(e.target.value)}
            ></textarea>
          </div>
        </div>

        <div className="mt-1 relative rounded-md col-span-2">
          <img src={image} />
        </div>
      </div>
    </div>
  );
}
