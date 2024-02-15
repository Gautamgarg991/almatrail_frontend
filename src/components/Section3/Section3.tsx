import Carousel from "../Carousel/Carousel";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";

const data = [
  {
    name: "engineering",
    image: image1,
  },
  {
    name: "medical",
    image: image2,
  },
  {
    name: "finance",
    image: image3,
  },
  {
    name: "business",
    image: image4,
  },
  {
    name: "fashion",
    image: image5,
  },
  {
    name: "mass communication",
    image: image6,
  },
];

const Section3 = () => {
  return (
    <Carousel
      data={data}
      isAutoPlay={false}
      interval={2000}
      isNavigation={false}
      isPagination={false}
      noOfItemPerSlide={3}
      isLoop={false}
    />
  );
};

export default Section3;
