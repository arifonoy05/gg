import { useState } from "react";
import api from "../api/api";

const MenuFormUtil = () => {
  const _blankMenu = {
    menu_URL: "",
    has_LINK: 0,
    api_PARENT: 0,
    is_PARENT: 0,
    parent_ID: 0,
    check_FULL_PATH: 0,
    active: 0,
    description: "",
    name: "",
    icon_CLASS: "",
    is_SIDEBAR_MENU: 0,
    priority: 0,
    updated_BY_USERNAME: "",
    created_BY_USERNAME: "",
    created_BY: "",
    created_AT: "",
    updated_BY: 0,
    updated_AT: 0,
  };

  const [newMenu, setNewMenu] = useState(_blankMenu);

  const onChangeHandler = (e) => {
    setNewMenu({ ...newMenu, [e.target.name]: e.target.value });
  };

  const [active, setActive] = useState(false);
  const toggleActive = (e) => {
    setActive(e.target.checked);
    active
      ? setNewMenu({ ...newMenu, [e.target.name]: 0 })
      : setNewMenu({ ...newMenu, [e.target.name]: 1 });
  };

  const [has_LINK, setHas_LINK] = useState(false);
  const toggleHas_LINK = (e) => {
    setHas_LINK(e.target.checked);
    has_LINK
      ? setNewMenu({ ...newMenu, [e.target.name]: 0 })
      : setNewMenu({ ...newMenu, [e.target.name]: 1 });
  };

  const [is_PARENT, setIs_PARENT] = useState(false);
  const toggleIs_PARENT = (e) => {
    setIs_PARENT(e.target.checked);
    is_PARENT
      ? setNewMenu({ ...newMenu, [e.target.name]: 0 })
      : setNewMenu({ ...newMenu, [e.target.name]: 1 });
  };

  const [is_SIDEBAR_MENU, setIs_SIDEBAR_MENU] = useState(false);
  const toggleIs_SIDEBAR_MENU = (e) => {
    setIs_SIDEBAR_MENU(e.target.checked);
    is_SIDEBAR_MENU
      ? setNewMenu({ ...newMenu, [e.target.name]: 0 })
      : setNewMenu({ ...newMenu, [e.target.name]: 1 });
  };

  const formSubmitHandler = (e) => {
    api.post("/menu/add", newMenu).then((res) => res.data);
    setNewMenu(_blankMenu);
  };

  return {
    _blankMenu,
    newMenu,
    setNewMenu,
    onChangeHandler,
    active,
    setActive,
    toggleActive,
    has_LINK,
    setHas_LINK,
    toggleHas_LINK,
    is_PARENT,
    setIs_PARENT,
    toggleIs_PARENT,
    is_SIDEBAR_MENU,
    setIs_SIDEBAR_MENU,
    toggleIs_SIDEBAR_MENU,
    formSubmitHandler,
  }
};

export default MenuFormUtil;
