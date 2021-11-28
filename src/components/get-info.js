export default class GetInfo {
  _apiBase = "https://swapi.dev/api";
  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch, received ${res.status}`);
    }
    return await res.json();
  }

  async getAllFilms() {
    const result = await this.getResource(`/films/`);
    return result.results;
  }

  getFilm(id) {
    return this.getResource(`/films/${id}/`);
  }
}
