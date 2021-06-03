import React from "react";
import QRCode from "qrcode.react";
import BarcodeReader from "react-barcode-reader";

export default function QRCodeGenrator() {
  return (
    <div>
      <QRCode value={{ name: "test", age: "26" }} />
      <div></div>
    </div>
  );
}
