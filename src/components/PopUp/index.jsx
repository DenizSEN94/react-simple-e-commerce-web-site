import PropTypes from 'prop-types';
import {IoCloseOutline} from 'react-icons/io5';



const PopUp = ({orderPopup,setOrderPopup}) => {
    return(
        <>
            {
                orderPopup && (
                    <div className='popup'>
                        <div className='h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm'>


                            <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-lg bg-white dark:bg-gray-900 dark:text-white rounded-md duration-300 w-[450px]'>

                                {/* Header */}
                                <div className='flex items-center justify-between'>
                                    <div>
                                       <h1>Order Now</h1>
                                    </div>
                                    <div className='flex justify-center items-center bg-gray-400 dark:bg-gray-200 shadow-xl w-[35px] h-[35px] rounded-full'>
                                        <IoCloseOutline className='text-3xl cursor-pointer text-white dark:text-black font-semibold' onClick={()=>setOrderPopup(false)} />
                                    </div>
                                </div>

                                {/* Form Section */}
                                <div className='mt-4'>
                                    <input className='w-full rounded-md transition-all duration-300 border border-black bg-gray-100 px-2 py-1 mb-4 focus:outline-none focus:border-1 focus:border-black dark:border-gray-500 dark:bg-gray-800' type="text" placeholder='Name' />
                                    <input className='w-full rounded-md transition-all duration-300 border border-black bg-gray-100 px-2 py-1 mb-4 focus:outline-none focus:border-1 focus:border-black dark:border-gray-500 dark:bg-gray-800' type="email" placeholder='Email' />
                                    <textarea cols="30" rows="10" style={{resize:"none"}} className='w-full rounded-md transition-all duration-300 border border-black bg-gray-100 px-2 py-1 mb-4 focus:outline-none focus:border-1 focus:border-black dark:border-gray-500 dark:bg-gray-800' placeholder='Address'></textarea>
                                    <div>
                                    <button 
                                    className='w-full text-center my-5 cursor-pointer bg-primary text-white py-2 rounded-md hover:bg-white hover:text-black outline outline-offset-2 outline-2 outline-[#fea928] duration-300'
                                    onClick={()=>setOrderPopup(false)}
                                    >
                                        Send
                                    </button>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                )
            }
        </>
    );
};

PopUp.propTypes ={
    orderPopup: PropTypes.any,
    setOrderPopup: PropTypes.any,
};


export default PopUp;
