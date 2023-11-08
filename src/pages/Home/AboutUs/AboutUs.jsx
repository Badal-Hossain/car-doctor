/* eslint-disable react/no-unescaped-entities */
import person from '../../../assets/assets/images/about_us/person.jpg'
import parts from '../../../assets/assets/images/about_us/parts.jpg'
const AboutUs = () => {
  return (
    <div>
      <div className="hero my-16">
        <div className="hero-content flex-col lg:flex-row">
            <div className='lg:w-1/2 relative'>
                <img
                src={person}
                className="w-3/4 rounded-lg shadow-2xl"
                />
                <img 
                src={parts}
                className='w-1/2 absolute right-10 top-1/2 border-8 rounded-md'
                />
            </div>         
            <div className='lg:w-1/2'>
                <p className='mb-2' style={{color:'rgb(1, 165, 192)'}}>About Us</p>
                <h1 className="text-5xl font-bold w-3/4">We are qualified & of experience in this field</h1>
                <p className="py-6">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                </p>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <button className="btn btn-outline btn-info mt-4">Get more info</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
