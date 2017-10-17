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

// import styles
import styles from './styles';


class Page extends React.Component {

  //________________________________________________________
  // -                                           CONSTRUCTOR
  constructor(props) {
    super(props);
  }


  //________________________________________________________
  // -                                        PUBLIC METHODS
  render() {
    return (
      <div className={styles.page}>
        <Home />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    );
  }

}
export default Page;
