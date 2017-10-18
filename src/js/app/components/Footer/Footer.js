// import vendors
import React from 'react';
import i18next from 'i18next';

// import styles
import styles from './styles';


class Footer extends React.Component {

  //________________________________________________________
  // -                                       PRIVATE METHODS

  //________________________________________________________
  // -                                        PUBLIC METHODS
  shouldComponentUpdate () {
    return false;
  }


  render () {
    return (
      <footer className={styles.footer}>
        <div className="container">
          <i className="logo"></i>
          <p>{i18next.t('footer.copyright', { year: new Date().getFullYear() })}</p>
          <div className="actions">
            <a href="https://www.linkedin.com/in/laurentmenu/" target="_blank"><i className="icon icon-linkedin"></i></a>
            <a href="https://github.com/Under-Warz" target="_blank"><i className="icon icon-github"></i></a>
            <a href="https://www.hopwork.fr/profile/laurentmenu" target="_blank"><i className="icon icon-hopwork"></i></a>
          </div>
        </div>
      </footer>
    );
  }

}
export default Footer;
