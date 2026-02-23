// Adjectives for the first part of the ID
export const adjectives = [
  // Feelings
  "happy", "sad", "brave", "calm", "eager", "gentle", "kind", "proud", "witty", "zealous",
  
  // Colors
  "blue", "red", "green", "golden", "silver", "dark", "light", "wild", "mild", "warm",
  
  // Speed/Size
  "swift", "quiet", "loud", "bold", "bright", "cool", "epic", "grand", "holy", "nice",
  
  // Nature-inspired
  "cosmic", "solar", "lunar", "stellar", "atomic", "crystal", "velvet", "silent", "thunder", "shadow",
  
  // More fun ones
  "magic", "fierce", "mighty", "peaceful", "royal", "sacred", "ancient", "eternal", "golden", "silver"
];

// Nouns for the second part of the ID
export const nouns = [
  // Animals
  "tiger", "lion", "eagle", "wolf", "panda", "koala", "hawk", "fox", "bear", "deer",
  "dolphin", "whale", "shark", "raven", "owl", "phoenix", "dragon", "griffin", "unicorn", "pegasus",
  
  // Nature
  "ocean", "mountain", "river", "forest", "desert", "island", "cave", "valley", "peak", "reef",
  "waterfall", "volcano", "glacier", "meadow", "canyon", "planet", "comet", "nebula", "galaxy", "meteor",
  
  // Mythical
  "phoenix", "dragon", "griffin", "unicorn", "pegasus", "kraken", "leviathan", "sphinx", "cerberus", "hydra",
  "wyvern", "chimera", "golem", "siren", "minotaur", "cyclops", "titan", "nymph", "fairy", "elf",
  
  // Objects
  "star", "moon", "sun", "planet", "comet", "asteroid", "crystal", "diamond", "ruby", "emerald",
  "sword", "shield", "crown", "throne", "castle", "tower", "bridge", "gate", "portal", "key"
];

// Optional: Get random item from array helper
export const getRandomItem = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

// Generate a complete ID
export const generateMemorableId = () => {
  const adj = getRandomItem(adjectives);
  const noun = getRandomItem(nouns);
  const num = Math.floor(Math.random() * 900) + 100; // 100-999
  return `${adj}-${noun}-${num}`;
};