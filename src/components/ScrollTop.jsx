import React from "react";
export default function ScrollTop() {
  return (
    <button
      className="scrollTop"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      ↑
    </button>
  );
}
