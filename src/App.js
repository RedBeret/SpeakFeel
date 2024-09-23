import React, { useState } from 'react';
import EmojiSelector from './components/EmojiSelector';
import './App.css';
import emotionData from './emotionData'; 

function App() {
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [subMood, setSubMood] = useState(null); 

  const emojis = [
    { id: 1, label: "Joy", emoji: "😊", category: "joy" },
    { id: 2, label: "Sadness", emoji: "😢", category: "sadness" },
    { id: 3, label: "Anger", emoji: "😡", category: "anger" },
    { id: 4, label: "Fear", emoji: "😨", category: "fear" },
    { id: 5, label: "Surprise", emoji: "😮", category: "surprise" },
    { id: 6, label: "Love", emoji: "❤️", category: "love" }
  ];

  // Function to handle emoji selection
  const handleEmojiClick = (emoji) => {
    setSelectedEmotion(emoji.label);

    // Get the corresponding category from emotionData
    const moodCategory = emotionData[emoji.category];

    if (moodCategory) {
      // Select a random submood from the category
      const randomSubMood = moodCategory[Math.floor(Math.random() * moodCategory.length)];
      setSubMood(randomSubMood);
    }
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
      {selectedEmotion && (
        <div className="selection-text">
          <p>You selected: {selectedEmotion}</p>
          {subMood && (
            <p>
              Your random "{selectedEmotion}" submood is: <strong>{subMood.word}</strong> - {subMood.definition}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
