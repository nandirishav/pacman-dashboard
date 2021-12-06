import React, { forwardRef } from "react";
import { BiSearchAlt } from "react-icons/bi";

// expanded state        -----  classes - each-flex-cell isExpanded=true, expanded
// not expanded state    -----  classes- each-flex-cell isExpanded = false

export default forwardRef((props, ref) => {
  //   console.log(ref);
  return (
    <div
      ref={ref}
      onClick={() => {
        props.clickHandler(props.cardState);
        console.log(ref.current);
      }}
      className={props.updatedClass}
    >
      {/* <div className="box-cell-head-wrapper">
        <span className="box-cell-head">COST</span>
      </div>
      <div className="box-cell-body">
        $24.0K
        <div className="box-cell-body-unit">
          <span>/Day</span>
          <span>Run Rate</span>
        </div>
      </div>
      <div className="box-cell-footer">
        <div>$0.40</div>
        <div className="box-cell-footer-unit">/Instance HR</div>
      </div> */}
    </div>
  );
});
