import { useEffect, useState } from 'react';
import {
  Navbar,
  Hero,
  Product,
  ProductsTop,
  Banner,
  Subscribe,
  Testimonials,
  Footer,
  PopUp,
} from './components';
import AOS from 'aos'; //! Animation Packed
import 'aos/dist/aos.css'; //! Animation Packed


const handleScroll = (e) => {
  //! Fare tekerleği hareketinin hızını artırmak için bir katsayı tanımlayın
  const scrollSpeed = 3; //! İstediğiniz hızı ayarlayabilirsiniz

  //! Sayfayı belirli bir miktar kaydır
  window.scrollBy({
    top: e.deltaY * scrollSpeed, //! Fare tekerleği hareketi miktarı * scrollSpeed
    left: 0,
    behavior: 'smooth',
  });
};


const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    //! Kaydırma işlevini eklemek için
    window.addEventListener('wheel', handleScroll);

    
    //! Temizleme işlevi: bileşen kaldırıldığında olayı kaldır
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

 
  return (
    <div className="bg-white dark:bg-gray-950 dark:text-white duration-300">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Product handleOrderPopup={handleOrderPopup} />
      <ProductsTop handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Subscribe />
      <Product handleOrderPopup={handleOrderPopup} />
      <Testimonials />
      <Footer />
      <PopUp orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default App;
