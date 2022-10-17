import React, { useState, useEffect } from "react";
import "./App.css";
import Avatar from "./components/Avatar";
import PartList from "./components/PartList";

const total = {
  body: 17,
  eyes: 17,
  hair: 73,
  mouth: 24,
  eyebrows: 15,
  hat: 28,
  glasses: 17,
  clothing1: 5,
  clothing2: 5,
  clothing3: 9,
};
function App() {
  const [body, setBody] = useState(0);
  const [eyes, setEyes] = useState(0);
  const [hair, setHair] = useState(0);
  const [mouth, setMouth] = useState(0);
  const [eyebrows, setEyebrows] = useState(0);
  const [hat, setHat] = useState(0);
  const [glasses, setGlasses] = useState(0);
  const [clothing1, setClothing1] = useState(0);
  const [clothing2, setClothing2] = useState(0);
  const [clothing3, setClothing3] = useState(0);

  useEffect(() => {
    console.log("123");
    randomize();
  }, []);

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const randomize = () => {
    setBody(getRndInteger(1, total.body));
    setEyes(getRndInteger(1, total.eyes));
    setHair(getRndInteger(1, total.hair));
    setMouth(getRndInteger(1, total.mouth));
    setEyebrows(getRndInteger(1, total.eyebrows));
    setHat(getRndInteger(1, total.hat));
    setGlasses(getRndInteger(1, total.glasses));
    setClothing1(getRndInteger(1, total.clothing1));
    setClothing2(getRndInteger(1, total.clothing2));
    setClothing3(getRndInteger(1, total.clothing3));
  };

  return (
    <div class="container">
      <header>
        <h1>Character Customiation Game</h1>
      </header>
      <main>
        <div className="avatar-side">
          <div className="avatar-group">
            <Avatar
              body={body}
              eyes={eyes}
              hair={hair}
              mouth={mouth}
              eyebrows={eyebrows}
              hat={hat}
              glasses={glasses}
              clothing1={clothing1}
              clothing2={clothing2}
              clothing3={clothing3}
            />
            <div className="text-center">
              <button className="button" onClick={() => randomize()}>
                Randomize!
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="part-list">
            <div className="part">
              <h2 className="part-header">Body</h2>
              <PartList
                path="body"
                total={total.body}
                selected={body}
                handleItemClick={setBody}
              />
            </div>
            <div className="part">
              <h2 className="part-header">Eyes</h2>
              <PartList
                path="eyes"
                total={total.eyes}
                zoom={2.5}
                top={35}
                selected={eyes}
                handleItemClick={setEyes}
              />
            </div>
            <div className="part">
              <h2 className="part-header">Hair</h2>
              <PartList
                path="hair"
                total={total.hair}
                selected={hair}
                handleItemClick={setHair}
              />
            </div>
            <div className="part">
              <h2 className="part-header">Mouth</h2>
              <PartList
                path="mouths"
                total={total.mouth}
                selected={mouth}
                zoom={2}
                handleItemClick={setMouth}
              />
            </div>
            <div className="part">
              <h2 className="part-header">Eyebrows</h2>
              <PartList
                path="eyebrows"
                total={total.eyebrows}
                selected={eyebrows}
                handleItemClick={setEyebrows}
              />
            </div>
            <div className="part">
              <h2 className="part-header">Hat</h2>
              <PartList
                path="accessories/hats"
                total={total.hat}
                selected={hat}
                handleItemClick={setHat}
              />
            </div>
            <div className="part">
              <h2 className="part-header">Glasses</h2>
              <PartList
                path="accessories/glasses"
                total={total.glasses}
                selected={glasses}
                handleItemClick={setGlasses}
              />
            </div>
            <div className="part">
              <h2 className="part-header">Clothing1</h2>
              <PartList
                path="clothes/layer_1"
                total={total.clothing1}
                selected={clothing1}
                handleItemClick={setClothing1}
              />
            </div>
            <div className="part">
              <h2 className="part-header">Clothing2</h2>
              <PartList
                path="clothes/layer_2"
                total={total.clothing2}
                selected={clothing2}
                handleItemClick={setClothing2}
              />
            </div>
            <div className="part">
              <h2 className="part-header">Clothing3</h2>
              <PartList
                path="clothes/layer_3"
                total={total.clothing3}
                selected={clothing3}
                zoom={2}
                top={-15}
                handleItemClick={setClothing3}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
