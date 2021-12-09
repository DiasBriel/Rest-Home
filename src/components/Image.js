import Jupiter from "../assets/images/jupiter.png";
import Moon from "../assets/images/moon.png";
const Image = () => {
  return (
    <div className="relative flex justify-center">
      <div className="relative z-30 w-44 sm:w-80 md:w-96 lg:w-full">
        <img src={Jupiter} alt="jupiter" className="object-contain" />
      </div>
      <div className="w-10 md:w-24 lg:w-32 absolute top-0 left-1/3 lg:left-4">
        <img src={Moon} className="object-contain" />
      </div>
      <div className="w-10 md:w-24 lg:w-32 absolute bottom-0 right-1/3 lg:right-4 z-40">
        <img src={Moon} className="object-contain" />
      </div>
    </div>
  );
};

export default Image;
