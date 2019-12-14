import React, { useRef } from "react";
import { IconButton, Tooltip } from "@material-ui/core";
import { Print } from "@material-ui/icons";
import ReactToPrint from "react-to-print";
import { AllDebtsTableToPrint } from "./AllDebtsTableToPrint";

export const CustomToolbarDebts = ({ allClientsDebts }) => {
  const componentRef = useRef();

  return (
    <>
      <ReactToPrint
        trigger={() => (
          <Tooltip title="Imprimir">
            <IconButton>
              <Print />
            </IconButton>
          </Tooltip>
        )}
        content={() => componentRef.current}
      />

      <div style={{ display: "none" }}>
        <AllDebtsTableToPrint
          allClientsDebts={allClientsDebts}
          ref={componentRef}
        />
      </div>
    </>
  );
};
