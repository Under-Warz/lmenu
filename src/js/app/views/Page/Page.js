// import vendors
import React from 'react';
import createjs from 'preload-js';

// import classes
import Loader from '../../components/Loader';
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

    this.state = {
      showLoader: true,
      willHideLoader: false
    };
  }

  //________________________________________________________
  // -                                       PRIVATE METHODS

  _onClickAvailable = (e) => {
    e.preventDefault();

    scrollIt(document.getElementById('contact'), 600, 'easeInOutQuad');

    return false;
  }

  _handleFileComplete = (e) => {
    this.setState({
      willHideLoader: true
    });
  }

  //________________________________________________________
  // -                                        PUBLIC METHODS

  componentDidMount() {
    // Remove overlay
    setTimeout(() => {
      const overlay = document.getElementById('initOverlay');
      overlay.parentNode.removeChild(overlay);
    }, 0);

    let queue = new createjs.LoadQueue(false);
    queue.on("fileload", this._handleFileComplete);
    queue.loadManifest({
      src: "../../../../manifest.json",
      type: "manifest"
    });
  }

  render() {
    return (
      <div className={styles.page}>
        {this.state.showLoader && <Loader
          willHide={this.state.willHideLoader}
          onHide={() => this.setState({showLoader: false})} />}
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
