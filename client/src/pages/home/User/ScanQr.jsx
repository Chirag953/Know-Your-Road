
import React, { useState } from "react";
import { useZxing } from "react-zxing";
import { useNavigate } from "react-router-dom";

export default function QRScannerPage() {
  const [result, setResult] = useState("");
  const navigate = useNavigate();

  const { ref } = useZxing({
    onDecodeResult(decodedResult) { //runs every time a QR code is detected
      const text = decodedResult.getText();//gives the text from QR
      setResult(text);//stores the scanned text

      try {
        const url = new URL(text); // parse QR content as a URL
        const appDomain = window.location.origin; // current app domain

        if (url.origin === appDomain && url.pathname.startsWith("/public/get-road")) {
          // Navigate inside the app (e.g. /public/get-road/123)
          navigate(url.pathname + url.search);
        } else {
          // External link → open in browser
          window.location.href = text;
        }
      } catch (err) {
        alert("Invalid QR code");
      }
    },
  });

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-xl font-bold mb-4">Scan Road QR</h1>
      <video ref={ref} className="w-[400px] rounded-lg shadow-lg" />
      {result && (
        <p className="mt-4 text-sm text-gray-600">Scanned: {result}</p>
      )}
    </div>
  );
}
