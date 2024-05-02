import { OrangePattern } from '../../assets';

const BannerImg = {
  backgroundImage: `url(${OrangePattern})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '100%',
  width: '100%',
};

const Subscribe = () => {
  return (
    <section
      data-aos="zoom-in"
      className="bg-gray-100 mb-20 dark:bg-gray-800 text-white"
      style={BannerImg}
    >


      <div className='container backdrop-blur-sm py-10'>
        <div className='space-y-6 max-w-xl mx-auto'>
            <h1 className='text-2xl !text-center sm:text-left sm:text-4xl font-semibold dark:text-black'>Get Notified About New Products</h1>
            <input data-aos="fade-up" className='w-full p-3 text-black dark:text-white focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800' type="text" placeholder='Enter your email' />
        </div>
      </div>


    </section>
  );
};
export default Subscribe;
