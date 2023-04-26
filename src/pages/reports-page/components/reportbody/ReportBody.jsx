import "./reportbody.css";
import React from "react";
import { list1 } from "../ReportsData";
import { GoPrimitiveDot } from "react-icons/go";
import report1 from "../../../../assets/reports/reports-1.png";
import report2 from "../../../../assets/reports/reports-2.png";
import report3 from "../../../../assets/reports/reports-3.png";

export default function ReportBody() {
  return (
    <div className="reports__body--container">
      <div className="reports__body--even">
        <div className="report__body--text">
          <h1>{list1[0].title}</h1>
          <p> {list1[0].subtitle} </p>
        </div>
        <div className="reports__even--content">
          <div className="reports__list--even">
            <ul>
              <li>{list1[0].text1}</li>
              <li>{list1[0].text2}</li>
              <li>{list1[0].text3}</li>
            </ul>
          </div>
          <div className="report__body--img">
            <img src={report1} alt="reports" />
          </div>
        </div>
      </div>
      <div className="reports__body--odd">
        <div className="report__body--text">
          <h1>{list1[1].title}</h1>
          <p> {list1[1].subtitle} </p>
        </div>
        <div className="reports__odd--content">
          <div className="reports__list--odd">
            <ul>
              <li>{list1[1].text1}</li>
              <li>{list1[1].text2}</li>
              <li>{list1[1].text3}</li>
            </ul>
          </div>
          <div className="report__body--img">
            <img src={report2} alt="reports" />
          </div>
        </div>
      </div>
      <div className="reports__body--even">
        <div className="report__body--text">
          <h1>{list1[2].title}</h1>
          <p> {list1[2].subtitle} </p>
        </div>
        <div className="reports__even--content">
          <div className="reports__list--even">
            <ul>
              <li>{list1[2].text1}</li>
              <li>{list1[2].text2}</li>
              <li>{list1[2].text3}</li>
            </ul>
          </div>
          <div className="report__body--img">
            <img src={report3} alt="reports" />
          </div>
        </div>
      </div>
    </div>
  );
}
