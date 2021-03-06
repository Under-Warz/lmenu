// import vendors
import React from "react";
import i18next from "i18next";

// import classes
import Button from "../Button";

// import styles
import styles from "./styles";

class Projects extends React.Component {
  //________________________________________________________
  // -                                       PRIVATE METHODS

  _renderProjects = () => {
    return i18next
      .t("projects.projects", { returnObjects: true })
      .map((project, index) => {
        return (
          <div key={index} className="project">
            <div className="picture">
              <img
                src={require("assets/images/projects/" + project.image)}
                srcSet={
                  project.imageRetina
                    ? `${require("assets/images/projects/" +
                        project.imageRetina)} 2x`
                    : null
                }
              />
            </div>
            <div className="details">
              <h4>{project.name}</h4>
              <ul>
                <li>
                  <span>
                    <i />
                    {project.subtitle}
                  </span>
                </li>
              </ul>
              <p dangerouslySetInnerHTML={{ __html: project.description }} />
              {project.link && (
                <Button
                  href={project.link}
                  onClick={e => this._onClickProject(project.name)}
                  target="_blank"
                >
                  {project.cta}
                </Button>
              )}
            </div>
          </div>
        );
      });
  };

  _onClickProject = name => {
    // Track event
    ga("send", "event", "Projects", "click", name);
  };

  //________________________________________________________
  // -                                        PUBLIC METHODS
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <section className={styles.projects}>
        <div className="container">
          <div className="section-title">
            <h3>{i18next.t("projects.title")}</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: i18next.t("projects.subtitle")
              }}
            />
          </div>

          <div className="projects">{this._renderProjects()}</div>
        </div>
      </section>
    );
  }
}
export default Projects;
