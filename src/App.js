import { useState } from "react";
import "./styles.css";
var emojiDic = {
  "💣": "Bomb",
  "🐬": "Dolphin",
  "🪁": "Kite",
  "🔖": "Bookmark",
  "🐸": "Frog",
  "🔔": "Bell",
  "👽": "Alien",
  "☀️": "Sun",
  "🎸": "Guitar",
  "🐼": "Panda",
  "🎻": "Violin",
  "😴": "Sleeping",
  "👻": "Ghost",
  "🌈": "Rainbow",
  "🐒": "Monkey",
  "✨": "Sparkles",
  "🌹": "Rose",
  "🦋": "Butterfly",
  "🔥": "Fire",
  "🍁": "Maple Leaf",
  "📷": "Camera",
  "🎈": "Balloon"
};

var emoji = Object.keys(emojiDic);
console.log(emoji);
export default function App() {
  var [guessing, setGuessing] = useState("");

  function onchangeHandler(event) {
    var user = event.target.value;
    guessing = emojiDic[user];
    if (guessing === undefined) {
      guessing = "We dont have this emoji!!";
    }
    setGuessing(guessing);
  }

  function onClickEmoji(item) {
    guessing = emojiDic[item];
    console.log(guessing);
    setGuessing(guessing);
  }

  return (
    <div className="App">
      <h1>Emoji Guessing App</h1>
      <input onChange={onchangeHandler}></input>
      <h2>Click on Emoji or Enter Emoji</h2>
      <h2>{guessing}</h2>
      <div className="emoji">
        {emoji.map((item) => {
          return (
            <span key={item} onClick={() => onClickEmoji(item)}>
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
