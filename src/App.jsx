import { useState } from "react";
import "./App.css";
import { ArrowUpToLine } from "lucide-react";
import { Triangle } from "lucide-react";
import { File } from "lucide-react";
import { CircleCheckBig } from "lucide-react";
import { MoveUpRight } from "lucide-react";
function App() {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <>
      <div className="dashboard-container">
        <div className="current-company">
          <div className="placement-section">
            <div className="placement-details">
              <h2>Placement</h2>
              <p>Placement/Homepage</p>
            </div>
            <div className="placement-button">
              <button className="placement--button">
                Apply for Self Placement
              </button>
              <button className="placement--button1">My Warning Latter </button>
            </div>
          </div>
          <hr />
          <div className="current-company">
            <h2>Current Company</h2>
            <div className="current-company-detials">
              <div className="company-details">
                <div className="company">
                  <img src="/src/assets/pngwing.png" alt="" />
                  <p className="company-name"> Ecubix Solution Pvt. Ltd.</p>
                  <img src="/src/assets/tick.png" alt="" />
                </div>
                <div class="vertical_dotted_line"></div>
                <div className="grade">
                  <p className="company-grade">A</p>
                  <p>Grade</p>
                </div>
                <div class="vertical_dotted_line"></div>
                <div className="designation">
                  <p className="designation-info">Designation</p>
                  <p className="desig-company">
                    E-Commerce Marketplace Listing & Management
                  </p>
                </div>
                <div class="vertical_dotted_line"></div>
                <div className="working">
                  <p className="designation-info">Working Period: </p>
                  <p className="desig-company">January, 2024 - Present</p>
                </div>
                <Triangle strokeWidth={3} />
              </div>
              <hr />
              <div className="card-container">
                <div className="card1" id="card">
                  <div>
                    <p className="boldness">Work Book Still Pending.</p>
                    <p>Last Updated August 29-2024 </p>
                  </div>
                  <p>
                    <File strokeWidth={3} />
                    {file}
                  </p>
                  <div className="Upload">
                    <label className="label" for="files">
                      <ArrowUpToLine />
                      Submit Workbook
                    </label>
                    <input id="files" type="file" onChange={handleChange} />
                  </div>
                  <p id="underline-text">View all your previous document</p>
                </div>
                <div className="card2" id="card">
                  <div>
                    <p className="boldness">Missing Attendance Sheet.</p>
                    <p>Last Updated August 29-2024 </p>
                  </div>
                  <p>
                    <File strokeWidth={3} />
                    {file}
                  </p>
                  <div className="Upload">
                    <label className="label" for="files">
                      <ArrowUpToLine size={25} /> Submit Attendance
                    </label>
                    <input id="files" type="file" onChange={handleChange} />
                  </div>
                  <p id="underline-text">View all your previous document</p>
                </div>
                <div className="card3" id="card">
                  <h2 className="card3-heading">
                    Other placement related company documents
                  </h2>
                  <div className="Upload-3">
                    <label className="label" for="files">
                      <ArrowUpToLine />
                      Upload
                    </label>
                    <input id="files" type="file" onChange={handleChange} />
                  </div>
                  <p id="underline-text-3">View all your previous document</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="previous-companies">
          <div className="previous-company-heading">
            <h2>Previous Companies</h2>
            <p id="underline-text-3">View all our previous company list</p>
          </div>
          <div className="Detail-1">
            <div className="company-details">
              <div className="company">
                <img src="/src/assets/pngwing.png" alt="" />
                <p className="company-name">Trades Solution Pvt Ltd</p>
                <img src="/src/assets/tick.png" alt="" />
              </div>
              <div class="vertical_dotted_line"></div>
              <div className="grade">
                <p className="company-grade">A</p>
                <p>Grade</p>
              </div>
              <div class="vertical_dotted_line"></div>
              <div className="designation">
                <p className="designation-info">Designation</p>
                <p className="desig-company">
                  E-Commerce Marketplace Listing & Management
                </p>
              </div>
              <div class="vertical_dotted_line"></div>
              <div className="working">
                <p className="designation-info">Working Period: </p>
                <p className="desig-company">June,2023 - September,2024 </p>
              </div>
              <Triangle strokeWidth={3} />
            </div>{" "}
          </div>

          <div className="Detail-1">
            <div className="company-details">
              <div className="company">
                <img src="/src/assets/pngwing.png" alt="" />
                <p className="company-name">The North Face</p>
                <img src="/src/assets/tick.png" alt="" />
              </div>
              <div class="vertical_dotted_line"></div>
              <div className="grade">
                <p className="company-grade">B</p>
                <p>Grade</p>
              </div>
              <div class="vertical_dotted_line"></div>
              <div className="designation">
                <p className="designation-info">Designation</p>
                <p className="desig-company">Computer System Analyst</p>
              </div>
              <div class="vertical_dotted_line"></div>
              <div className="working">
                <p className="designation-info">Working Period: </p>
                <p className="desig-company">January,2021 - April,2023 </p>
              </div>
              <Triangle strokeWidth={3} />
            </div>{" "}
          </div>
          <div className="Detail-1">
            <div className="company-details">
              <div className="company">
                <img src="/src/assets/pngwing.png" alt="" />
                <p className="company-name">Hawelett Packward Enterprise</p>
                <img src="/src/assets/tick.png" alt="" />
              </div>
              <div class="vertical_dotted_line"></div>
              <div className="grade">
                <p className="company-grade">C</p>
                <p>Grade</p>
              </div>
              <div class="vertical_dotted_line"></div>
              <div className="designation">
                <p className="designation-info">Designation</p>
                <p className="desig-company">Cloud Network Engineer</p>
              </div>
              <div class="vertical_dotted_line"></div>
              <div className="working">
                <p className="designation-info">Working Period: </p>
                <p className="desig-company">April,2018 - December,2020 </p>
              </div>
              <Triangle strokeWidth={3} />
            </div>{" "}
          </div>
          <div className="Detail-1">
            <div className="company-details">
              <div className="company">
                <img src="/src/assets/pngwing.png" alt="" />
                <p className="company-name">HCL Technologies</p>
                <img src="/src/assets/tick.png" alt="" />
              </div>
              <div class="vertical_dotted_line"></div>
              <div className="grade">
                <p className="company-grade">C</p>
                <p>Grade</p>
              </div>
              <div class="vertical_dotted_line"></div>
              <div className="designation">
                <p className="designation-info">Designation</p>
                <p className="desig-company">Cloud Administrator</p>
              </div>
              <div class="vertical_dotted_line"></div>
              <div className="working">
                <p className="designation-info">Working Period: </p>
                <p className="desig-company">April,2018 - December,2020 </p>
              </div>
              <Triangle strokeWidth={3} />
            </div>{" "}
          </div>
        </div>
        <div className="job-applications">
          <div className="previous-company-heading">
            <h2>Previous Job Applications</h2>
            <p id="underline-text-4">View all our previous company list</p>
          </div>
          <div className="application-container">
            <div id="application-details" className="application-1">
              <div className="application-heading">
              <p>Application No.</p>
              <MoveUpRight className="move-upright" />
              </div>
              <h1>001:</h1>
              <div className="application-company-name">
              <img src="/src/assets/pngwing.png" alt="" />
              <h5>Ecubix Solution <p></p>
              <p></p>
              <p></p>
              <p></p>Pvt. Ltd. (Selected)</h5>
              </div>
              <div className="horizotal_dotted_line"></div>
              <div className="application-steps">
                <p id="application-para"><CircleCheckBig size={17} className="tick" strokeWidth={3} />Applied</p>
                <p id="application-para"><CircleCheckBig size={17}  className="tick" strokeWidth={3} />Sortlisted</p>
                <p id="application-para"><CircleCheckBig size={17}  className="tick" strokeWidth={3} />Interview Scheduled</p>
                <p id="application-para"><CircleCheckBig size={17}  strokeWidth={3} className="tick" />Appiered for Interview</p>
                <p id="application-para"><CircleCheckBig size={17}  strokeWidth={3} className="tick" />Selected</p>
              </div>
            </div>
            <div id="application-details" className="application-2">
              <div className="application-heading">
                <p>Application No.</p>
              <MoveUpRight className="move-upright" />
              </div>
              <h1>002:</h1>
              <div className="application-company-name">
              <img src="/src/assets/pngwing.png" alt="" />
              <h5>Ecubix Solution Pvt. Ltd. (Selected)</h5>
              </div>
              <div className="horizotal_dotted_line"></div>
              <div className="application-steps">
              <p id="application-para"><CircleCheckBig size={17} className="tick" strokeWidth={3} />Applied</p>
                <p id="application-para"><CircleCheckBig size={17}  className="tick" strokeWidth={3} />Sortlisted</p>
                <p id="application-para"><CircleCheckBig size={17}  className="tick" strokeWidth={3} />Interview Scheduled</p>
                <p id="application-para"><CircleCheckBig size={17}  strokeWidth={3} className="tick" />Appiered for Interview</p>
                <p id="application-para"><CircleCheckBig size={17}  strokeWidth={3} className="tick" />Selected</p>
              </div>
            </div>
            <div id="application-details" className="application-3">
              <div className="application-heading">
                <p>Application No.</p>
              <MoveUpRight className="move-upright" />
              </div>
              <h1>003:</h1>
              <div className="application-company-name">
              <img src="/src/assets/pngwing.png" alt="" />
              <h5>Ecubix Solution Pvt. Ltd. (Selected)</h5>
              </div>
              <div className="horizotal_dotted_line"></div>
              <div className="application-steps">
              <p id="application-para"><CircleCheckBig size={17} className="tick" strokeWidth={3} />Applied</p>
                <p id="application-para"><CircleCheckBig size={17}  className="tick" strokeWidth={3} />Sortlisted</p>
                <p id="application-para"><CircleCheckBig size={17}  className="tick" strokeWidth={3} />Interview Scheduled</p>
                <p id="application-para"><CircleCheckBig size={17}  strokeWidth={3} className="tick" />Appiered for Interview</p>
                <p id="application-para"><CircleCheckBig size={17}  strokeWidth={3} className="tick" />Selected</p>
              </div>
            </div>
            <div id="application-details" className="application-4">
              <div className="application-heading">
                <p>Application No.</p>
              <MoveUpRight className="move-upright" />
              </div>
              <h1>004:</h1>
              <div className="application-company-name">
              <img src="/src/assets/pngwing.png" alt="" />
              <h5>Ecubix Solution Pvt. Ltd. (Selected)</h5>
              </div>
              <div className="horizotal_dotted_line"></div>
              <div className="application-steps">
              <p id="application-para"><CircleCheckBig size={17} className="tick" strokeWidth={3} />Applied</p>
                <p id="application-para"><CircleCheckBig size={17}  className="tick" strokeWidth={3} />Sortlisted</p>
                <p id="application-para"><CircleCheckBig size={17}  className="tick" strokeWidth={3} />Interview Scheduled</p>
                <p id="application-para"><CircleCheckBig size={17}  strokeWidth={3} className="tick" />Appiered for Interview</p>
                <p id="application-para"><CircleCheckBig size={17}  strokeWidth={3} className="tick" />Selected</p>
              </div>
            </div>
            <div id="application-details" className="application-5">
              <div className="application-heading">
                <p>Application No.</p>
              <MoveUpRight className="move-upright" />
              </div>
              <h1>005:</h1>
              <div className="application-company-name">
              <img src="/src/assets/pngwing.png" alt="" />
              <h5>Ecubix Solution Pvt. Ltd. (Selected)</h5>
              </div>
              <div className="horizotal_dotted_line"></div>
              <div className="application-steps">
              <p id="application-para"><CircleCheckBig size={17} className="tick" strokeWidth={3} />Applied</p>
                <p id="application-para"><CircleCheckBig size={17}  className="tick" strokeWidth={3} />Sortlisted</p>
                <p id="application-para"><CircleCheckBig size={17}  className="tick" strokeWidth={3} />Interview Scheduled</p>
                <p id="application-para"><CircleCheckBig size={17}  strokeWidth={3} className="tick" />Appiered for Interview</p>
                <p id="application-para"><CircleCheckBig size={17}  strokeWidth={3} className="tick" />Selected</p>
              </div>
            </div>
            <div id="application-details" className="application-6">
              <div className="application-heading">
                <p>Application No.</p>
              <MoveUpRight className="move-upright" />
              </div>
              <h1>006:</h1>
              <div className="application-company-name">
              <img src="/src/assets/pngwing.png" alt="" />
              <h5>Ecubix Solution Pvt. Ltd. (Selected)</h5>
              </div>
              <div className="horizotal_dotted_line"></div>
              <div className="application-steps">
              <p id="application-para"><CircleCheckBig size={17} className="tick" strokeWidth={3} />Applied</p>
                <p id="application-para"><CircleCheckBig size={17}  className="tick" strokeWidth={3} />Sortlisted</p>
                <p id="application-para"><CircleCheckBig size={17}  className="tick" strokeWidth={3} />Interview Scheduled</p>
                <p id="application-para"><CircleCheckBig size={17}  strokeWidth={3} className="tick" />Appiered for Interview</p>
                <p id="application-para"><CircleCheckBig size={17}  strokeWidth={3} className="tick" />Selected</p>
              </div>
            </div>
            <div id="application-details" className="application-7">
              <div className="application-heading">
                <p>Application No.</p>
              <MoveUpRight className="move-upright" />
              </div>
              <h1>007:</h1>
              <div className="application-company-name">
              <img src="/src/assets/pngwing.png" alt="" />
              <h5>Ecubix Solution Pvt. Ltd. (Selected)</h5>
              </div>
              <div className="horizotal_dotted_line"></div>
              <div className="application-steps">
              <p id="application-para"><CircleCheckBig size={17} className="tick" strokeWidth={3} />Applied</p>
                <p id="application-para"><CircleCheckBig size={17}  className="tick" strokeWidth={3} />Sortlisted</p>
                <p id="application-para"><CircleCheckBig size={17}  className="tick" strokeWidth={3} />Interview Scheduled</p>
                <p id="application-para"><CircleCheckBig size={17}  strokeWidth={3} className="tick" />Appiered for Interview</p>
                <p id="application-para"><CircleCheckBig size={17}  strokeWidth={3} className="tick" />Selected</p>
              </div>
            </div>
            <div id="application-details" className="application-8">
              <div className="application-heading">
                <p>Application No.</p>
              <MoveUpRight className="move-upright" />
              </div>
              <h1>008:</h1>
              <div className="application-company-name">
              <img src="/src/assets/pngwing.png" alt="" />
              <h5>Ecubix Solution Pvt. Ltd. (Selected)</h5>
              </div>
              <div className="horizotal_dotted_line"></div>
              <div className="application-steps">
              <p id="application-para"><CircleCheckBig size={17} className="tick" strokeWidth={3} />Applied</p>
                <p id="application-para"><CircleCheckBig size={17}  className="tick" strokeWidth={3} />Sortlisted</p>
                <p id="application-para"><CircleCheckBig size={17}  className="tick" strokeWidth={3} />Interview Scheduled</p>
                <p id="application-para"><CircleCheckBig size={17}  strokeWidth={3} className="tick" />Appiered for Interview</p>
                <p id="application-para"><CircleCheckBig size={17}  strokeWidth={3} className="tick" />Selected</p>
              </div>
            </div>
          </div>
        </div>

        <div className="recommended-jobs">
          <h2>Recommended Jobs</h2>
          <p>UI Designer - 10.11 Design (05 Vacancies)</p>
        </div>

        <div className="live-jobs">
          <h2>Live Jobs</h2>
          <p>UI Designer - 10.11 Design (Apply Now)</p>
        </div>
      </div>
    </>
  );
}

export default App;
