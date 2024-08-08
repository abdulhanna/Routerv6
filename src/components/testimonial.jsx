// // src/components/TestimonialSlider.js

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const testimonials = [
//   {
//     name: "Beseie Cooper",
//     role: "Web Designer",
//     feedback: "Loved the template design, documentation, customizability, and the customer support from Marketify team! I am a noob in programming with very little knowledge about coding.",
//     rating: 5,
//     image: "path-to-image1", // Replace with your image path
//   },
//   {
//     name: "Beseie Cooper",
//     role: "Web Designer",
//     feedback: "Loved the template design, documentation, customizability, and the customer support from Marketify team! I am a noob in programming with very little knowledge about coding.",
//     rating: 5,
//     image: "path-to-image2", // Replace with your image path
//   }
// ];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

const TestimonialSlider = () => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Clients Are Satisfied With Our Work, View Feedback</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex justify-center mb-4">
                  <img className="w-24 h-24 rounded-full" src={testimonial.image} alt={testimonial.name} />
                </div>
                <h3 className="text-xl font-semibold text-center">{testimonial.name}</h3>
                <p className="text-center text-gray-500">{testimonial.role}</p>
                <p className="text-center mt-4">{testimonial.feedback}</p>
                <div className="text-center mt-4">
                  {[...Array(testimonial.rating)].map((star, i) => (
                    <span key={i} className="text-yellow-500">&#9733;</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSlider;






const testimonials = [
  {
    name: "Beseie Cooper",
    role: "Web Designer",
    feedback: "Loved the template design, documentation, customizability, and the customer support from Marketify team! I am a noob in programming with very little knowledge about coding.",
    rating: 5,
    image: "path-to-image1", // Replace with your image path
  },
  {
    name: "Beseie Cooper",
    role: "Web Designer",
    feedback: "Loved the template design, documentation, customizability, and the customer support from Marketify team! I am a noob in programming with very little knowledge about coding.",
    rating: 5,
    image: "path-to-image2", // Replace with your image path
  }
];

const Testimonial = () => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Clients Are Satisfied For Our Work, View Feedback</h2>
        <div className="flex flex-wrap justify-center">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <img className="w-16 h-16 rounded-full mx-auto mb-4" src={testimonial.image} alt={testimonial.name} />
                <h3 className="text-xl font-semibold text-center">{testimonial.name}</h3>
                <p className="text-center text-gray-500">{testimonial.role}</p>
                <p className="text-center mt-4">{testimonial.feedback}</p>
                <div className="text-center mt-4">
                  {[...Array(testimonial.rating)].map((star, i) => (
                    <span key={i} className="text-yellow-500">&#9733;</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export  {Testimonial}
