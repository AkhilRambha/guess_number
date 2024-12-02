import React, { useState } from "react";
import "./App.css";

let targetNumber = Math.floor(Math.random() * 20) + 1; // Random number between 1 and 20
let maxScore = 10;

function App() {
  const [score, setScore] = useState(maxScore);
  const [userNumber, setUserNumber] = useState("");
  const [isWinner, setIsWinner] = useState(false);
  const [isLoserModalOpen, setIsLoserModalOpen] = useState(false);

  const [message, setMessage] = useState("");

  const handleGuess = () => {
    if (parseInt(userNumber) === targetNumber) {
      setMessage("Hurray! You won the game 🎉");
      setIsWinner(true); // Trigger winner modal
    } else if (parseInt(userNumber) > targetNumber) {
      setMessage("Enter a smaller number!");
      setScore((prev) => (prev > 0 ? prev - 2 : 0));
    } else if (score === 0) {
      setIsLoserModalOpen(true); // Open the loser modal
      score = 10; // Reset the score (if desired)
    }
    else {
      setMessage("Enter a larger number!");
      setScore((prev) => (prev > 0 ? prev - 2 : 0));
    }
  };

  const closeWinnerModal = () => {
    setIsWinner(false); // Close the modal
    setIsLoserModalOpen(false);
    setScore(maxScore); // Reset the game
    setUserNumber("");
    targetNumber = Math.floor(Math.random() * 20) + 1; // Generate new target number
  };

  return (
    <div className="App">
      <h1>Guess the Number</h1>
      <p>Enter a number between 1 and 20:</p>
      <input
        type="number"
        value={userNumber}
        onChange={(e) => setUserNumber(e.target.value)}
        placeholder="Your guess"
        style={{ padding: "10px", fontSize: "16px", marginBottom: "10px" }}
      />
      <button
        onClick={handleGuess}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#333",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginLeft: "10px",
        }}
      >
        Check
      </button>
      <p style={{ marginTop: "10px", color: score === 0 ? "red" : "black" }}>
        {message}
      </p>
      <p>Score: {score}</p>


      {isLoserModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={() => setIsLoserModalOpen(false)}>
              &times;
            </span>
            <h2>Oh no! You lost the game 😢</h2>
            <p>Better luck next time!</p>
            <button
              onClick={closeWinnerModal}
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                backgroundColor: "#28a745",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              Play Again
            </button>
          </div>
        </div>
      )}

     
      {isWinner && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeWinnerModal}>
              &times;
            </span>
            <h2>🎉 Hurray, You Won! 🎉</h2>
            <p>The number was {targetNumber}.</p>
            <button
              onClick={closeWinnerModal}
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                backgroundColor: "#28a745",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
