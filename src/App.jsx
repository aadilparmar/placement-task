import { useState } from "react";
import "./App.css";
import { ArrowUpToLine } from "lucide-react";
import { Triangle } from "lucide-react";
import { File } from "lucide-react";
import { CircleCheckBig } from "lucide-react";
import { MoveUpRight } from "lucide-react";
import { EllipsisVertical } from "lucide-react";
import { MapPin } from "lucide-react";
import { User } from "lucide-react";
import { Search } from "lucide-react";
import { Filter } from "lucide-react";
function App() {
  const [file, setFile] = useState();
  const [buttonText, setButtonText] = useState("Apply Now");
  const [buttonText2, setButtonText2] = useState("Apply Now");
  const [buttonText3, setButtonText3] = useState("Apply Now");
  const [buttonText4, setButtonText4] = useState("Apply Now");
  const [buttonText5, setButtonText5] = useState("Apply Now");
  const [buttonText6, setButtonText6] = useState("Apply Now");
  const [buttonText7, setButtonText7] = useState("Apply Now");
  const [buttonText8, setButtonText8] = useState("Apply Now");
  const [buttonText9, setButtonText9] = useState("Apply Now");
  const [buttonText10, setButtonText10] = useState("Apply Now");
  const [buttonText11, setButtonText11] = useState("Apply Now");
  const [buttonText12, setButtonText12] = useState("Apply Now");
  const [buttonColor, setButtonColor] = useState("white");
  const [buttonColor2, setButtonColor2] = useState("white");
  const [buttonColor3, setButtonColor3] = useState("white");
  const [buttonColor4, setButtonColor4] = useState("white");
  const [buttonColor5, setButtonColor5] = useState("white");
  const [buttonColor6, setButtonColor6] = useState("white");
  const [buttonColor7, setButtonColor7] = useState("white");
  const [buttonColor8, setButtonColor8] = useState("white");
  const [buttonColor9, setButtonColor9] = useState("white");
  const [buttonColor10, setButtonColor10] = useState("white");
  const [buttonColor11, setButtonColor11] = useState("white");
  const [buttonColor12, setButtonColor12] = useState("white");
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  const handleClick = () => {
    setButtonText("Applied!");
    setButtonColor("blue");
  };
  const handleClick2 = () => {
    setButtonText2("Applied!");
    setButtonColor2("blue");
  };
  const handleClick3 = () => {
    setButtonText3("Applied!");
    setButtonColor3("blue");
  };
  const handleClick4 = () => {
    setButtonText4("Applied!");
    setButtonColor4("blue");
  };
  const handleClick5 = () => {
    setButtonText5("Applied!");
    setButtonColor5("blue");
  };
  const handleClick6 = () => {
    setButtonText6("Applied!");
    setButtonColor6("blue");
  };
  const handleClick7 = () => {
    setButtonText7("Applied!");
    setButtonColor7("blue");
  };
  const handleClick8 = () => {
    setButtonText8("Applied!");
    setButtonColor8("blue");
  };
  const handleClick9 = () => {
    setButtonText9("Applied!");
    setButtonColor9("blue");
  };
  const handleClick10 = () => {
    setButtonText10("Applied!");
    setButtonColor10("blue");
  };
  const handleClick11 = () => {
    setButtonText11("Applied!");
    setButtonColor11("blue");
  };
  const handleClick12 = () => {
    setButtonText12("Applied!");
    setButtonColor12("blue");
  };
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
                  <img src="/assets/pngwing.png" alt="" />
                  <p className="company-name"> Ecubix Solution Pvt. Ltd.</p>
                  <img src="/assets/tick.png" alt="" />
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
                <h5>Ecubix Solution Pvt. Ltd. (Selected)</h5>
              </div>
              <div className="horizotal_dotted_line"></div>
              <div className="application-steps">
                <p id="application-para">
                  <CircleCheckBig size={17} className="tick" strokeWidth={3} />
                  Applied
                </p>
                <p id="application-para">
                  <CircleCheckBig size={17} className="tick" strokeWidth={3} />
                  Sortlisted
                </p>
                <p id="application-para">
                  <CircleCheckBig size={17} className="tick" strokeWidth={3} />
                  Interview Scheduled
                </p>
                <p id="application-para">
                  <CircleCheckBig size={17} strokeWidth={3} className="tick" />
                  Appiered for Interview
                </p>
                <p id="application-para">
                  <CircleCheckBig size={17} strokeWidth={3} className="tick" />
                  Selected
                </p>
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
                <p id="application-para">
                  <CircleCheckBig size={17} className="tick" strokeWidth={3} />
                  Applied
                </p>
                <p id="application-para">
                  <CircleCheckBig size={17} className="tick" strokeWidth={3} />
                  Sortlisted
                </p>
                <p id="application-para">
                  <CircleCheckBig size={17} className="tick" strokeWidth={3} />
                  Interview Scheduled
                </p>
                <p id="application-para">
                  <CircleCheckBig size={17} strokeWidth={3} className="tick" />
                  Appiered for Interview
                </p>
                <p id="application-para">
                  <CircleCheckBig size={17} strokeWidth={3} className="tick" />
                  Selected
                </p>
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
                <p id="application-para">
                  <CircleCheckBig size={17} className="tick" strokeWidth={3} />
                  Applied
                </p>
                <p id="application-para">
                  <CircleCheckBig size={17} className="tick" strokeWidth={3} />
                  Sortlisted
                </p>
                <p id="application-para">
                  <CircleCheckBig size={17} className="tick" strokeWidth={3} />
                  Interview Scheduled
                </p>
                <p id="application-para">
                  <CircleCheckBig size={17} strokeWidth={3} className="tick" />
                  Appiered for Interview
                </p>
                <p id="application-para">
                  <CircleCheckBig size={17} strokeWidth={3} className="tick" />
                  Selected
                </p>
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
                <p id="application-para">
                  <CircleCheckBig size={17} className="tick" strokeWidth={3} />
                  Applied
                </p>
                <p id="application-para">
                  <CircleCheckBig size={17} className="tick" strokeWidth={3} />
                  Sortlisted
                </p>
                <p id="application-para">
                  <CircleCheckBig size={17} className="tick" strokeWidth={3} />
                  Interview Scheduled
                </p>
                <p id="application-para">
                  <CircleCheckBig size={17} strokeWidth={3} className="tick" />
                  Appiered for Interview
                </p>
                <p id="application-para">
                  <CircleCheckBig size={17} strokeWidth={3} className="tick" />
                  Selected
                </p>
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
                <p id="application-para">
                  <CircleCheckBig size={17} className="tick" strokeWidth={3} />
                  Applied
                </p>
                <p id="application-para">
                  <CircleCheckBig size={17} className="tick" strokeWidth={3} />
                  Sortlisted
                </p>
                <p id="application-para">
                  <CircleCheckBig size={17} className="tick" strokeWidth={3} />
                  Interview Scheduled
                </p>
                <p id="application-para">
                  <CircleCheckBig size={17} strokeWidth={3} className="tick" />
                  Appiered for Interview
                </p>
                <p id="application-para">
                  <CircleCheckBig size={17} strokeWidth={3} className="tick" />
                  Selected
                </p>
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
                <p id="application-para">
                  <CircleCheckBig size={17} className="tick" strokeWidth={3} />
                  Applied
                </p>
                <p id="application-para">
                  <CircleCheckBig size={17} className="tick" strokeWidth={3} />
                  Sortlisted
                </p>
                <p id="application-para">
                  <CircleCheckBig size={17} className="tick" strokeWidth={3} />
                  Interview Scheduled
                </p>
                <p id="application-para">
                  <CircleCheckBig size={17} strokeWidth={3} className="tick" />
                  Appiered for Interview
                </p>
                <p id="application-para">
                  <CircleCheckBig size={17} strokeWidth={3} className="tick" />
                  Selected
                </p>
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
                <p id="application-para">
                  <CircleCheckBig size={17} className="tick" strokeWidth={3} />
                  Applied
                </p>
                <p id="application-para">
                  <CircleCheckBig size={17} className="tick" strokeWidth={3} />
                  Sortlisted
                </p>
                <p id="application-para">
                  <CircleCheckBig size={17} className="tick" strokeWidth={3} />
                  Interview Scheduled
                </p>
                <p id="application-para">
                  <CircleCheckBig size={17} strokeWidth={3} className="tick" />
                  Appiered for Interview
                </p>
                <p id="application-para">
                  <CircleCheckBig size={17} strokeWidth={3} className="tick" />
                  Selected
                </p>
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
                <p id="application-para">
                  <CircleCheckBig size={17} className="tick" strokeWidth={3} />
                  Applied
                </p>
                <p id="application-para">
                  <CircleCheckBig size={17} className="tick" strokeWidth={3} />
                  Sortlisted
                </p>
                <p id="application-para">
                  <CircleCheckBig size={17} className="tick" strokeWidth={3} />
                  Interview Scheduled
                </p>
                <p id="application-para">
                  <CircleCheckBig size={17} strokeWidth={3} className="tick" />
                  Appiered for Interview
                </p>
                <p id="application-para">
                  <CircleCheckBig size={17} strokeWidth={3} className="tick" />
                  Selected
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="recommended-jobs">
          <h2>Recommended Jobs</h2>
          <div className="Recommend-container">
            <div className="Recommend-1" id="Recommend">
              <div className="recommend-heading">
                <h4>UI Designer</h4>
                <EllipsisVertical />
              </div>
              <div className="detail-company">
                <h7>10.11</h7>
                <h7>Design</h7>
                <img src="/src/assets/tick.png" alt="" />
              </div>
              <div className="recommend-address">
                <div className="horizotal_dotted_line"></div>
                <p>
                  <MapPin size={17} />
                  Makarba,Ahmedabad
                </p>
                <p>
                  <User size={17} />
                  05 Vacancy
                </p>
                <div className="horizotal_dotted_line"></div>
                <button
                  className="button-main"
                  style={{ backgroundColor: buttonColor }}
                  onClick={handleClick}
                >
                  {buttonText}
                </button>
              </div>
            </div>
            <div className="Recommend-2" id="Recommend">
              <div className="recommend-heading">
                <h4 className="h4-1">Front End Devloper</h4>
                <EllipsisVertical />
              </div>
              <div className="detail-company">
                <h7>Tata Consultancy Services</h7>
                <img src="/src/assets/tick.png" alt="" />
              </div>
              <div className="recommend-address">
                <div className="horizotal_dotted_line"></div>
                <p>
                  <MapPin size={17} />
                  Makarba,Ahmedabad
                </p>
                <p>
                  <User size={17} />
                  05 Vacancy
                </p>
                <div className="horizotal_dotted_line"></div>
                <button
                  className="button-main"
                  style={{ backgroundColor: buttonColor2 }}
                  onClick={handleClick2}
                >
                  {buttonText2}
                </button>
              </div>
            </div>
            <div className="Recommend-3" id="Recommend">
              <div className="recommend-heading">
                <h4 className="h4-2">Product Designer</h4>
                <EllipsisVertical />
              </div>
              <div className="detail-company">
                <h7>Think Design</h7>
                <img src="/src/assets/tick.png" alt="" />
              </div>
              <div className="recommend-address">
                <div className="horizotal_dotted_line"></div>
                <p>
                  <MapPin size={17} />
                  Makarba,Ahmedabad
                </p>
                <p>
                  <User size={17} />
                  05 Vacancy
                </p>
                <div className="horizotal_dotted_line"></div>
                <button
                  className="button-main"
                  onClick={handleClick3}
                  style={{ backgroundColor: buttonColor3 }}
                >
                  {buttonText3}
                </button>
              </div>
            </div>
            <div className="Recommend-4" id="Recommend">
              <div className="recommend-heading">
                <h4 className="h4-3">UI Designer</h4>
                <EllipsisVertical />
              </div>
              <div className="detail-company">
                <h7>10.11</h7>
                <h7>Design</h7>
                <img src="/src/assets/tick.png" alt="" />
              </div>
              <div className="recommend-address">
                <div className="horizotal_dotted_line"></div>
                <p>
                  <MapPin size={17} />
                  Makarba,Ahmedabad
                </p>
                <p>
                  <User size={17} />
                  05 Vacancy
                </p>
                <div className="horizotal_dotted_line"></div>
                <button
                  className="button-main"
                  onClick={handleClick4}
                  style={{ backgroundColor: buttonColor4 }}
                >
                  {buttonText4}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="live-jobs">
          <div className="live-job-header">
            <h2>Live Jobs</h2>
            <div className="live-job-header-details"> 
            <Search className="search"/>
            <Filter className="search" />
            </div>
          </div>
          <div className="live-job-main-section">
            <div className="live-job-section-1" id="section">
              <div className="Recommend-1" id="Recommend">
                <div className="recommend-heading">
                  <h4 className="h4-3">UI Designer</h4>
                  <EllipsisVertical />
                </div>
                <div className="detail-company">
                  <h7>10.11</h7>
                  <h7>Design</h7>
                  <img src="/src/assets/tick.png" alt="" />
                </div>
                <div className="recommend-address">
                  <div className="horizotal_dotted_line"></div>
                  <p>
                    <MapPin size={17} />
                    Makarba,Ahmedabad
                  </p>
                  <p>
                    <User size={17} />
                    05 Vacancy
                  </p>
                  <div className="horizotal_dotted_line"></div>
                  <button
                    className="button-main"
                    onClick={handleClick5}
                    style={{ backgroundColor: buttonColor5 }}
                  >
                    {buttonText5}
                  </button>
                </div>
              </div>
              <div className="Recommend-1" id="Recommend">
                <div className="recommend-heading">
                  <h4 className="h4-2">Front End Devloper</h4>
                  <EllipsisVertical />
                </div>
                <div className="detail-company">
                  <h7>Tata Consultancy Services</h7>
                  <img src="/src/assets/tick.png" alt="" />
                </div>
                <div className="recommend-address">
                  <div className="horizotal_dotted_line"></div>
                  <p>
                    <MapPin size={17} />
                    Makarba,Ahmedabad
                  </p>
                  <p>
                    <User size={17} />
                    05 Vacancy
                  </p>
                  <div className="horizotal_dotted_line"></div>
                  <button
                    className="button-main"
                    onClick={handleClick6}
                    style={{ backgroundColor: buttonColor6 }}
                  >
                    {buttonText6}
                  </button>
                </div>
              </div>
              <div className="Recommend-1" id="Recommend">
                <div className="recommend-heading">
                  <h4 className="h4-1">Product Designer</h4>
                  <EllipsisVertical />
                </div>
                <div className="detail-company">
                  <h7>Think Design</h7>
                  <img src="/src/assets/tick.png" alt="" />
                </div>
                <div className="recommend-address">
                  <div className="horizotal_dotted_line"></div>
                  <p>
                    <MapPin size={17} />
                    Makarba,Ahmedabad
                  </p>
                  <p>
                    <User size={17} />
                    05 Vacancy
                  </p>
                  <div className="horizotal_dotted_line"></div>
                  <button
                    className="button-main"
                    onClick={handleClick7}
                    style={{ backgroundColor: buttonColor7 }}
                  >
                    {buttonText7}
                  </button>
                </div>
              </div>
              <div className="Recommend-1" id="Recommend">
                <div className="recommend-heading">
                  <h4>UI Designer</h4>
                  <EllipsisVertical />
                </div>
                <div className="detail-company">
                  <h7>10.11</h7>
                  <h7>Design</h7>
                  <img src="/src/assets/tick.png" alt="" />
                </div>
                <div className="recommend-address">
                  <div className="horizotal_dotted_line"></div>
                  <p>
                    <MapPin size={17} />
                    Makarba,Ahmedabad
                  </p>
                  <p>
                    <User size={17} />
                    05 Vacancy
                  </p>
                  <div className="horizotal_dotted_line"></div>
                  <button
                    className="button-main"
                    onClick={handleClick8}
                    style={{ backgroundColor: buttonColor8 }}
                  >
                    {buttonText8}
                  </button>
                </div>
              </div>
            </div>
            <div className="live-job-section-2" id="section">
              <div className="Recommend-1" id="Recommend">
                <div className="recommend-heading">
                  <h4 className="h4-2">UI Designer</h4>
                  <EllipsisVertical />
                </div>
                <div className="detail-company">
                  <h7>Tata Consultancy Services </h7>
                  <img src="/src/assets/tick.png" alt="" />
                </div>
                <div className="recommend-address">
                  <div className="horizotal_dotted_line"></div>
                  <p>
                    <MapPin size={17} />
                    Makarba,Ahmedabad
                  </p>
                  <p>
                    <User size={17} />
                    05 Vacancy
                  </p>
                  <div className="horizotal_dotted_line"></div>
                  <button
                    className="button-main"
                    onClick={handleClick9}
                    style={{ backgroundColor: buttonColor9 }}
                  >
                    {buttonText9}
                  </button>
                </div>
              </div>
              <div className="Recommend-1" id="Recommend">
                <div className="recommend-heading">
                  <h4 className="h4-1">UI Designer</h4>
                  <EllipsisVertical />
                </div>
                <div className="detail-company">
                  <h7>10.11</h7>
                  <h7>Design</h7>
                  <img src="/src/assets/tick.png" alt="" />
                </div>
                <div className="recommend-address">
                  <div className="horizotal_dotted_line"></div>
                  <p>
                    <MapPin size={17} />
                    Makarba,Ahmedabad
                  </p>
                  <p>
                    <User size={17} />
                    05 Vacancy
                  </p>
                  <div className="horizotal_dotted_line"></div>
                  <button
                    className="button-main"
                    onClick={handleClick10}
                    style={{ backgroundColor: buttonColor10 }}
                  >
                    {buttonText10}
                  </button>
                </div>
              </div>
              <div className="Recommend-1" id="Recommend">
                <div className="recommend-heading">
                  <h4>UI Designer</h4>
                  <EllipsisVertical />
                </div>
                <div className="detail-company">
                  <h7> Think Design</h7>
                  <img src="/src/assets/tick.png" alt="" />
                </div>
                <div className="recommend-address">
                  <div className="horizotal_dotted_line"></div>
                  <p>
                    <MapPin size={17} />
                    Makarba,Ahmedabad
                  </p>
                  <p>
                    <User size={17} />
                    05 Vacancy
                  </p>
                  <div className="horizotal_dotted_line"></div>
                  <button
                    className="button-main"
                    onClick={handleClick11}
                    style={{ backgroundColor: buttonColor11 }}
                  >
                    {buttonText11}
                  </button>
                </div>
              </div>
              <div className="Recommend-1" id="Recommend">
                <div className="recommend-heading">
                  <h4 className="h4-3">UI Designer</h4>
                  <EllipsisVertical />
                </div>
                <div className="detail-company">
                  <h7>10.11</h7>
                  <h7>Design</h7>
                  <img src="/src/assets/tick.png" alt="" />
                </div>
                <div className="recommend-address">
                  <div className="horizotal_dotted_line"></div>
                  <p>
                    <MapPin size={17} />
                    Makarba,Ahmedabad
                  </p>
                  <p>
                    <User size={17} />
                    05 Vacancy
                  </p>
                  <div className="horizotal_dotted_line"></div>
                  <button
                    className="button-main"
                    onClick={handleClick12}
                    style={{ backgroundColor: buttonColor12 }}
                  >
                    {buttonText12}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
