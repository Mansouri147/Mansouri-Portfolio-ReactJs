import React, { useState } from "react";
import "./HazelAi.scss";
import asset1 from "../../static/images/illustrator_pics/Asset 11@4x.png";
import asset2 from "../../static/images/illustrator_pics/Asset 12@4x.png";

function HazelAi({ project }) {
  const { projectName, title, subtitle1, skillsTable, projectDescriptions } = project;

  return (
    <div className={`${projectName}-page`}>
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
              {title}
              <br />
              <span>{subtitle1}</span>
              <br />
              <a href="https://github.com/Mansouri147/MY_JARVIS---Hazel-ai" target="_blank">
                GitHub Repo
              </a>
            </h1>

            {skillsTable.length > 0 && (
              <div className={`${projectName}-skills`}>
                <table>
                  <tbody>
                    <tr>
                      <th className="hazel-title">{title} Tech Stack</th>
                    </tr>
                    <tr className="skills">
                      {skillsTable.map((skill) => (
                        <td>{skill}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            <div className={`${projectName}-skills`}>
              <table>
                <tbody>
                  <tr>
                    <th>DESCRIPTIONS</th>
                  </tr>
                  <tr className="skills">
                    <td className="descriptions">{projectDescriptions}</td>
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
