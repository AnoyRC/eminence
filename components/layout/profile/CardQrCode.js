"use client";
import React, { useRef, useEffect } from "react";

const QRCodeGenerator = ({ route }) => {
  const ref = useRef(null);

  useEffect(() => {
    // Check if we are in the browser environment before using the QRCodeStyling library
    if (typeof window !== "undefined") {
      import("qr-code-styling").then(({ default: QRCodeStyling }) => {
        const qrCode = new QRCodeStyling({
          width: 120,
          height: 120,
          type: "svg",
          image: "/images/logo.png",
          shape: "rounded",
          dotsOptions: {
            color: "#6CCBB9",
            type: "rounded",
          },
          backgroundOptions: {
            color: "transparent",
          },
          cornersSquareOptions: {
            type: "extra-rounded",
          },
        });

        qrCode.update({
          data: route,
        });

        qrCode.append(ref.current);
      });
    }
  }, [route]);

  return <div ref={ref} />;
};

export default QRCodeGenerator;
