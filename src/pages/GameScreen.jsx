import React from "react";
import { useLocation } from "react-router-dom";

const GameScreen = () => {
  const location = useLocation();
  const difficulty = location.state?.difficulty || "Unknown";

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "2rem",
        padding: "1rem",
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(135deg, #ff6ec4, #7873f5, #42f5ef, #f5d142)",
        backgroundSize: "400% 400%",
        animation: "gradientAnimation 15s ease infinite",
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          textShadow: "3px 3px 8px rgba(0,0,0,0.6)",
          background: "linear-gradient(90deg, #ffb347, #ffcc33, #ff6ec4)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Game Page
      </h1>
      <p style={{ fontSize: "1.5rem", color: "#fff" }}>
        Selected Difficulty:{" "}
        <span style={{ fontWeight: "bold", color: "#ffd700" }}>{difficulty}</span>
      </p>

      {/* Gradient animation keyframes */}
      <style>
        {`
          @keyframes gradientAnimation {
            0% {background-position: 0% 50%;}
            50% {background-position: 100% 50%;}
            100% {background-position: 0% 50%;}
          }
        `}
      </style>
    </div>
  );
};

export default GameScreen;