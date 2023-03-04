import "./Portfolio.css";
import { useState } from "react";
import ProjectLeft from "./ProjectLeft";
import ProjectRight from "./ProjectRight";

function Portfolio(props) {
  let itemList = [];
  const [toggles, newToggles] = useState({
    REACT: true,
    HTML: true,
    PYTHON: true,
  });

  function onClickButton(test) {
    const newList = { ...toggles };
    newList[test] = !newList[test];
    newToggles(newList);
    itemList = [];
    console.log(toggles);
  }

  let count = 0;
  for (let i = 0; i < props.projects.length; i++) {
    let cont = true;
    for (let j = 0; j < props.projects[i].tags.length; j++) {
      if (!toggles[props.projects[i].tags[j]["title"]]) {
        cont = false;
      }
    }

    if (!cont) {
      continue;
    }
    if (count % 2 === 0) {
      itemList.push(
        <ProjectRight
          title={props.projects[i].title}
          image={props.projects[i].image}
          paragraph={props.projects[i].p1}
          tags={props.projects[i].tags}
        />
      );
    } else {
      itemList.push(
        <ProjectLeft
          title={props.projects[i].title}
          image={props.projects[i].image}
          paragraph={props.projects[i].p1}
          tags={props.projects[i].tags}
        />
      );
    }
    count++;
  }

  return (
    <div className="Portfolio-container" id="portfolio">
      <div className="filter-container">
        <button onClick={() => onClickButton("REACT")}> REACT</button>
        <button onClick={() => onClickButton("HTML")}> HTML</button>
        <button onClick={() => onClickButton("PYTHON")}> PYTHON</button>
      </div>
      <div>{itemList}</div>
    </div>
  );
}

export default Portfolio;
