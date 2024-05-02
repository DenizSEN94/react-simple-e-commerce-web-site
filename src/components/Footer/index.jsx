import {FooterPattern,Logo} from "../../assets";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${FooterPattern})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
    return(
        <section className="text-white mb-20" style={BannerImg}>



            <div className="container">


                <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
                  {/* company Details */}
                  <div className="py-8 px-4">
                    <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                      <img className="max-w-[50px]" src={Logo} alt="Logo" />
                      Shopsy</h1>
                    <p className="leading-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500.</p>
                  </div>



                  {/* Footer Links */}
                  <div className="grid sm:grid-cols-3 grid-cols-2 col-span-2 md:pl-10">
                    <div>
                      <div className="py-8 px-4">
                        <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">Impotant Links</h1>
                        <ul className="flex flex-col gap-3">
                          {
                            FooterLinks.map((item,i)=>(
                              <li key={i} className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-300">
                                <span>{item.title}</span>
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                    </div>
                    <div>
                      <div className="py-8 px-4">
                        <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">Links</h1>
                        <ul className="flex flex-col gap-3">
                          {
                            FooterLinks.map((item,i)=>(
                              <li key={i} className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-300">
                                <span>{item.title}</span>
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                    </div>
                    {/* Social Links */}
                    <div>
                        <div className="flex items-center gap-3 mt-10">
                          <a href="#">
                            <FaInstagram className="text-3xl" />
                          </a>
                          <a href="#">
                            <FaFacebook className="text-3xl" />
                          </a>
                          <a href="#">
                            <FaLinkedin className="text-3xl" />
                          </a>
                        </div>
                        <div className="mt-6">
                            <div className="flex items-center gap-3">
                                <FaLocationArrow />
                                <p>Lorem Ipsum is simply dummy text.</p>
                            </div>
                            <div className="flex items-center gap-3 mt-6">
                                <FaMobileAlt />
                                <p>Lorem Ipsum is simply dummy text.</p>
                            </div>
                        </div>
                    </div>
                  </div>


                </div>


            </div>



        </section>
    );
};
export default Footer;
