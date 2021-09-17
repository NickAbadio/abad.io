import "./Portfolio.css";
import ProjectLeft from "./ProjectLeft";
import ProjectRight from "./ProjectRight";

function Portfolio(props) {
  let itemList = [];
  function onClickButton(test) {
    console.log(test);
  }

  for (let i = 0; i < props.projects.length; i++) {
    console.log(props.projects[i].title);
    if (i % 2 === 0) {
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
  }

  return (
    <div className="Portfolio-container" id="portfolio">
      <div className="filter-container">
        <button onClick={() => onClickButton(4)}> REACT</button>
      </div>
      <div>{itemList}</div>
    </div>
  );
}

export default Portfolio;
