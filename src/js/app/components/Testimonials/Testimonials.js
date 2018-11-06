// import vendors
import React from 'react';
import i18next from 'i18next';

// import styles
import styles from './styles';


class Testimonials extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      active: 0
    };
  }

  //________________________________________________________
  // -                                       PRIVATE METHODS

  _renderTestimonials = () => {
    return i18next.t('testimonials', { returnObjects: true }).map((testimonial, index) => {
      return <div key={index} className={["testimonial", (index === this.state.active ? "active" : null)].join(' ')}>
        <blockquote>“{testimonial.message}“</blockquote>
        <div className="meta">
          <span className="thumb" style={testimonial.thumb ? { backgroundImage: 'url(' + testimonial.thumb + ')' } : { backgroundColor: testimonial.color }}>
            {testimonial.thumb == null && testimonial.initials}
          </span>
          <span className="function">{testimonial.function}</span>
        </div>
      </div>
    });
  }

  //________________________________________________________
  // -                                        PUBLIC METHODS
  componentDidMount() {
    const length = i18next.t('testimonials', { returnObjects: true }).length;

    // Start timer
    this.interval = setInterval(() => {
      if (this.state.active == length - 1) {
        this.setState({
          active: 0
        });
      }
      else {
        this.setState({
          active: this.state.active + 1
        });
      }
    }, 4000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  render () {
    return (
      <section className={styles.testimonials}>
        <div className="container">
          {this._renderTestimonials()}
        </div>
      </section>
    );
  }

}
export default Testimonials;
