import React from "react";
const MFEApp = React.lazy(() => import("mfe_app/App"));

export default function App() {
  return (
    <div>
      <h1>Main App</h1>
      <React.Suspense fallback={<div>Loading MFE...</div>}>
        <MFEApp />
      </React.Suspense>
    </div>
  );
}
