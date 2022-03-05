import React, { useState } from "react";

const ResponsibilityUpdateUtil = () => {
  const _blankResponsibility = {
    description: "",
    active: 0,
    name: "",
  };
  const [updateRes, setUpdateRes] = useState(_blankResponsibility);

  return {_blankResponsibility, updateRes, setUpdateRes };
};

export default ResponsibilityUpdateUtil;
