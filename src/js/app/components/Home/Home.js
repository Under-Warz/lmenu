// import vendors
import React from 'react';
import i18next from 'i18next';

// import classes
import Button from '../Button';
import MouseScroll from '../MouseScroll';

// import styles
import styles from './styles';


class Home extends React.Component {

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
            <h1>{i18next.t('home.title')}</h1>
            <h2>{i18next.t('home.subtitle')}</h2>
            <Button href="#">{i18next.t('home.cta')}</Button>
          </div>
        </div>

        <div className="scroll">
          <p>{i18next.t('home.bottom')}</p>
          <div className="mouse"><MouseScroll /></div>
        </div>
      </section>
    );
  }

}
export default Home;
