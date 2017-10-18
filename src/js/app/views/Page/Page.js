// import vendors
import React from 'react';
import i18next from 'i18next-client';

// import classes
import Home from '../../components/Home';
import Skills from '../../components/Skills';
import Projects from '../../components/Projects';
import Testimonials from '../../components/Testimonials';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import { scrollIt } from '../../utils/animate';

// import styles
import styles from './styles';


class Page extends React.Component {

  //________________________________________________________
  // -                                           CONSTRUCTOR
  constructor(props) {
    super(props);
  }

  //________________________________________________________
  // -                                       PRIVATE METHODS

  _onClickAvailable = (e) => {
    e.preventDefault();

    scrollIt(document.getElementById('contact'), 600, 'easeInOutQuad');

    return false;
  }

  //________________________________________________________
  // -                                        PUBLIC METHODS
  render() {
    return (
      <div className={styles.page}>
        <Home onClick={this._onClickAvailable} />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact id="contact" />
        <Footer />
      </div>
    );
  }

}
export default Page;
