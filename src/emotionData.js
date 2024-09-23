const emotionData = {
  joy: [
    { 
      word: "Blissful", 
      definition: "A state of perfect happiness, where everything feels serene and wonderful, as if you're entirely free from worries or concerns." 
    },
    { 
      word: "Enthusiastic", 
      definition: "Feeling or showing an intense and eager enjoyment or interest in something, as though you're filled with energy and excitement about what's ahead." 
    },
    { 
      word: "Cheerful", 
      definition: "Feeling happy and optimistic, as though nothing can bring you down. You're smiling, upbeat, and in a positive mood." 
    },
    { 
      word: "Proud", 
      definition: "A deep feeling of satisfaction from achieving something important to you. It's a sense of personal accomplishment or even admiration for someone else's achievements." 
    },
    { 
      word: "Content", 
      definition: "A peaceful and quiet kind of happiness, where you're satisfied with the way things are. There's no need for anything more, and you're simply at ease." 
    },
    { 
      word: "Euphoric", 
      definition: "An intense feeling of happiness, as though you're on top of the world. Everything seems perfect, and you're overwhelmed with joy and excitement." 
    },
    { 
      word: "Triumphant", 
      definition: "Feeling a surge of pride and happiness after achieving something difficult or important. You've overcome a challenge, and now you're celebrating that victory." 
    }
  ],
  sadness: [
    { 
      word: "Disappointed", 
      definition: "Feeling let down because something or someone didn't meet your expectations. It's a sadness that comes from things not going the way you hoped." 
    },
    { 
      word: "Dismayed", 
      definition: "A combination of sadness and surprise, usually because something unexpected and negative has happened. You feel shocked and discouraged at the same time." 
    },
    { 
      word: "Disillusioned", 
      definition: "When you've lost faith or belief in something you once valued or trusted, often after realizing it wasn't as good as you thought." 
    },
    { 
      word: "Neglected", 
      definition: "Feeling ignored or uncared for, as though your needs and emotions aren't being recognized by others. It's a sense of emotional abandonment." 
    },
    { 
      word: "Guilty", 
      definition: "A heavy feeling that comes from knowing you've done something wrong or hurtful. It's a form of sadness mixed with regret, because you wish you had acted differently." 
    },
    { 
      word: "Powerless", 
      definition: "A deep sadness that comes from feeling like you have no control over a situation. You're unable to change or influence what’s happening around you." 
    },
    { 
      word: "Isolated", 
      definition: "Feeling cut off or detached from others, as though you're all alone emotionally. This can happen even when you're surrounded by people if you're not connecting with them." 
    }
  ],
  anger: [
    { 
      word: "Agitated", 
      definition: "Feeling nervous or on edge, often because something is bothering you or making you anxious. You're upset but not sure how to calm down." 
    },
    { 
      word: "Annoyed", 
      definition: "A mild anger or irritation caused by something or someone. It’s a feeling that something small is getting on your nerves." 
    },
    { 
      word: "Irritable", 
      definition: "When you're easily annoyed or angered, and small things make you upset more quickly than usual." 
    },
    { 
      word: "Hostile", 
      definition: "An intense feeling of anger or dislike toward someone or something, often leading to aggressive or unfriendly behavior." 
    },
    { 
      word: "Frustrated", 
      definition: "Feeling upset or annoyed because you're being blocked or hindered from achieving something, even though you're trying hard." 
    },
    { 
      word: "Resentful", 
      definition: "A bitter feeling that comes from being treated unfairly. You're angry because you believe you deserved better treatment or recognition." 
    },
    { 
      word: "Contempt", 
      definition: "A strong feeling of disapproval toward someone or something you believe is beneath you, worthless, or deserving of scorn." 
    }
  ],
  fear: [
    { 
      word: "Insecure", 
      definition: "A feeling of uncertainty or anxiety about yourself or your abilities, often caused by comparing yourself to others or doubting your own worth." 
    },
    { 
      word: "Scared", 
      definition: "A general feeling of fear or being afraid, whether it's because of something real or imagined. It's the uneasy sense that something bad might happen." 
    },
    { 
      word: "Helpless", 
      definition: "Feeling like you have no power or ability to influence a situation, which can leave you vulnerable and afraid." 
    },
    { 
      word: "Frightened", 
      definition: "A stronger form of being scared, often triggered by a specific danger or threat, leaving you anxious or fearful." 
    },
    { 
      word: "Nervous", 
      definition: "Feeling uneasy or anxious, usually because you're worried about something that's about to happen or how something will turn out." 
    },
    { 
      word: "Terrified", 
      definition: "An extreme level of fear, where you're almost paralyzed by how scared you are. It's a deep and overwhelming fear of danger or harm." 
    },
    { 
      word: "Panic", 
      definition: "A sudden, uncontrollable fear that overwhelms your ability to think clearly. It often leads to hasty or irrational actions." 
    }
  ],
  surprise: [
    { 
      word: "Astonished", 
      definition: "Feeling amazed and surprised, often because something unexpected and impressive has happened." 
    },
    { 
      word: "Amazed", 
      definition: "Filled with wonder or overwhelming surprise, usually because something is both unexpected and impressive or extraordinary." 
    },
    { 
      word: "Stunned", 
      definition: "So surprised that you're momentarily unable to react. It often comes from hearing unexpected news that leaves you momentarily in shock." 
    },
    { 
      word: "Speechless", 
      definition: "Left without words due to shock, amazement, or intense emotions. You find it difficult to express what you're feeling because of the surprise." 
    },
    { 
      word: "Confused", 
      definition: "A state of bewilderment where you're unsure what to think or how to react to what's happening." 
    },
    { 
      word: "Overcome", 
      definition: "Feeling completely overwhelmed by an emotion, usually surprise or sadness, to the point that it’s hard to continue as normal." 
    },
    { 
      word: "Moved", 
      definition: "Being strongly touched or affected emotionally by something, often in a positive or sentimental way." 
    }
  ],
  love: [
    { 
      word: "Affectionate", 
      definition: "Showing feelings of love or fondness toward someone, often through physical touch or kind gestures." 
    },
    { 
      word: "Caring", 
      definition: "Displaying kindness, concern, or empathy toward others, often putting their needs and feelings before your own." 
    },
    { 
      word: "Infatuated", 
      definition: "Having an intense but often short-lived passion or admiration for someone, usually romantic in nature." 
    },
    { 
      word: "Romantic", 
      definition: "Involving or expressing love and affection, especially in a passionate or idealized way." 
    },
    { 
      word: "Compassionate", 
      definition: "Showing deep sympathy and concern for the suffering or misfortunes of others, often paired with a desire to help." 
    },
    { 
      word: "Sentimental", 
      definition: "Feeling tenderness, sadness, or nostalgia toward something or someone, often remembering fond memories." 
    },
    { 
      word: "Passionate", 
      definition: "Showing or expressing strong feelings or beliefs, especially related to love, affection, or deep care." 
    }
  ]
};

export default emotionData;
