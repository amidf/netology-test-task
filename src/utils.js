export const countCourses = (groups) =>
  groups.reduce((acc, cur) => {
    return acc + cur.items.length;
  }, 0);

export const createPreloader = () => {
  const container = document.createElement("div");
  container.classList.add("loader-container");

  const loader = document.createElement("div");
  loader.classList.add("loader");

  container.append(loader);

  return container;
};

export const createList = (groups) => {
  const container = document.createElement("ul");

  container.classList.add("groups-list");

  groups.forEach((group) => {
    container.append(group);
  });

  return container;
};

export const createGroupElement = (group) => {
  const container = document.createElement("li");
  container.classList.add("group-container");

  const title = document.createElement("h2");
  title.classList.add("group-title");
  title.textContent = group.title;

  const total = document.createElement("p");
  total.classList.add("group-total");
  total.textContent = `${group.total} курсов`;

  container.append(title);
  container.append(total);

  return container;
};

export const createTitle = () => {
  const title = document.createElement("h1");
  const subText = document.createElement("span");

  title.textContent = "Изучайте ";
  title.classList.add("title");
  subText.textContent = "актуальные темы";

  title.append(subText);

  return title;
};
