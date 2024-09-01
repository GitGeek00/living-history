import mainLogo from "../../assets/logo.png";
import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import axios from "axios";
import PageA from "../../components/Pagination";
import { Link } from "react-router-dom";

const Olympic = () => {
  const [olympicData, setOlympicData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(200);

  useEffect(() => {
    async function getData() {
      const response = await axios.get("http://localhost:3000/api/v1/olympic" + "?page=" + currentPage);
      setOlympicData(response.data);
    }
    getData();
  }, [currentPage]);

  return (
    <>
      <style type="text/css">{`
      body {
background: rgb(14,14,14);
background: radial-gradient(circle, rgba(14,14,14,0.053658963585434205) 0%, rgba(255,145,77,0.11248249299719892) 100%);
      }
      .table {
        & th {
          padding: 20px 0;
        }
        & th:first-child {
          border-top-left-radius: 15px;
          padding-left: 20px
        }
        & td:first-child {
          padding-left: 20px
        }
        & th:last-child {
          border-top-right-radius: 15px;
        }
      }
    `}</style>
      <div className="container-fluid">
        <div className="row pt-3 ps-5">
          <div className="col-6 ps-5 ms-4">
            <Link to={"/"}>
              <img src={mainLogo} alt="" />
            </Link>
          </div>
        </div>
        <div className="container mt-4">
          <Table hover variant="dark">
            <thead>
              <tr>
                <th>Discipline</th>
                <th>Slug Game</th>
                <th>Event</th>
                <th>Gender</th>
                <th>Medal</th>
                <th>Athlete</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody style={{ borderRadios: "20px" }}>
              {olympicData.length > 0 ? (
                olympicData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.discipline_title}</td>
                    <td>{item.slug_game}</td>
                    <td>{item.event_title}</td>
                    <td>{item.event_gender}</td>
                    <td>{item.medal_type}</td>
                    <td>{item.athlete_full_name}</td>
                    <td>{item.country_3_letter_code}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td></td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </div>
      <div className="container text-center w-50 m-auto pt-3">
        <PageA className="w-50" currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
      </div>
    </>
  );
};

export default Olympic;
