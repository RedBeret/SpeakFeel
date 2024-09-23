import React from 'react';
import './EmojiSelector.css';

const EmojiSelector = ({ label, emoji, onClick, isSelected }) => {
  return (
    <div className={`emoji ${isSelected ? 'selected' : ''}`} onClick={onClick}>
      <span role="img" aria-label={label} className="emoji-icon">
        {emoji}
      </span>
      <p className="emoji-label">{label}</p>
    </div>
  );
};

export default EmojiSelector;
