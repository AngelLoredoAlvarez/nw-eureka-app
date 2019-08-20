import React, { useRef } from "react";
import { IconButton, Tooltip } from "@material-ui/core";
import { Print } from "@material-ui/icons";
import ReactToPrint from "react-to-print";

class ComponentToPrint extends React.Component {
  render() {
    return <button>Angel</button>;
  }
}

export const CustomToolbarDebts = () => {
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

      <ComponentToPrint ref={componentRef} />
    </>
  );
};
