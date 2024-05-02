import PropTypes from 'prop-types';
import { Sale, Shopping, WomenHero } from '../../assets';
import Slider from 'react-slick';


const ImageList = [
  {
    id: 1,
    img: Sale,
    title: "Upto 50% off on all Men's Wear",
    description:
      'lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    img: Shopping,
    title: "30% off on all Women's Wear",
    description:
      "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: WomenHero,
    title: '70% off on all Products Sale',
    description:
      'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];


const Hero = ({handleOrderPopup}) => {
   
    let settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
      };

  return (
    <section id='home' className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>




        {/* background pattern */}
      <div className='w-[700px] h-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'>

      </div>


      {/* hero section */}
      <div className='container pb-8 sm:pb-0'>

        {/* react-slick to Slider */}
        <Slider {...settings}>
        {
            ImageList.map((item)=>(
                <div key={item.id}>
                <div className='grid grid-cols-1 sm:grid-cols-2'>
    
    
                    {/* text content section */}
                    <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                        <h1 
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="100"
                        className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{item.title}</h1>
                        <p 
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="100"
                        className='text-sm'>
                            {item.description}
                        </p>
                        <div
                         data-aos="fade-up"
                         data-aos-duration="500"
                         data-aos-delay="300"
                        
                        >
                            <button 
                            
                              className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'
                              onClick={()=>handleOrderPopup()}
                              >
                                Order Now
                            </button>
                        </div>
                    </div>
    
    
    
                    {/* Image section */}
                    <div className='order-1 sm:order-2'>
                        <div 
                        
                          data-aos="zoom-in-left"
                          data-aos-once="true"
                          className="relative z-10"
                        
                        >
                            <img  className='w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] sm:scale-125 object-contain mx-auto lg:scale-120' src={item.img} alt="Images" />
                        </div>
                    </div>
    
    
    
                </div>
            </div>
            ))
        }
        

        </Slider>



      </div>






    </section>
  );
};


Hero.propTypes ={
  handleOrderPopup: PropTypes.func.isRequired
};


export default Hero;
