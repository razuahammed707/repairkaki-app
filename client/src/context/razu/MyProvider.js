import React, { useState } from "react";
import PackageContext from "./MyContext"

const provider = props => {
  const [state, setState] = useState({
    companyName: "DHL Delivery Package",
    recipientName: "Mr Adekoya Damola Felix",
    package: "MacBook Pro retina Display (20Kg)",
    deliveryStatus: "Delivery In Progress..."

  });
  return (
   <PackageContext.Provider
      value={{
        data: state,
        updateDeliveryStatus: () => {
          setState({ ...state, deliveryStatus: "Delivered" });
        }
      }}
    >
      {props.children}
    </PackageContext.Provider>
  );
};

export default provider;