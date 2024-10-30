// src/App.tsx
import React from "react";
import Button from "./components/Button";

const App: React.FC = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Hello, Tailwind + TSX!</h1>
        <Button label="Click me" onClick={handleClick} />
      </div>
    </div>
  );
};

export default App;
