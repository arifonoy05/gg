import React, { useState } from "react";

const ResponsibilityFormUtil = () => {
  const _blankResponsibility = {
    description: "",
    active: 0,
    name: "",
  };
  const [newRes, setNewRes] = useState(_blankResponsibility);

  return { newRes, setNewRes, _blankResponsibility };
};

export default ResponsibilityFormUtil;
