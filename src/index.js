import "regenerator-runtime/runtime.js";

import {
  createGroupElement,
  createList,
  createTitle,
  createPreloader,
} from "./utils";
import api from "./api";
import "./css/index.css";

const preloader = createPreloader();
document.body.append(preloader);

const init = async () => {
  const container = document.querySelector("#root");
  const groups = await api.fetchGroups();
  const groupsElems = groups.map((group) => createGroupElement(group));
  const list = createList(groupsElems);
  const title = createTitle();

  container.append(title);
  container.append(list);

  document.body.classList.add("loaded");
};

window.addEventListener("load", init);
