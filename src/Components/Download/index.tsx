import React from "react";
import "./style.scss";
import "react-activity/dist/library.css";
import DownloadIcon from "../DownloadIcon";
const Download = () => {
  return (
    <div className="main-download">
      <div className="download">
        <h2>Certification</h2>

        <div style={{ overflowX: "auto",padding:'10px' }}>
          <table >
            <tr>
              <th>Certificate</th>
              <th>Title</th>
              <th>Download</th>
            </tr>
            <tr>
              <td>
                <a href="/img/Cv.png" title="Click to Preview" >
                  <img
                    src="/img/Cv.png"
                    alt="EDU_IMG"
                    width="104"
                    height="142"
                  />
                </a>
              </td>
              <td>Responsive Web Design</td>
              <td> <a href="/img/Cv.png" download>
                <DownloadIcon/>
                </a></td>
            </tr>
            <tr>
              <td>
              <a href="/img/Cv.png" title="Click to Preview" >
                  <img
                    src="/img/Cv.png"
                    alt="EDU_IMG"
                    width="104"
                    height="142"
                  />
                </a>
              </td>
              <td>React Js</td>
              <td> <a href="/img/Cv.png" download>
                <DownloadIcon />
                </a></td>
            </tr>
            <tr>
              <td>
              <a href="/img/Cv.png" title="Click to Preview" >
                  <img
                    src="/img/Cv.png"
                    alt="EDU_IMG"
                    width="104"
                    height="142"
                  />
                </a>
              </td>
              <td>Intership</td>
              <td> <a href="/img/Cv.png" download>
                <DownloadIcon />
              </a>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Download;
