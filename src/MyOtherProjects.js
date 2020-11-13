import React from "react";
import "./MyOtherProjects.scss";

import asset1 from "./static/images/illustrator_pics/Asset 11@4x.png";
import asset2 from "./static/images/illustrator_pics/Asset 12@4x.png";

import cycler1Img1 from "./static/images/my-other-projects/Hue-saturation/Original.jpg";
import cycler1Img2 from "./static/images/my-other-projects/Hue-saturation/Beige shirt.jpg";
import cycler1Img3 from "./static/images/my-other-projects/Hue-saturation/PURPLE shirt.jpg";
import cycler1Img4 from "./static/images/my-other-projects/Hue-saturation/WHITE shirt.jpg";
import cycler1Img5 from "./static/images/my-other-projects/Hue-saturation/PISTACHIO shirt.jpg";

import cycler2Img1 from "./static/images/my-other-projects/turn-white-into-any-color/828.jpg";
import cycler2Img2 from "./static/images/my-other-projects/turn-white-into-any-color/BLACK Dress.jpg";
import cycler2Img3 from "./static/images/my-other-projects/turn-white-into-any-color/ROSE Dress.jpg";
import cycler2Img4 from "./static/images/my-other-projects/turn-white-into-any-color/BURGUNDY RED Dress.jpg";
import cycler2Img5 from "./static/images/my-other-projects/turn-white-into-any-color/DARK BLACK Dress.jpg";
import cycler2Img6 from "./static/images/my-other-projects/turn-white-into-any-color/GREEN Dress.jpg";
import cycler2Img7 from "./static/images/my-other-projects/turn-white-into-any-color/RED Dress.jpg";

import cycler3Img1 from "./static/images/my-other-projects/brush-tool-effects/woman-in-black-blazer-jacket-on-wooden-bench.jpg";
import cycler3Img2 from "./static/images/my-other-projects/brush-tool-effects/Final Portrait 1.jpg";
import cycler3Img3 from "./static/images/my-other-projects/brush-tool-effects/women-camera.jpg";
import cycler3Img4 from "./static/images/my-other-projects/brush-tool-effects/Final Portrait 2.jpg";

import cycler4Img1 from "./static/images/my-other-projects/Galaxy Logo Design from Face/Face.jpg";
import cycler4Img2 from "./static/images/my-other-projects/Galaxy Logo Design from Face/LOGO COMPLETED.png";
import cycler4Img3 from "./static/images/my-other-projects/Galaxy Logo Design from Face/Galaxy pic.jpg";

import CVImg1 from "./static/images/my-other-projects/Illustrator/CV Adnen P1.jpg";
import CVImg2 from "./static/images/my-other-projects/Illustrator/CV ALA MANSOURI EN 23-04-2020 Approuved.jpg";
import CVImg3 from "./static/images/my-other-projects/Illustrator/CV SLIMEN Karim.jpg";

