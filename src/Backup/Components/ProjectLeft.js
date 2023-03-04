import "./ProjectLeft.css";
import Tag from "./Tag";

function ProjectLeft(props) {
  return (
    <div className="SkewLeft">
      <div className="CardLeft">
        <div className="project-info">
          <a href="#portfolio">
            <img className="project-image" src="images/MEnoBG.png" alt="ME" />
          </a>
        </div>
        <div className="project-info">
          <h1>{props.title}</h1>
          <ul className="tags-left">
            {props.tags.map((tag) => (
              <li className="tag-left">
                <Tag tag={tag.title} />
              </li>
            ))}
          </ul>
          <ul className="info-list">
            <li>
              <p>{props.paragraph}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectLeft;
