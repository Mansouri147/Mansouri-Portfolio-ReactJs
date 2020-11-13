import React from 'react';
import '../Business_list/Business_list.scss';
import '../Imobile/Imobile.scss';
import "../Portfolio_template/Portfolio_template.scss";
import '../TodoListAppDj/TodoListAppDj.scss';
import "../MylilMarket/MylilMarket.scss"
import "../BlackJackRPS/BlackJackRPS.scss"
import "../InstagramClone/InstagramClone.scss"
import "../FBMessengerClone/FBMessengerClone.scss"
import "../NetflixClone/NetflixClone.scss"
import "../ResponsiveDesignPractice/ResponsiveDesignPractice.scss"
import '../AmazonClone/AmazonClone.scss'
import '../TinderClone/TinderClone.scss'
import '../TikTokClone/TikTokClone.scss'
import '../YoutubeClone/YoutubeClone.scss'
import '../SpotifyClone/SpotifyClone.scss'
import asset1 from "../../static/images/illustrator_pics/Asset 11@4x.png";
import asset2 from "../../static/images/illustrator_pics/Asset 12@4x.png";

function Page({ 
    projectName, 
    title, 
    secondTitle, 
    liveDemoUrl, 
    githubRepoUrl, 
    flipper_key1, 
    flipper_key2, 
    flipper_key3, 
    flipper_key4,
    flipper_key1Alt, 
    flipper_key2Alt, 
    flipper_key3Alt, 
    flipper_key4Alt, 
    flipper_image1, 
    flipper_image2, 
    flipper_image3,
    flipper_image4, 
    flipper_image5, 
    flipper_image6, 
    flipper_image1Alt, 
    flipper_image2Alt, 
    flipper_image3Alt, 
    cleverProgUrl,
    flipper_image4Alt, 
    flipper_image5Alt,
    flipper_image6Alt, 
    projectDescriptions, 
    skillsTable, 
    skillsTable2 
  }) {

    return (
        <div className={`${projectName}-page`}>
            <div className="secondary-assets">
                <ul data-aos="fade-left" data-aos-duration="1000">
                    <li className="asset1"><img src={asset1} alt="" /><span>{title}</span></li>
                    <li className="asset2"><img src={asset2} alt="" /></li>
                </ul>
            </div>

            {/* Project's images */}
            <div className={`${projectName}-images`}>
                <ul>
                    <h1>{secondTitle}<br />
                    {liveDemoUrl ? <a href={liveDemoUrl} target="_blank">LIVE DEMO</a> : <a style={{cursor: "none"}}>LIVE DEMO SOON</a>}
                    {githubRepoUrl && <a href={githubRepoUrl} target="_blank">GitHub Repo</a>}</h1>

                    {flipper_key1 && <li id={`${projectName}-flipper-key`} className='firstImage'><img src={flipper_key1} alt={flipper_key1Alt} /></li>}
                    {flipper_key2 && <li id={`${projectName}-flipper-key`} className='secondImage'><img src={flipper_key2} alt={flipper_key2Alt} /></li>}
                    {flipper_key3 && <li id={`${projectName}-flipper-key`} className='thirdImage'><img src={flipper_key3} alt={flipper_key3Alt} /></li>}
                    {flipper_key4 && <li id={`${projectName}-flipper-key`} className='fourthImage'><img src={flipper_key4} alt={flipper_key4Alt} /></li>}
                </ul>
            </div>

            <div className={`${projectName}-skills`}>
                <table>
                    <tbody>
                        <tr>
                            <th>{projectName} Tech Stack</th>
                        </tr>
                        <tr className="skills">
                            {skillsTable.map((skill) => (
                                <td>{skill}</td>
                            ))}
                        </tr>
                        {skillsTable2 &&
                            <tr>
                                {skillsTable2?.map((skill) => (
                                    <td>{skill}</td>
                                ))}
                            </tr>
                        }
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
                            <td className="descriptions">{cleverProgUrl ? <a href="https://www.youtube.com/channel/UCqrILQNl5Ed9Dz6CGMyvMTQ" target="_blank">{projectDescriptions}</a> : projectDescriptions}</td>
                        </tr>
                    </tbody>
                </table>
            </div>


            {/* Flipper and their images that shows up when you click on an image from the list above */}
            <div className={`${projectName}-flipper-container`}>
                <div className={`${projectName}-flipper`}>

                    <span className={`${projectName}-flipper-close-btn`}>&times;</span>

                    <p id="caption"></p>

                    <img id="#main-image" className="main-image" src={flipper_key1} alt="" />

                    <div className={`${projectName}-flipper-images`}>
                        {flipper_image1 && <img src={flipper_image1} alt={flipper_image1Alt} />}
                        {flipper_image2 && <img src={flipper_image2} alt={flipper_image2Alt} />}
                        {flipper_image3 && <img src={flipper_image3} alt={flipper_image3Alt} />}
                        {flipper_image4 && <img src={flipper_image4} alt={flipper_image4Alt} />}
                        {flipper_image5 && <img src={flipper_image5} alt={flipper_image5Alt} />}
                        {flipper_image6 && <img src={flipper_image6} alt={flipper_image6Alt} />}
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Page
