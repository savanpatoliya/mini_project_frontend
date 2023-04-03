import React from "react";

import SideNavbar from "../../component/SideNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import { useDashboradContext } from "../../context/dashboard_context";
import NewCart from "./newCart/NewCart";
import Boards from "./Boards/Boards";

function KanbanBoard() {
  const {} = useDashboradContext();
  return (
    <>
        <div style={{ height: "10%" }}>
          <div className="d-flex justify-content-between align-items-center h-100">
            <div>KanbanBoard</div>
            <div>
              <button type="button" class="btn btn-outline-primary">
                Add New
              </button>
            </div>
          </div>
        </div>
        <div style={{height:'80%'}}>
            <Boards/>
        </div>
        
    </>
  );
}

export default KanbanBoard;