function MyOtherProjects() {
  // Image cycler 1

  let iterator = 1;
  function cycler1() {
    // image
    document.querySelectorAll(`.cycler1 #Img${iterator}`).forEach((image) => {
      image.style.opacity = "0";
    });

    iterator++;
    if (iterator > 5) {
      iterator = 1;
      let i;
      // When all images are at opacity 0 turn it into 1 so we can loop through'em again
      for (i = 1; i < 6; i++) {
        document.querySelectorAll(`.cycler1 #Img${i}`).forEach((image) => {
          image.style.opacity = "1";
        });
      }
    }
  }

  setInterval(() => {
    cycler1();
  }, 2000);

  // Image cycler 2

  let iterator2 = 1;
  function cycler2() {
    // image
    document.querySelectorAll(`.cycler2 #Img${iterator2}`).forEach((image) => {
      image.style.opacity = "0";
    });

    iterator2++;
    if (iterator2 > 7) {
      iterator2 = 1;
      let i;
      // When all images are at opacity 0 turn it into 1 so we can loop through'em again
      for (i = 1; i < 8; i++) {
        let cycler2Test = document.querySelectorAll(`.cycler2 #Img${i}`).forEach((image) => {
          image.style.opacity = "1";
        });
        console.log(cycler2Test)
      }
      console.log('<<<<>>>>> ' + i)
    }
  }

  setInterval(() => {
    cycler2();
  }, 1000);

  // Image cycler 3

  let iterator3 = 1;
  function cycler3() {
    // image
    document.querySelectorAll(`.cycler3 #Img${iterator3}`).forEach((image) => {
      image.style.opacity = "0";
    });

    iterator3++;
    if (iterator3 > 4) {
      iterator3 = 1;
      let i;
      // When all images are at opacity 0 turn it into 1 so we can loop through'em again
      for (i = 1; i < 5; i++) {
        document.querySelectorAll(`.cycler3 #Img${i}`).forEach((image) => {
          image.style.opacity = "1";
        });
      }
    }
  }

  setInterval(() => {
    cycler3();
  }, 3800);

  // Image cycler 4

  let iterator4 = 1;
  function cycler4() {
    // image
    document.querySelectorAll(`.cycler4 #Img${iterator4}`).forEach((image) => {
      image.style.opacity = "0";
    });

    iterator4++;
    if (iterator4 > 2) {
      iterator4 = 1;
      let i;
      // When all images are at opacity 0 turn it into 1 so we can loop through'em again
      for (i = 1; i < 3; i++) {
        document.querySelectorAll(`.cycler4 #Img${i}`).forEach((image) => {
          image.style.opacity = "1";
        });
      }
    }
  }

  setInterval(() => {
    cycler4();
  }, 5000);

  return (
    <div>
      <div className="my_other_projects-page">
        <div className="secondary-assets">
          <ul data-aos="fade-left" data-aos-duration="1000">
            <li className="asset1">
              <img src={asset1} alt="" />
              <span>More Porjects by me adobe Photoshop, illustrator...</span>
            </li>
            <li className="asset2">
              <img src={asset2} alt="" />
            </li>
          </ul>
        </div>

        <div className="my_other_projects">
          <div className="photoshop">
            <div className="row">
              <h1>Photoshop</h1>
            </div>

            <div className="row">
              <div className="column">
                <div className="cycler1">
                  {/* This ORIGINAL tag is nothing but text to let our user know the original picture from these ones */}
                  <original>
                    <img src={cycler1Img1} id="Img1" alt="" />
                    <span id="Img1">Original</span>
                  </original>
                  <img src={cycler1Img2} id="Img2" alt="" />
                  <img src={cycler1Img3} id="Img3" alt="" />
                  <img src={cycler1Img4} id="Img4" alt="" />
                  <img src={cycler1Img5} id="Img5" alt="" />
                </div>
              </div>

              <div className="column">
                <div className="cycler2">
                  <img src={cycler2Img1} id="Img1" alt="" />
                  <img src={cycler2Img2} id="Img2" alt="" />
                  <img src={cycler2Img3} id="Img3" alt="" />
                  <img src={cycler2Img4} id="Img4" alt="" />
                  <img src={cycler2Img5} id="Img5" alt="" />
                  <img src={cycler2Img6} id="Img6" alt="" />
                  <img src={cycler2Img7} id="Img7" alt="" />
                </div>

                <div className="cycler3">
                  <original>
                    <img src={cycler3Img1} id="Img1" alt="" />
                    <span id="Img1">Original</span>
                  </original>
                  <img src={cycler3Img2} id="Img2" alt="" />
                  <original>
                    <img src={cycler3Img3} id="Img3" alt="" />
                    <span id="Img3">Original</span>
                  </original>
                  <img src={cycler3Img4} id="Img4" alt="" />
                </div>
              </div>

              <div className="column">
                <div className="cycler4">
                  <original>
                    <img src={cycler4Img1} id="Img1" alt="" />
                    <span id="Img1">Original</span>
                  </original>
                  <img className="cy4img2" src={cycler4Img2} id="Img2" alt="" />
                  <img src={cycler4Img3} id="Img2" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="illustrator">
            <div className="row">
              <h1>Illustrator</h1>
            </div>
            <div className="rowb">
              <img src={CVImg1} alt="" />
              <img src={CVImg2} alt="" />
              <img src={CVImg3} alt="" />
            </div>
          </div>

          <div className="url">
            <p>we're working on creating a new full URL for more projects by me (Photoshop, illustrator...) will be available soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyOtherProjects;
