// import vendors
import React from 'react';

// import styles
import styles from './styles';


class Button extends React.Component {

  //________________________________________________________
  // -                                        PUBLIC METHODS
  shouldComponentUpdate () {
    return false;
  }


  render () {
    return <a {...this.props} className={[styles.btn, 'btn'].join(' ')}>{this.props.children}</a>;
  }

}
export default Button;
