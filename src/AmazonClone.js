import React from "react";
import Page from "./Page";
import AmazonCImg1 from "./static/images/amazon_images/amazon-home-page.jpg";
import AmazonCImg2 from "./static/images/amazon_images/amazon-checkout-page.jpg";

function AmazonClone() {
    // This name will be used in production like css and javascript
  const projectName = "amazon_clone";

  const title = "Amazon Clone";
  const secondTitle = "Amazon Clone ReactJs three pages included built with React Router feature";

  const liveDemoUrl = "https://ama-zon-clonee.web.app/";
  const githubRepoUrl = "https://github.com/Mansouri147/Amazon-Clone";

  // Flipper key is the image that you click to open up our images flipper ( carousel )
  const flipper_key1 = AmazonCImg1;
  const flipper_key1Alt = "Home Page";
  const flipper_key2 = AmazonCImg2;
  const flipper_key2Alt = "Checkout Page";

  const skillsTable = [
    "JavaScript",
    "React Router",
    "Firebase (hosting, database)",
    "Context API ( LIKE REDUX )",
    "Material UI",
    "CSS Hacks",
    "Web Design",
    "3rd Party: UseStateValue and UseEffect hooks",
  ];

  // Flipper images ( carousel images )
  const flipper_image1 = AmazonCImg1;
  const flipper_image1Alt = "Responsive Design";
  const flipper_image2 = AmazonCImg2;
  const flipper_image2Alt = "Zoom-In";

  const projectDescriptions =
    "Amazon Clone homepage checkout and login page with React Router components also with the add/remove from basket features";

  return (
    <div>
      <Page
        key={projectName}
        projectName={projectName}
        title={title}
        secondTitle={secondTitle}
        liveDemoUrl={liveDemoUrl}
        githubRepoUrl={githubRepoUrl}
        flipper_key1={flipper_key1}
        flipper_key2={flipper_key2}
        flipper_key1Alt={flipper_key1Alt}
        flipper_key2Alt={flipper_key2Alt}
        flipper_image1={flipper_image1}
        flipper_image2={flipper_image2}
        flipper_image1Alt={flipper_image1Alt}
        flipper_image2Alt={flipper_image2Alt}
        projectDescriptions={projectDescriptions}
        skillsTable={skillsTable}
        
      />
    </div>
  );
}

export default AmazonClone;
