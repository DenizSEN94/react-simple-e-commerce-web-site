import PropTypes from 'prop-types';
import {Shirt1,Shirt2,Shirt3} from '../../assets';
import { FaStar } from "react-icons/fa";


const ProductsData = [
    {
      id: 1,
      img: Shirt1,
      title: "Casual Wear",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      img: Shirt2,
      title: "Printed shirt",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      img: Shirt3,
      title: "Women shirt",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];



const ProductsTop = ({handleOrderPopup}) => {
    return(
        <section id="product">


            <div className='container'>


                {/* Header Section */}
                <div className="text-left mb-24">
                <p data-aos="fade-up" className="text-sm text-primary">Top Rated Products For You</p>
                <h1 data-aos="fade-up" className="text-3xl font-bold">Best Products</h1>
                <p data-aos="fade-up" className="text-xs text-gray-400">
                    It has roots in a piece of classical. Latin literature from 45 BC, making it over 2000 years old.
                </p>
                </div>



                  {/* Body Section */}
                  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
                    {
                        ProductsData.map((item)=>(
                            <div key={item.id} data-aos="zoom-in" className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 max-w-[300px]'>
                               
                               
                                {/* Image Section */}
                                <div className='h-[100px]'>
                                    <img className='max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-125 duration-300 drop-shadow-md' src={item.img} alt={item.title} />
                                </div>


                                {/* Details Section */}
                                <div className='p-4 text-center'>
                                    {/* star rating */}
                                    <div className='w-full flex items-center justify-center gap-1'>
                                        <FaStar className='text-yellow-500' />
                                        <FaStar className='text-yellow-500' />
                                        <FaStar className='text-yellow-500' />
                                        <FaStar className='text-yellow-500' />
                                    </div>
                                    <h1 className='text-xl font-semibold'>{item.title}</h1>
                                    <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{item.description}</p>
                                    <button className='bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary' 
                                    onClick={()=>handleOrderPopup()}
                                    >
                                        Order Now
                                    </button>
                                </div>


                            </div>
                        ))
                    }
                 </div>


            </div>


        </section>
    );
};


ProductsTop.propTypes ={
    handleOrderPopup: PropTypes.func.isRequired
  };

  
export default ProductsTop;
