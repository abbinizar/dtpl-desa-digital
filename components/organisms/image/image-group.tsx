import Image from "next/image";
import { getStatic } from "../../../helpers";

const ImageGroup = () => {
  const image = [
    "woman-hijab.png",
    "man-with-hat.png",
    "grandma.png",
    "man-with-glasses.png",
  ];
  return (
    <div className="space-x-2 flex">
      {image.map((e, i) => {
        return <Image key={i} src={getStatic(e)} width={150} height={150} />;
      })}
    </div>
  );
};

export default ImageGroup;
