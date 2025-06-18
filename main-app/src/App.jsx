import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { SaltProvider, Button } from "@salt-ds/core";
import "@salt-ds/theme/index.css";

const MFEApp = React.lazy(() => import("mfe_app/App"));

export default function App() {
  return (
    <SaltProvider>
      <Router>
        <div style={{ padding: "20px" }}>
          <h1>Main App</h1>
          <nav>
            <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
            <Link to="/mfe">Load MFE</Link>
          </nav>
          <hr />
          <Button appearance="secondary">Main App Salt Button</Button>
          <Suspense fallback={<div>Loading MFE...</div>}>
            <Routes>
              <Route path="/" element={<div>Welcome to the Main App</div>} />
              <Route path="/mfe" element={<MFEApp />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </SaltProvider>
  );
}
