// import vendors
import React from 'react';
import PropTypes from 'prop-types';

// import styles
import styles from './styles';


class Contact extends React.Component {

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
      <section className={styles.contact}>

      </section>
    );
  }

}
export default Contact;
