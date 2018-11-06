// import vendors
import React from 'react';
import ReactDOM from 'react-dom';
import i18next from 'i18next';
import 'gsap';

// import classes
import { offset } from '../../utils/animate';

// import styles
import styles from './styles';


class Loader extends React.Component {

  //________________________________________________________
  // -                                        PUBLIC METHODS

  componentWillUpdate(nextProps, nextState) {
    // Hide loader with animation
    if (this.props.willHide !== nextProps.willHide && nextProps.willHide) {
      const loader = ReactDOM.findDOMNode(this).getElementsByClassName('loader-container')[0];
      const loaderTxt = ReactDOM.findDOMNode(this).getElementsByTagName('p')[0];

      TweenMax.to(loader, 1, { y: -(offset(loader).top + loader.offsetHeight), ease: Expo.easeInOut });
      TweenMax.to(loaderTxt, 1, { y: -(offset(loaderTxt).top + loaderTxt.offsetHeight), delay: 0.1, ease: Expo.easeInOut, onComplete: () => {
        TweenMax.to(ReactDOM.findDOMNode(this), 1, { opacity: 0, ease: Expo.easeInOut, onComplete: () => {
          this.props.onHide();
        } });
      } });
    }
  }

  render () {
    return (
      <section className={[styles.loader].join(' ')}>
        <div className="v-align">
          <div className="m-align">
            <div className="loader-container"><i className="loader"></i></div>
            <p>{i18next.t('loading')}</p>
          </div>
        </div>
      </section>
    );
  }

}
export default Loader;
