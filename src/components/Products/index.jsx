import PropTypes from 'prop-types';
import {Women1,Women2,Women3,Women4} from '../../assets';
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Women1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Women2,
    title: "Women western",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Women3,
    title: "Goggles",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Women4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Women2,
    title: "Fashin T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
];



const Product = ({handleOrderPopup}) => {
  return (
    <section id="product" className="mt-14 mb-12">





      <div className="container">







        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">Top Sellings Products For You</p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">Products</h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            It has roots in a piece of classical. Latin literature from 45 BC, making it over 2000 years old.
          </p>
        </div>






        {/* Body section */}
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
              {/* Card Section */}
              {
                ProductsData.map((item)=>(
                  <div data-aos="fade-up" data-aos-delay={item.aosDelay} className='space-y-3' key={item.id}>
                    <img className='h-[220px] w-[150px] object-cover rounded-md' src={item.img} alt={item.title} />
                    <div>
                      <h3 className='font-semibold'>{item.title}</h3>
                      <p className='text-sm text-gray-600'>{item.color}</p>
                      <div className='flex items-center gap-1'>
                        <FaStar className='text-yellow-400' />
                        <span>{item.rating}</span>
                      </div>
                    </div>
                  </div>
                ))
              }
          </div>



          {/* view all button */}
          <div className='flex justify-center'>
              <button 
                className='text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md'
                onClick={()=>handleOrderPopup()}
                >
                View All Button 
              </button>
          </div>




        </div>





      </div>




    </section>
  );
};

Product.propTypes ={
  handleOrderPopup: PropTypes.func.isRequired
};


export default Product;
