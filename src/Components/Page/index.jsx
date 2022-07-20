import React, { useMemo } from "react";
import "../Business_list/Business_list.scss";
import "../Imobile/Imobile.scss";
import "../Portfolio_template/Portfolio_template.scss";
import "../TodoListAppDj/TodoListAppDj.scss";
import "../MylilMarket/MylilMarket.scss";
import "../BlackJackRPS/BlackJackRPS.scss";
import "../InstagramClone/InstagramClone.scss";
import "../FBMessengerClone/FBMessengerClone.scss";
import "../NetflixClone/NetflixClone.scss";
import "../ResponsiveDesignPractice/ResponsiveDesignPractice.scss";
import "../AmazonClone/AmazonClone.scss";
import "../TinderClone/TinderClone.scss";
import "../TikTokClone/TikTokClone.scss";
import "../YoutubeClone/YoutubeClone.scss";
import "../SpotifyClone/SpotifyClone.scss";
import "../HazelAi/HazelAi.scss";
import asset1 from "../../static/images/illustrator_pics/Asset 11@4x.png";
import asset2 from "../../static/images/illustrator_pics/Asset 12@4x.png";
import { importAll } from "../../helpers";

function Page({ project }) {
  const {
    projectName,
    title,
    subtitle1,
    subtitle2,
    liveDemoUrl,
    githubRepoUrl,
    credits,
    projectDescriptions,
    skillsTable,
    skillsTable2,
    imagesMetaData,
  } = project;
  const cachedImages = useMemo(imagesMetaData.length > 0 && importAll(`${imagesMetaData.path}`), [imagesMetaData]);

  const carouselClassName = ["firstImage", "secondImage", "thirdImage", "fourthImage"];

  return (
    <div className={`${projectName}-page`}>
      <div className="secondary-assets">
        <ul data-aos="fade-left" data-aos-duration="1000">
          <li className="asset1">
            <img src={asset1} alt="" />
            <span>{title}</span>
          </li>
          <li className="asset2">
            <img src={asset2} alt="" />
          </li>
        </ul>
      </div>

      {/* Project's images */}
      <div className={`${projectName}-images`}>
        <ul>
          <h1>
            {subtitle1}
            <br />
              <span>{subtitle2}</span>
              <br />
            {liveDemoUrl ? (
              <a href={liveDemoUrl} target="_blank">
                LIVE DEMO
              </a>
            ) : (
              <a style={{ cursor: "none" }}>LIVE DEMO SOON</a>
            )}
            {githubRepoUrl && (
              <a href={githubRepoUrl} target="_blank">
                GitHub Repo
              </a>
            )}
          </h1>

          {cachedImages.length > 0 &&
            cachedImages.map((image, idx) => {
              {/* TODO max 4 images slice the rest */}
              if (idx > 3) return null;
              return (
                <li id={`${projectName}-flipper-key`} className={carouselClassName[idx]}>
                  <img src={image.default} alt={imagesMetaData.labels[idx]} />
                </li>
              );
            })}
        </ul>
      </div>

      <div className={`${projectName}-skills`}>
        <table>
          <tbody>
            <tr>
              <th>{title} Tech Stack</th>
            </tr>
            <tr className="skills">
              {skillsTable.map((skill) => (
                <td>{skill}</td>
              ))}
            </tr>
            {skillsTable2 && (
              <tr>
                {skillsTable2?.map((skill) => (
                  <td>{skill}</td>
                ))}
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className={`${projectName}-skills`}>
        <table>
          <tbody>
            <tr>
              <th>DESCRIPTIONS</th>
            </tr>
            <tr className="skills">
              <td className="descriptions">
                {credits ? (
                  <a href={credits[0]} target="_blank">
                    {projectDescriptions}
                  </a>
                ) : (
                  projectDescriptions
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Flipper and their images that shows up when you click on an image from the list above */}
      {cachedImages?.length > 0 && (
        <div className={`${projectName}-flipper-container`}>
          <div className={`${projectName}-flipper`}>
            <span className={`${projectName}-flipper-close-btn`}>&times;</span>

            <p id="caption"></p>

            <img id="#main-image" className="main-image" src={cachedImages[0].default} alt="" />

            <div className={`${projectName}-flipper-images`}>
              {cachedImages.map((image, idx) => (
                <img src={image.default} alt={imagesMetaData.carouselLabels[idx]} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
