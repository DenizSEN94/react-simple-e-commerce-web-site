import { useState, useEffect } from 'react';
import { LightModeButton, DarkModeButton } from '../../assets';

const DarkMode = () => {
  const [theme, settheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  );

  //   console.log(element); -->  index.html Element Tag larını alabildik bu sayade.
  const element = document.documentElement;

  useEffect(() => {
    if (theme === 'dark') {
      element.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      element.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  return (
    <div className="relative">
      <img
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-500 absolute right-0 z-10 ${
          theme === 'dark' ? 'opacity-0' : 'opacity-100'
        }`}
        src={LightModeButton}
        alt="Icon Light"
        onClick={() => settheme(theme === 'light' ? 'dark' : 'light')}
      />
      <img
        className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-500"
        src={DarkModeButton}
        alt="Icon Dark"
        onClick={() => settheme(theme === 'light' ? 'dark' : 'light')}
      />
    </div>
  );
};
export default DarkMode;
