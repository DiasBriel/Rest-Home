import Image from "./Image";
import Title from "./Title";

function TitleContainer() {
  return (
    <div className="grid grid-cols-2 mt-40">
      <Title />
      <Image />
    </div>
  );
}

export default TitleContainer;
