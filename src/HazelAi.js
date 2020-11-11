import React, { useState } from "react";
import "./HazelAi.scss";
import asset1 from "./static/images/illustrator_pics/Asset 11@4x.png";
import asset2 from "./static/images/illustrator_pics/Asset 12@4x.png";

function HazelAi() {
  // This name will be used in production like css and javascript
  const [projectName, setProjectName] = useState("hazel_ai");

  const [title, setTitle] = useState("Hazel AI");

  const [projectDescLine1, setProjectDescLine1] = useState(
    "This is Hazel the new version of MY_JARVIS it has a lot of funny and cool features that you can try i'm about to add some Epic new features but it works well right now you can try it and have fun!"
  );
  const [projectDescLine2, setProjectDescLine2] = useState('First version will be released soon as an exe installer for "non-developers" users Thanks.');
  return (
    <div className="hazel_ai-page">
      <div className="secondary-assets">
        <ul>
          <li className="asset1">
            <img src={asset1} alt="" />
            <span>{title}</span>
          </li>
          <li className="asset2">
            <img src={asset2} alt="" />
          </li>
        </ul>
      </div>

      <div className={`${projectName}-images`}>
        <ul>
          <li>
            <h1>
              Hazel AI
              <br />
              <span>{"Technology today is a must hence why we have to be up to date and hence why i made Hazel... <br /> (Data science> Machine Learning)"}</span>
              <br />
              <a href="https://github.com/Mansouri147/MY_JARVIS---Hazel-ai" target="_blank">
                GitHub Repo
              </a>
            </h1>

            <div className="hazel_ai-skills">
              <table>
                <tbody>
                  <tr>
                    <th className="hazel-title">HAZEL AI Tech Stack</th>
                  </tr>
                  <tr className="skills">
                    <td>Microsoft VBScript</td>
                    <td>Python</td>
                    <td>Desktop Applications</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="hazel_ai-skills">
              <table>
                <tbody>
                  <tr>
                    <th className="hazel-desc">DESCRIPTIONS</th>
                  </tr>
                  <tr className="skills">
                    <td className="descriptions">
                      This is Hazel the new version of MY_JARVIS it has a lot of funny and cool features that you can try i'm about to add some Epic new features but it works well right now you can
                      try it and have fun!
                      <br />
                      <br />
                      First version will be released soon as an exe installer Thanks.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HazelAi;
