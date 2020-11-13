import React, { useEffect, useState } from "react";
import Page from "../Page";
import mainPage from "../../static/images/Imobile-shop/Main page.png";
import productPage from "../../static/images/Imobile-shop/main_product_page.png";
import signUpPage from "../../static/images/Imobile-shop/sign_up_page.png";
import signInPage from "../../static/images/Imobile-shop/sign_in_page.png";
import wholeProductPage from "../../static/images/Imobile-shop/product_page_whole.png";
import wholeMainPage from "../../static/images/Imobile-shop/whole_main_page.png";
import { assetsTransitions, assetsTransitionsReset } from "../../Assets";

function Imobile() {
  const [projectName, setProjectName] = useState("imobile");

  const [title, setTitle] = useState("Imobile Shop HTML CSS JavaScript");
  const [secondTitle, setSecondTitle] = useState("A professional responsive E-commerce website Template");

  const [liveDemoUrl, setLiveDemoUrl] = useState("https://imobile-shop.herokuapp.com/index.html");

  // Flipper key is the image that you click to open up our images flipper ( carousel )
  const [flipper_key1, setFlipper_key1] = useState(mainPage);
  const [flipper_key1Alt, setFlipper_key1Alt] = useState("Home page");
  const [flipper_key2, setFlipper_key2] = useState(productPage);
  const [flipper_key2Alt, setFlipper_key2Alt] = useState("Product page");
  const [flipper_key3, setFlipper_key3] = useState(signUpPage);
  const [flipper_key3Alt, setFlipper_key3Alt] = useState("Sign up page");
  const [flipper_key4, setFlipper_key4] = useState(signInPage);
  const [flipper_key4Alt, setFlipper_key4Alt] = useState("Sign in page");

  const [skillsTable, setSkillsTable] = useState([
    "Web Design",
    "Web Application",
    "Website Development",
    "Flexbox",
    "eCommerce Website",
    "Responsive Design",
    "Website Optimization",
    "Adobe Photoshop",
    "JavaScript",
  ]);

  // Flipper images ( carousel images )
  const [flipper_image1, setFlipper_image1] = useState(mainPage);
  const [flipper_image1Alt, setFlipper_image1Alt] = useState("Home page");
  const [flipper_image2, setFlipper_image2] = useState(productPage);
  const [flipper_image2Alt, setFlipper_image2Alt] = useState("Product page");
  const [flipper_image3, setFlipper_image3] = useState(signUpPage);
  const [flipper_image3Alt, setFlipper_image3Alt] = useState("Sign up page");
  const [flipper_image4, setFlipper_image4] = useState(signInPage);
  const [flipper_image4Alt, setFlipper_image4Alt] = useState("Sign in page");
  const [flipper_image5, setFlipper_image5] = useState(wholeProductPage);
  const [flipper_image5Alt, setFlipper_image5Alt] = useState("Whole Product page");
  const [flipper_image6, setFlipper_image6] = useState(wholeMainPage);
  const [flipper_image6Alt, setFlipper_image6Alt] = useState("Whole main page");

  const [projectDescriptions, setProjectDescriptions] = useState(
    "A professional responsive E-commerce website Template containing all pages needed from main page and product page all the way to sign up and sign in pages with a modern unique design."
  );

  return (
    <div>
      <Page
        key={projectName}
        projectName={projectName}
        title={title}
        secondTitle={secondTitle}
        liveDemoUrl={liveDemoUrl}
        flipper_key1={flipper_key1}
        flipper_key2={flipper_key2}
        flipper_key3={flipper_key3}
        flipper_key4={flipper_key4}
        flipper_key1Alt={flipper_key1Alt}
        flipper_key2Alt={flipper_key2Alt}
        flipper_key3Alt={flipper_key3Alt}
        flipper_key4Alt={flipper_key4Alt}
        flipper_image1={flipper_image1}
        flipper_image2={flipper_image2}
        flipper_image3={flipper_image3}
        flipper_image4={flipper_image4}
        flipper_image5={flipper_image5}
        flipper_image6={flipper_image6}
        flipper_image1Alt={flipper_image1Alt}
        flipper_image2Alt={flipper_image2Alt}
        flipper_image3Alt={flipper_image3Alt}
        flipper_image4Alt={flipper_image4Alt}
        flipper_image5Alt={flipper_image5Alt}
        flipper_image6Alt={flipper_image6Alt}
        projectDescriptions={projectDescriptions}
        skillsTable={skillsTable}
      />
    </div>
  );
}

export default Imobile;
