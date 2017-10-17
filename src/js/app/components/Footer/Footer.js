// import vendors
import React from 'react';
import PropTypes from 'prop-types';

// import styles
import styles from './styles';


class Footer extends React.Component {

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
      <footer className={styles.footer}>

      </footer>
    );
  }

}
export default Footer;
