import mainLogo from "../assets/logo.png";
import dashImg from "../assets/dash_img.png";
import dashboardStyles from "./Dashboard.module.css";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const sideNavRef = useRef("");

  const closeNav = () => {
    sideNavRef.current.style.left = "-350px";
  };

  const openNav = () => {
    sideNavRef.current.style.left = "0";
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row p-3 ps-">
          <div className="col-1 pt-3 text-end">
            <div ref={sideNavRef} className={`${dashboardStyles.sidenav}`}>
              <a className={`${dashboardStyles.closeBtn}`} onClick={closeNav}>
                <h1>&times;</h1>
              </a>
              <a>
                <img src={mainLogo} alt="" />
              </a>
              <a href="#">My profile</a>
              <a href="#">My contributions</a>
              <a href="#">My revision requests</a>
              <a href="#">Public records</a>
              <hr />
              <a href="#">Log out</a>
            </div>

            <span style={{ fontSize: "30px", cursor: "pointer" }} onClick={openNav}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="38px"
                viewBox="0 -960 960 960"
                width="38px"
                fill="#5f6368"
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </span>
          </div>
          <div className="col-4 ps-0">
            <Link to={"/"}>
              <img src={mainLogo} alt="" />
            </Link>
          </div>
        </div>
        <div className="text-center">
          <img src={dashImg} alt="" />
        </div>
        <h1 className="text-center mt-3" style={{ fontWeight: "600" }}>
          DASHBOARD
        </h1>
        <h1 className="text-center" style={{ fontWeight: "800", fontSize: "4rem" }}>
          Welcome Maher
        </h1>
        <h1 className={`${dashboardStyles.textFocusIn} text-center text-secondary`}>
          Embark on a wild journey through <br /> different historical eras.
        </h1>
      </div>
    </>
  );
};

export default Dashboard;
