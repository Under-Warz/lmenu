// import vendors
import React from 'react';
import PropTypes from 'prop-types';

// import classes
import Button from '../Button';
import MouseScroll from '../MouseScroll';

// import styles
import styles from './styles';


class Home extends React.Component {

  //________________________________________________________
  // -                                            PROP TYPES
  static propTypes = {
  };


  //________________________________________________________
  // -                                        PUBLIC METHODS
  shouldComponentUpdate () {
    return false;
  }


  render () {
    return (
      <section className={styles.home}>
        <div className="logo"><i className="icon icon-logo" /></div>

        <div className="v-align">
          <div className="m-align">
            <h1>Laurent Menu,</h1>
            <h2>développeur web & mobile</h2>
            <Button href="#">Oui, je suis disponible</Button>
          </div>
        </div>

        <div className="scroll">
          <p>En apprenez plus sur ce que je fais</p>
          <div className="mouse"><MouseScroll /></div>
        </div>
      </section>
    );
  }

}
export default Home;
