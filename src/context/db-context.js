import React from "react";

const DBContext = React.createContext({
  dbData: [],
  setDbData: () => {}
});

export default DBContext;
