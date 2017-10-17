// import vendors
import React from 'react';

// import classes

// import styles
import styles from './styles';


class CoreLayout extends React.Component {

  //________________________________________________________
  // -                                           CONSTRUCTOR
  constructor(props) {
    super(props);
  }


  //________________________________________________________
  // -                                        PUBLIC METHODS
  render() {
    return (
      <div className={styles.container}>
        {this.props.children}
      </div>
    );
  }

}
export default CoreLayout;
