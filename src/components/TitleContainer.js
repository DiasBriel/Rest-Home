import Image from "./Image";
import Title from "./Title";

function TitleContainer() {
  return (
    <div className="grid grid-rows-2 lg:grid-cols-2 gap-8 mt-9 lg:mt-36 xl:mt-15vh lg:justify-items-end">
      <div className="lg:self-center text-center lg:text-left">
        <Title />
      </div>
      <div className="mx-12 relative row-start-1 lg:col-start-2">
        <Image />
      </div>
    </div>
  );
}

export default TitleContainer;
