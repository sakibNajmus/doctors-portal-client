import React from 'react';
import './Testimonial.css'
import patient1 from '../../../resources/images/patient (1).png'
import patient2 from '../../../resources/images/patient (2).png'
import patient3 from '../../../resources/images/patient (3).png'
import PatientTestimonial from '../PatientTestimonial/PatientTestimonial';

const testimonialData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Wilson Harry',
        from : 'California',
        img : patient1
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Ema Gomez',
        from : 'California',
        img : patient2
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Aliza Farari',
        from : 'California',
        img : patient3
    }
]

const Testimonial = () => {
    return (
        <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header">
                   <h5 className="text-primary text-uppercase">Testimonial</h5>
                   <h1>What Our Patients <br/> Says </h1>
               </div>
               <div className="card-deck mt-5">
                    {
                        testimonialData.map(testimonial => <PatientTestimonial testimonial={testimonial} key={testimonial.name}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonial;