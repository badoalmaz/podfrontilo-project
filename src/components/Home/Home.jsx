// import { Container } from "@mui/material";
import React from "react";
import bgImag from "../../components/assets/video/backg.mp4";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "./Home.css";
import { Link } from "react-router-dom";
import { Box, Container, ImageList, ImageListItem } from "@mui/material";
import ornament from "../assets/images/orna.png";

const Home = () => {
  return (
    <>
      <div className="home">
        <video autoPlay loop muted>
          <source src={bgImag} type="video/mp4" />
        </video>
        <div className="text-wrapper">
          <h1>
            Travel with <br />
            <span
              className="text-wrapper-span"
              style={{
                color: "#e89417",
                fontSize: "80px",
                fontWeight: "bold",
              }}
            >
              Nomad's.kg
            </span>
            <br />
            in Kyrgyzstan
          </h1>
        </div>
      </div>

      <Container>
        <div className="content-text">
          <h3>Kyrgyzstan</h3>
          <p>
            The stunningly beautiful and pure nature of Kyrgyzstan is one of the
            main reasons why you should definitely visit this country.
            Mountains, which make up 94% of the area of ​Kyrgyzstan, offer many
            opportunities for hiking, hiking and outdoor recreation. From
            spacious valleys to high mountain glaciers, the traveler who finds
            himself in this unique part of Central Asia will discover an
            extraordinary variety of landscapes and natural attractions. The
            territory of Kyrgyzstan is dominated by the Tien Shan, a large
            mountain range that divides the country into northern and southern
            parts. The most densely populated parts of the country are the wide
            valleys around the mountains, such as the Chui Valley in the north
            and the Fergana Valley in the south. The largest cities of
            Kyrgyzstan, Bishkek and Osh, as well as most of the agricultural
            farms are located in these areas. From cities, it is within easy
            reach to many beautiful natural places: mountains, nature reserves,
            lakes or simply charming scenery along the road.
          </p>

          <Link to="/aboutus">
            <div className="content-iitem-icon">
              <span>Learn More</span>
              <ArrowRightAltIcon />
            </div>
          </Link>
        </div>
      </Container>
      <div className="header">
        <div className="ornament">
          <img src={ornament} alt="#" />
          <p>10 REASONS TO VISIT KYRGHYZSTAN</p>
        </div>

        <div className="imgs">
          <Box sx={{ width: 1050 }}>
            <ImageList variant="masonry" cols={3} gap={8}>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img src={item.img} alt="#" />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </div>
      </div>

      <div className="reasons">
        <h4>CELESTIAL MOUNTAIN SCENERY</h4>
        <h4>BREATHTAKING MOUNTAIN LAKES</h4>
        <h4>EXTREME SPORTS</h4>
        <h4>THE GREAT SILK ROAD</h4>
        <h4>ANTIQUITY AND SACRED PLACES</h4>
        <h4>THE MANAS EPOS</h4>
        <h4>NOMADIC CULTURE</h4>
        <h4>KYRGYZ HOSPITALITY</h4>
        <h4>ETHNIC CUISINE</h4>
        <h4>VISA-FREE REGIME</h4>
      </div>
    </>
  );
};
const itemData = [
  {
    img: "https://static.wixstatic.com/media/846d71_5a4f1315ee384add837ec35768797597~mv2_d_1920_1281_s_2.jpg/v1/fill/w_925,h_617,al_c,q_90/846d71_5a4f1315ee384add837ec35768797597~mv2_d_1920_1281_s_2.webp",
    title: "Bed",
  },
  {
    img: "https://static.wixstatic.com/media/846d71_dc153bb4b3a84f83aa813738d4d5201d~mv2_d_1920_1281_s_2.jpg/v1/fill/w_925,h_617,al_c,q_90/846d71_dc153bb4b3a84f83aa813738d4d5201d~mv2_d_1920_1281_s_2.webp",
    title: "Books",
  },
  {
    img: "https://static.wixstatic.com/media/846d71_93afdbe48582414b9ebd3b30580718a6~mv2_d_1920_1280_s_2.jpg/v1/fill/w_925,h_617,al_c,q_90/846d71_93afdbe48582414b9ebd3b30580718a6~mv2_d_1920_1280_s_2.webp",
    title: "Sink",
  },
  {
    img: "https://triptokyrgyzstan.com/sites/default/files/media/image/c_sergey_kalachov_9.jpg",
    title: "Kitchen",
  },
  {
    img: "https://static.wixstatic.com/media/846d71_a5dc9d03d8e143ba8155d604a3ecf57c~mv2_d_1920_1281_s_2.jpg/v1/fill/w_925,h_617,al_c,q_90/846d71_a5dc9d03d8e143ba8155d604a3ecf57c~mv2_d_1920_1281_s_2.webp",
    title: "Blinds",
  },
  {
    img: "https://www.remotelands.com/remotenew1/dist/images/itinerary/b201104003.jpg",
    title: "Chairs",
  },
  {
    img: "https://i.pinimg.com/originals/57/ba/8c/57ba8c777f7b38d5220942f95f4ca9aa.jpg",
    title: "Laptop",
  },
  {
    img: "https://static.wixstatic.com/media/846d71_9adaa3ff90aa4aa18752611d5fc708a6~mv2_d_1920_1281_s_2.jpg/v1/fill/w_925,h_617,al_c,q_90/846d71_9adaa3ff90aa4aa18752611d5fc708a6~mv2_d_1920_1281_s_2.webp",
    title: "Doors",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3lw2u3dhVaFJ5JAoiJ-MBFHKGaF0fnxDW5w&usqp=CAU",
    title: "Coffee",
  },
  {
    img: "https://kabar.kg/site/assets/files/102465/66.jpg",
    title: "Storage",
  },
  {
    img: "https://static.wixstatic.com/media/846d71_e5f62d98147e4976a30eedd8dedf008c~mv2_d_1920_1281_s_2.jpg/v1/fill/w_925,h_617,al_c,q_90/846d71_e5f62d98147e4976a30eedd8dedf008c~mv2_d_1920_1281_s_2.webp",
    title: "Candle",
  },
  {
    img: "https://i0.wp.com/roadsandkingdoms.com/uploads/2017/06/DSC_1369.jpg?ssl=1&w=635&quality=95&strip=color",
    title: "Coffee table",
  },
];

export default Home;
