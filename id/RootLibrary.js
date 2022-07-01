import { Col, Row } from "antd";
import { dummy } from "./dummyData";
import styles from "./rootlibrary.module.sass";
import calendar from "./images/calendar.svg";
import upload from "./images/upload.svg";
import adobe from "./images/adobe.svg";
import folderImg from "./images/folder.svg";
import { useState } from "react";

function RootLibrary() {
  const [show, setShow] = useState(false);
  const [showId, setShowId] = useState("");
  const [active, setActive] = useState(false);

  return (
    <div className="container">
      <div className="d-flex justify-content-between justify-content-center align-items-center ">
        <div
          className={`${styles.hrHeading} justify-content-center align-items-center`}
        >
          HumanResource
        </div>

        <div>
          <div className="d-flex justify-content-center align-items-center ">
            <div>
              <img src={calendar} alt="" />
            </div>
            <div className={`${styles.hrDate} px-3`}>
              4 Jumad-I, 1443 - 8:30 AM
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.hrVerticalLine}`}></div>
      <div className={`${styles.hrHeading} pt-2`}>Documents & Files</div>

      <div className={`pt-2 d-flex align-items-center`}>
        <div className={`${styles.departmentHomeRouteTitle}`}>Spaces</div>
        <div className={`${styles.departmentHomeRouteDot} `}>
          <i className="fa fa-circle px-3"></i>
        </div>
        <div className={`${styles.departmentHomeRouteTitle}`}>
          Human Resource
        </div>
        <div
          className={`${styles.departmentHomeRouteDot} ${styles.colorGreyDot}`}
        >
          <i className="fa fa-circle px-3"></i>
        </div>
        <div className={`${styles.departmentHomeRouteTab}`}>
          Documents & Files
        </div>
      </div>

      <div className={`${styles.hrVerticalLine}`}></div>

      <div className="d-flex justify-content-between pt-4">
        <div>
          <button className={`${styles.hrButton1} `}>
            <img src={upload} alt="" className="px-2" /> Upload
          </button>
          <button className={`${styles.hrFolderAction} mx-2 `}>
            {" "}
            Folder Action <i class="fa-solid fa-chevron-down"></i>
          </button>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div className="px-2">sort by</div>
          <button className={`${styles.hrNewestButton}`}>Newest</button>
          <button className={`${styles.hrAzButton}`}>A-Z</button>
          <button className={`${styles.hrFolderAction} mx-2 `}>
            {" "}
            File Action <i class="fa-solid fa-chevron-down"></i>
          </button>
        </div>
      </div>
      <div className={`${styles.hrVerticalLine}`}></div>
      <div>
        <Row>
          <Col xs={0} sm={0} md={6} lg={6} xl={6}>
            <div className="pt-2">
              <div className="d-flex">
                <img src={folderImg} alt="" />
                <div onClick={() => setShow(!show)} className="px-2">
                  Root
                </div>
              </div>
            </div>
            {show && (
              <div>
                {dummy.map((file) => {
                  return (
                    <div className="px-4">
                      <div className="d-flex pt-2">
                        <div>
                          <img src={folderImg} alt="" />
                        </div>
                        <div
                          className="px-2"
                          onClick={() => {
                            setShowId(file.id);
                            if (active && showId !== file.id) {
                              setActive(true);
                            } else {
                              setActive(!active);
                            }
                          }}
                        >
                          {file.title}
                        </div>
                      </div>

                      {active && showId === file.id && (
                        <>
                          {/* {file.children.map((child) => ( */}
                          <div className="d-flex px-4 pt-2">
                            <img src={folderImg} alt="" />
                            <div
                              className="px-2"
                              onClick={() => {
                                setShowId(file.children.id);
                                // setDoc(!doc);
                              }}
                            >
                              {file.children.title}
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </Col>

          //right
          <Col xs={0} sm={0} md={18} lg={18} xl={18}>
            <div className={`d-flex justify-content-between flex-column`}>
              {dummy.map((data) => {
                if (showId === data.id) {
                  return (
                    <>
                      <div
                        className={`d-flex justify-content-between ${styles.verticalLine}`}
                      >
                        <div className="d-flex pt-2 px-2">
                          <div>
                            <img src={adobe} alt="" />
                          </div>
                          <div className="px-2">
                            <div className={`${styles.hrInfra}`}>
                              {data.doc.name}
                            </div>
                            <br />
                            <div>created : {data.doc.created} </div>
                            <br />
                            <div>updated : {data.doc.updated}</div>
                            <br />
                          </div>
                        </div>

                        <div className="pt-3">{data.doc.size}</div>
                        <div className="d-flex align-items-center px-3">
                          <input
                            className="form-check-input "
                            style={{
                              width: "30px",
                              height: "30px",
                              backgroundColor: "#F2F2F2",
                            }}
                            type="checkbox"
                            value=""
                          />
                        </div>
                      </div>
                    </>
                  );
                } else if (showId === data.children.id) {
                  return (
                    <>
                      <div
                        className={`d-flex justify-content-between ${styles.verticalLine}`}
                      >
                        <div className="d-flex pt-2 px-2">
                          <div>
                            <img src={adobe} alt="" />
                          </div>
                          <div className="px-2">
                            <div className={`${styles.hrInfra}`}>
                              {data.children.doc.name}
                            </div>
                            <br />
                            <div>created : {data.children.doc.created} </div>
                            <br />
                            <div>updated : {data.children.doc.updated}</div>
                            <br />
                          </div>
                        </div>

                        <div className="pt-3">{data.children.doc.size}</div>
                        <div className="d-flex align-items-center px-3">
                          <input
                            className="form-check-input "
                            style={{
                              width: "30px",
                              height: "30px",
                              backgroundColor: "#F2F2F2",
                            }}
                            type="checkbox"
                            value=""
                          />
                        </div>
                      </div>
                    </>
                  );
                }
              })}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default RootLibrary;
