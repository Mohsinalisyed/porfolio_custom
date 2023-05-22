import React from "react";
import "./style.scss";
import "react-activity/dist/library.css";
const Download = () => {
  return (
    <div className="main-download">
      <div className="download">
        <h1>Download</h1>

        <div style={{ overflowX: "auto",padding:'10px' }}>
          <table >
            <tr>
              <th>#id</th>
              <th>Image</th>
              <th>Degree</th>
              <th>Download</th>
            </tr>
            <tr>
              <td>1</td>
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
              <td>Matricpulation</td>
              <td> <a href="/img/Cv.png" download>
                Download
                </a></td>
            </tr>
            <tr>
            <td>2</td>
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
              <td>Intermediate</td>
              <td> <a href="/img/Cv.png" download>
                Download
                </a></td>
            </tr>
            <tr>
            <td>3</td>
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
              <td>Bacholer's CS</td>
              <td> <a href="/img/Cv.png" download>
                Download
                </a></td>
            </tr>
          </table>
        </div>
        <h4 className="text-right"><a href='/imgzip.zip' download className="text-dark">Download All</a></h4>
      </div>
    </div>
  );
};

export default Download;
