// import vendors
import React from 'react';
import i18next from 'i18next';

// import classes
import Button from '../Button';

// import styles
import styles from './styles';


class Contact extends React.Component {

  //________________________________________________________
  // -                                       PRIVATE METHODS

  _onClick = (e) => {
    // Track event
    ga('send', 'event', 'Contact', 'click', null);
  }

  //________________________________________________________
  // -                                        PUBLIC METHODS
  shouldComponentUpdate () {
    return false;
  }

  render () {
    return (
      <section {...this.props} className={styles.contact}>
        <div className="container">
          <h4>{i18next.t('contact.title')}</h4>
          <p>{i18next.t('contact.subtitle')}</p>
          <Button href="mailto:hello@lmenu.fr" onClick={this._onClick}>{i18next.t('contact.cta')}</Button>
        </div>
      </section>
    );
  }

}
export default Contact;
