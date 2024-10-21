import { useState } from "react";
import randomValueFromArray from "./components/Random";

export default function App() {
    const [name, setName] = useState("Bob");
    function handleClick() {
        const inputName = prompt("名前を入力して下さい");
        setName(inputName);
    }

    const showStory = false;
    const xArray = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
    const xItem = randomValueFromArray(xArray);
    const yArray = ["the soup kitchen", "Disneyland", "the White House"];
    const yItem = randomValueFromArray(yArray);
    const zArray = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];
    const zItem = randomValueFromArray(zArray);
    const ukus = "us";
    return (
      <>
        <div>
          <label htmlFor="customname">Enter custom name:</label>
          <input type="text" placeholder="" />
        </div>
        <div>
          <label htmlFor="us">US</label>
          <input type="radio" value="us" checked={ukus === "us"} />
          <label htmlFor="uk">UK</label>
          <input type="radio" value="uk" checked={ukus === "uk"} />
        </div>
        <div>
          <button onClick={ handleClick }></button>
          <button>Generate random story</button>
        </div>
        {showStory && (
          <p>
            It was 94 fahrenheit outside, so {xItem} went for a walk. When they
            got to {yItem}, they stared in horror for a few moments, then {zItem}.
            Bob saw the whole thing, but was not surprised — {xItem} weighs 300
            pounds, and it was a hot day.
          </p>
        )}
      </>
    );
  }