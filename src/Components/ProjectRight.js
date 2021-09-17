import "./ProjectRight.css";
import Tag from "./Tag";
function ProjectRight(props) {
  return (
    <div className="Skew">
      <div className="Card">
        <div className="project-info">
          <h1>{props.title}</h1>
          <ul className="tags-right">
            {props.tags.map((tag) => (
              <li className="tag-right">
                <Tag className="tag-right" tag={tag.title} />
              </li>
            ))}
          </ul>
          <ul className="info-list">
            <li>
              <p>{props.paragraph}</p>
            </li>
          </ul>
        </div>
        <div className="project-info">
          <a href="#portfolio">
            <img className="project-image" src="images/MEnoBG.png" alt="ME" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectRight;
