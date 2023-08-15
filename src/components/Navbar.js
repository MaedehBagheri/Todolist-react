import React from "react";
import Filter from "./Filter";

function NavBar(props) {
  return (
    <header>
      {props.allCount ? (
        <div className="nav__incomplete">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <span>{props.allCount}</span>
            </div>
            <div className="nav__title">
              <h2>Task</h2>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <span>{props.completeCount}</span>
            </div>
            <div className="nav__title">
              <h2>Incomplete</h2>
            </div>
          </div>
        </div>
      ) : (
        <>
          {" "}
          <h2 className="nav__incomplete" style={{ justifyContent: "center" }}>
            add some todo
          </h2>
        </>
      )}

      <Filter
        filterTodos={props.filterTodos}
        setSelectedOption={props.setSelectedOption}
      />
    </header>
  );
}

export default NavBar;