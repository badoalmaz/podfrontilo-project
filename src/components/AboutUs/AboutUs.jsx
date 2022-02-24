import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <header className="aboutUs">
        <div className="header-content">
          <h2>Explore The Kyrgyz Land</h2>
          <div className="line"></div>
          <h1>A WONDERFUL KYRGYZSTAN</h1>
          <a href="#" className="ctn">
            Find out more info below
          </a>
        </div>
      </header>
      {/* Events */}
      <section className="events">
        <div className="title">
          <h1>Upcoming Events</h1>
          <div className="line"></div>
        </div>
        <div id="content" className="row">
          <div className="col">
            <img
              src="https://sputnik.kg/img/103901/58/1039015809_337:0:2317:2178_1920x0_80_0_0_47adc68c33b22fec4abdacf07cdf7367.jpg"
              alt=""
            />
            <h4>4th World Nomad Games</h4>
            <p>
              The World Nomad Games are a sports and cultural event held in
              Cholpon-Ata, Kyrgyzstan, and they are an attempt to preserve and
              promote nomadic culture and traditions throughout Central Asia.
              This was only the second year the event was held, yet it featured
              23 sports and drew athletes from over 40 different countries.
            </p>
            <a
              href="https://24.kg/english/197406__Culture_Ministry_tells_about_4th_World_Nomad_Games_/"
              className="ctn"
              target="_blank"
            >
              Type to learn more
            </a>
          </div>
          <div className="col">
            <img
              src="https://vongrote.com/wp-content/uploads/2019/09/DSC00164.jpg"
              alt=""
            />
            <h4>History Museum</h4>
            <p>
              The Kyrgyz State History Museum is a museum located in Bishkek,
              Kyrgyzstan. The museum contains several exhibits about the
              cultural heritage of the Kyrgyz people, whose sculptures and
              objects date from antiquity to the end of the 20th century.[1] It
              is one of the most important museums in Central Asia
            </p>
            <a
              href="https://en.wikipedia.org/wiki/Kyrgyz_State_Historical_Museum"
              className="ctn"
              target="_blank"
            >
              Type to learn more
            </a>
          </div>
        </div>
      </section>

      <section className="explore">
        <div className="explore-content">
          <h1>Deep And Fresh Breeze</h1>
          <div className="line"></div>
          <p>
            Unleash your nature. Let the emotion take over you, here in
            Kyrgyzstan you can fell real freedom. You will be flushed with the
            happiness
          </p>
          <a href="#" className="ctn">
            Learn more below
          </a>
        </div>
      </section>

      <section className="rower">
        <div className="col content-col">
          <h1 className="colname">UNCOMING TOURS AND DESTINATIONS</h1>
          <div className="line"></div>
          <p>
            ENJOY TO OUR VIDEO, AND GET IN TOUCH WITH KYRGYZ NATURE TO FILL REAL
            AMAZING VIBE
          </p>
          <a href="#" className="ctn2">
            Learn more from the videos below
          </a>
        </div>
      </section>
      <section>
        <div className="col image-col">
          <div className="videos">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/OiVVKITz7oA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/fEuw4Hl04hU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/28WaOo7t3fY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/JyLfddbqqOs"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
