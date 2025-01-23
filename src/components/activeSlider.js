import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const stories = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/30321918/pexels-photo-30321918/free-photo-of-elegant-vase-with-floral-arrangement-on-table.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    name: "Jhon Doe",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/6117187/pexels-photo-6117187.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    name: "Jhon Doe",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/29803460/pexels-photo-29803460/free-photo-of-charming-slovak-church-amidst-scenic-mountains.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    name: "Jhon Doe",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/10600697/pexels-photo-10600697.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    name: "Jhon Doe",
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/6437715/pexels-photo-6437715.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    name: "Jhon Doe",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/29934030/pexels-photo-29934030/free-photo-of-serene-yoga-session-in-the-lotus-fields-of-h-i-an.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    name: "Jhon Doe",
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/29463224/pexels-photo-29463224/free-photo-of-purple-neon-sign-with-inspirational-quote.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    name: "Jhon Doe",
  },
  {
    id: 8,
    img: "https://images.pexels.com/photos/29942641/pexels-photo-29942641/free-photo-of-charming-cottage-with-vibrant-bougainvillea.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    name: "Jhon Doe",
  },
  {
    id: 9,
    img: "https://images.pexels.com/photos/30183859/pexels-photo-30183859/free-photo-of-minimalist-interior-with-wooden-furniture.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    name: "Jhon Doe",
  },
  {
    id: 10,
    img: "https://images.pexels.com/photos/29204314/pexels-photo-29204314/free-photo-of-modern-city-architecture-against-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    name: "Jhon Doe",
  },
];

const ActiveSlider = () => {
  const slideLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 400;
  };
  const slideRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 400;
  };

  return (
    <div className="relative flex items-center  md:mx-20 my-1 ">
      <div
        id="slider"
        className="w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-none rounded-lg"
      >
        
        {stories.map((item) => (
          <div
            key={item.id}
            className="inline-block ease-in-out duration-300  mr-2"
          >
            <img src={item.img} alt="" className="w-[120px] h-[180px] rounded-lg" />
            <span className="text-white">{stories.name}</span>
          </div>
        ))}
      </div>
      <div className="absolute hidden sm:flex items-center justify-between w-[calc(100%-20px)] mx-[10px]">
        <ArrowBackIosOutlinedIcon
          fontSize="large"
          onClick={slideLeft}
          className="text-grey-200 cursor-pointer bg-grey-600 rounded-full p-2"
        />
        <ArrowForwardIosOutlinedIcon
          fontSize="large"
          onClick={slideRight}
          className="text-grey-200 cursor-pointer bg-grey-600 rounded-full p-2"
        />
      </div>
    </div>
  );
};
export default ActiveSlider;
