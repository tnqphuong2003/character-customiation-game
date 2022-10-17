import React from "react";
import Part from "./Part";

function PartList({
  path,
  total,
  zoom = 1,
  top = "50%",
  selected,
  handleItemClick,
}) {
  const partList = [];
  for (let i = 1; i <= total; i++) {
    partList.push(
      <div
        className={
          selected === i ? "selected clickable square" : "clickable square"
        }
        onClick={() => handleItemClick(i)}
      >
        <Part
          path={`character/${path}/${i}.png`}
          height={60 * zoom}
          top={top}
        />
      </div>
    );
  }

  /*
{ total, path, set, selected, zoom = 1, top = '50%' }

  <div key={path + i} className={selected === i ? 'selected clickable square' : 'clickable square'} onClick={() => set(i)}>
		<img src={`character/${path}/${i + 1}.png`} alt="" height={60 * zoom} className="img-center" style={{ top }} />
	</div>
*/

  return <div class="list">{partList}</div>;
}

export default PartList;
