// import vendors
import React from 'react';
import PropTypes from 'prop-types';

// import styles
import styles from './styles';


class Testimonials extends React.Component {

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
      <section className={styles.testimonials}>

      </section>
    );
  }

}
export default Testimonials;
