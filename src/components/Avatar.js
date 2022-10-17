import React from "react";
import Part from "./Part";

function Avatar({
  body,
  eyes,
  hair,
  mouth,
  eyebrows,
  hat,
  glasses,
  clothing1,
  clothing2,
  clothing3,
}) {
  return (
    <div className="avatar">
      <Part
        path={`character/body/${body}.png`}
        top={170}
        zIndex={0}
        width={250}
      />
      <Part
        path={`character/eyes/${eyes}.png`}
        top={170}
        zIndex={1}
        width={250}
      />
      <Part
        path={`character/hair/${hair}.png`}
        top={170}
        zIndex={6}
        width={250}
      />
      <Part
        path={`character/mouths/${mouth}.png`}
        top={170}
        zIndex={4}
        width={250}
      />
      <Part
        path={`character/eyebrows/${eyebrows}.png`}
        top={170}
        zIndex={4}
        width={250}
      />
      <Part
        path={`character/accessories/hats/${hat}.png`}
        top={150}
        zIndex={7}
        width={250}
      />
      <Part
        path={`character/accessories/glasses/${glasses}.png`}
        top={170}
        zIndex={5}
        width={250}
      />
      <Part
        path={`character/clothes/layer_1/${clothing1}.png`}
        top={170}
        zIndex={2}
        width={250}
      />
      <Part
        path={`character/clothes/layer_2/${clothing2}.png`}
        top={170}
        zIndex={3}
        width={250}
      />
      <Part
        path={`character/clothes/layer_3/${clothing3}.png`}
        top={170}
        zIndex={4}
        width={250}
      />
    </div>
  );
}

export default Avatar;
