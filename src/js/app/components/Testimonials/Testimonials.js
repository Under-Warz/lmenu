// import vendors
import React from 'react';
import i18next from 'i18next';

// import styles
import styles from './styles';


class Testimonials extends React.Component {

  //________________________________________________________
  // -                                       PRIVATE METHODS

  _renderTestimonials = () => {
    return i18next.t('testimonials', { returnObjects: true }).map((testimonial, index) => {
      return <div key={index} className="testimonial">
        <blockquote>“{testimonial.message}“</blockquote>
        <div className="meta">
          <span className="thumb">
            {testimonial.thumb == null && testimonial.initials}
          </span>
          <span className="function">{testimonial.function}</span>
        </div>
      </div>
    });
  }

  //________________________________________________________
  // -                                        PUBLIC METHODS
  shouldComponentUpdate () {
    return false;
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
