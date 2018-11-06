// import vendors
import React from 'react';
import 'gsap';

// import styles
import styles from './styles';


class MouseScroll extends React.Component {

  //________________________________________________________
  // -                                        PUBLIC METHODS
  shouldComponentUpdate () {
    return false;
  }

  componentDidMount() {
    TweenMax.to(this.refs.arrow, 1, { y: '25%', force3D: true, repeat: -1, yoyo: true, ease: Expo.easeIn });
  }


  render () {
    return (
      <div className={styles.icon}>
        <i className="icon icon-mouse"></i>
        <i ref="arrow" className="icon icon-mouse-arrow"></i>
      </div>
    );
  }

}
export default MouseScroll;
