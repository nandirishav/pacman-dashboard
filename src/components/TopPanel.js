import { FaFilter } from "react-icons/fa";

const TopPanel = () => {
  return (
    <div className="top-panel">
      <div className="panel-left">
        <div className="inner-panel-left">
          <div className="inner-panel-left-wrapper">
            <FaFilter className="filter-icon" />
            <span className="left-label">ALL APPLICATIONS</span>
          </div>
        </div>
        <div className="inner-panel-right">
          <div className="inner-panel-right-second-wrapper">
            <label className="left-label">APPLICATION STATUS :</label>
            <ul className="inner-panel-right-items">
              <li className="item">
                <span
                  style={{
                    color: "#ed0295",
                    paddingRight: "5px",
                    fontWeight: "600",
                  }}
                >
                  43
                </span>{" "}
                PRODUCTION
              </li>
              <li className="item">
                <span
                  style={{
                    color: "#ed0295",
                    paddingRight: "5px",
                    fontWeight: "600",
                  }}
                >
                  7
                </span>{" "}
                BUILD
              </li>
              <li className="item">
                <span
                  style={{
                    color: "#ed0295",
                    paddingRight: "5px",
                    fontWeight: "600",
                  }}
                >
                  5
                </span>{" "}
                INTAKE
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="panel-right">
        <div className="panel-right-inner-wrapper">
          <div className="security">SECURITY</div>
          <div className="pane-child-right-circle"></div>
        </div>
      </div>
    </div>
  );
};

export default TopPanel;
