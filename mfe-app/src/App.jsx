import React from "react";
import { SaltProvider, Button } from "@salt-ds/core";
import "@salt-ds/theme/index.css";

export default function App() {
  return (
    <SaltProvider>
      <div style={{ background: "lightblue", padding: "20px" }}>
        <h2>Hello from MFE App (Salt DS)</h2>
        <Button appearance="solid" sentiment="accented">
          Salt Button in MFE
        </Button>
      </div>
    </SaltProvider>
  );
}
