import Jupiter from "../assets/images/jupiter.png";
import Moon from "../assets/images/moon.png";
const Image = () => {
  return (
    <div>
      <img src={Jupiter} alt="jupiter" className="relative z-30" />
      <div>
        <img src={Moon} className="absolute top-0 left-8" />
      </div>
      <div>
        <img src={Moon} className="absolute bottom-0 right-0 z-40" />
      </div>
    </div>
  );
};

export default Image;
