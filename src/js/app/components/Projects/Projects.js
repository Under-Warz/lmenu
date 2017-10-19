// import vendors
import React from 'react';
import i18next from 'i18next';

// import classes
import Button from '../Button';

// import styles
import styles from './styles';


class Projects extends React.Component {

  //________________________________________________________
  // -                                       PRIVATE METHODS

  _renderProjects = () => {
    return i18next.t('projects.projects', { returnObjects: true }).map((project, index) => {
      return <div key={index} className="project">
        <div className="picture"><img src={require('assets/images/projects/' + project.image)} /></div>
        <div className="details">
          <h4>{project.name}</h4>
          <ul><li><span><i></i>{project.subtitle}</span></li></ul>
          <p>{project.description}</p>
          <Button href={project.link} target="_blank">{project.cta}</Button>
        </div>
      </div>;
    });
  }

  //________________________________________________________
  // -                                        PUBLIC METHODS
  shouldComponentUpdate () {
    return false;
  }


  render () {
    return (
      <section className={styles.projects}>
        <div className="container">
          <div className="section-title">
            <h3>{i18next.t('projects.title')}</h3>
            <p dangerouslySetInnerHTML={{__html: i18next.t('projects.subtitle')}} />
          </div>

          <div className="projects">
            {this._renderProjects()}
          </div>
        </div>
      </section>
    );
  }

}
export default Projects;
