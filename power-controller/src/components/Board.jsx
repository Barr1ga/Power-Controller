import React, { useState } from "react";
import { IoWarningOutline } from "react-icons/io5";
import { FiEyeOff, FiEye } from "react-icons/fi";

export const Board = ({ lab }) => {
  const { circuits, name } = lab;
  const [showBoard, setShowBoard] = useState(true);
  const [switches, setSwitches] = useState(
    circuits.map((circuit) => circuit.switch)
  );

  console.log(switches);

  const handleCircuitChange = (idx) => {
    const tempData = switches;
    tempData[idx] = !tempData[idx];
    setSwitches(tempData);
    console.log(switches);
  };

  const handleShowBoard = (e) => {
    setShowBoard((prev) => !prev);
  };

  const handleShowBoardTrue = (e) => {
    if (!showBoard) {
      setShowBoard(true);
    }
  };

  console.log(showBoard);
  return (
    <div className="board" onClick={handleShowBoardTrue}>
      <div className="container standard-stack gap-5">
        <div className="board-header">
          <h3>{name}</h3>
          {showBoard ? (
            <FiEyeOff onClick={handleShowBoard}></FiEyeOff>
          ) : (
            <FiEye onClick={handleShowBoard}></FiEye>
          )}
        </div>
        <small>This is a description message.</small>
        {/* Circuit #2 */}
        {showBoard && (
          <>
            <br></br>
            <div className="panel-header">
              <div className="left header-label">Circuit Number</div>
              <div className="right header-label">Status</div>
            </div>
            {/* <hr></hr> */}

            {circuits.map((circuit, idx) => (
              <div key={idx} className="panel">
                <span className="left">
                  <div className="label">{circuit.label}</div>
                  <small>{circuit.description}</small>
                </span>
                <div className="right">
                  {circuit.status === "active" && (
                    <div className="status-active">
                      <div className="circle"></div>Active
                    </div>
                  )}

                  {circuit.status === "error" && (
                    <div className="status-error">
                      <div className="circle"></div>Inactive
                    </div>
                  )}

                  {circuit.status === "warning" && (
                    <div className="status-warning">
                      <div className="circle"></div>Warning
                    </div>
                  )}

                  <div className="switch">
                    <label class="form-switch">
                      <input
                        type="checkbox"
                        defaultChecked={circuit.switch}
                        onChange={() => handleCircuitChange(idx)}
                      />
                      <i></i>
                    </label>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};
