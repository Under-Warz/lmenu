// import vendors
import React from 'react';
import i18next from 'i18next';

// import styles
import styles from './styles';


class Skills extends React.Component {

  //________________________________________________________
  // -                                       PRIVATE METHODS

  _renderSkills = () => {
    return i18next.t('skills.skills', { returnObjects: true }).map((skill, index) => {
      return <div key={index} className="skill">
        <i className={["icon", skill.icon].join(' ')} />
        <h4>{skill.title}</h4>
        <p dangerouslySetInnerHTML={{__html: skill.text}} />
      </div>
    });
  }

  //________________________________________________________
  // -                                        PUBLIC METHODS
  shouldComponentUpdate () {
    return false;
  }


  render () {
    return (
      <section className={styles.skills}>
        <div className="container">
          <div className="section-title">
            <h3>{i18next.t('skills.title')}</h3>
            <p>{i18next.t('skills.subtitle')}</p>
          </div>

          <div className="skills">
            {this._renderSkills()}
          </div>
        </div>
      </section>
    );
  }

}
export default Skills;
