import React, { useState } from 'react';
import EmojiSelector from './components/EmojiSelector';
import './App.css';

function App() {
  const [selectedEmotion, setSelectedEmotion] = useState(null);

  // List of emojis for the slider
  const emojis = [
    { id: 1, label: "Terrible", emoji: "😢" },
    { id: 2, label: "Bad", emoji: "😞" },
    { id: 3, label: "OK", emoji: "😐" },
    { id: 4, label: "Good", emoji: "😊" },
    { id: 5, label: "Awesome", emoji: "😁" }
  ];

  // Function to handle emoji selection
  const handleEmojiClick = (emoji) => {
    setSelectedEmotion(emoji.label);
  };

  return (
    <div className="App">
      <h1>How are you feeling today?</h1>
      <div className="emoji-slider">
        {emojis.map((emoji) => (
          <EmojiSelector
            key={emoji.id}
            label={emoji.label}
            emoji={emoji.emoji}
            onClick={() => handleEmojiClick(emoji)}
            isSelected={selectedEmotion === emoji.label}
          />
        ))}
      </div>
      {selectedEmotion && <p className="selection-text">You selected: {selectedEmotion}</p>}
    </div>
  );
}

export default App;
