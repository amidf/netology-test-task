import { countCourses } from "./utils";

class Api {
  #API_URL =
    "https://raw.githubusercontent.com/netology-code/ajs-task/master/netology.json";

  async fetchGroups() {
    const res = await fetch(this.#API_URL);
    const { data } = await res.json();
    const normalizedData = data.map(({ direction, groups }) => ({
      title: direction.title,
      total: countCourses(groups),
    }));

    return normalizedData;
  }
}

export default new Api();
