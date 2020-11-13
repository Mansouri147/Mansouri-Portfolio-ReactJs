import React from 'react'
import "./VariousPyProjects.scss"

import asset1 from "../../static/images/illustrator_pics/Asset\ 11@4x.png";
import asset2 from "../../static/images/illustrator_pics/Asset\ 12@4x.png";

import tikTacToeMockup from "../../static/images/Various-Py-Projects/hand-drawn-tic-tac-toe.png";
import weatherMockup from "../../static/images/Various-Py-Projects/cloud_ligh-sign_original_blue.png";
import barChartMockup from "../../static/images/Various-Py-Projects/Barchart.png";

function VariousPyProjects() {
    return (
        <div>
            <div className="various_py_projects-page">

                <div className="secondary-assets">
                    <ul data-aos="fade-left"  data-aos-duration="1000">
                        <li className="asset1"><img src={asset1} alt="" /><span>Other various Python projects</span></li>
                        <li className="asset2"><img src={asset2} alt="" /></li>
                    </ul>
                </div>

                <div className="various_py_projects">
                    
                    <div className="column">
                        <div className="tic-tac-toe">
                            <h1>Tic Tac Toe App</h1>
                            <p>Tic Tac Toe, nice practice for understanding global variables and some python logic, game created on repl.it nice and neat website for online coding</p>
                            <img src={tikTacToeMockup} alt="" />
                            <a href="https://repl.it/@Mansouri147/Tic-Tac-Toe" target="_blank">repl.it/@Mansouri147/Tic_Tac_Toe</a>
                        </div>
                    </div>

                    <div className="column">
                        <div className="weather-scraper">
                            <h1>Weather Scraper</h1>
                            <p>This is a weather scraper app from weather.com. In short, this app takes two main tasks:</p>
                            <ul>
                                <li>First, it takes some periods of the day for one week, their description and their temperatures then show them in your interactive terminal.</li><br />
                                <li>Secondly is taking these informations and store them in a CSV file.</li>
                            </ul>
                            <img src={weatherMockup} alt="" />
                            <a href="https://github.com/Mansouri147/Weather_scraper" target="_blank">github.com/Mansouri147/Weather_scraper</a>
                        </div>
                    </div>

                    <div className="column">
                        <div className="process-workbook">
                            <h1>Process Workbook</h1>
                            <p>Some Data analysis<br /> editing csv files and showing a gigantic BarChart</p>
                            <img src={barChartMockup} alt="" />
                            <a href="https://github.com/Mansouri147/process_workbook_function_editing_excel_files" target="_blank">github.com/Mansouri147/process_workbook</a>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default VariousPyProjects;
