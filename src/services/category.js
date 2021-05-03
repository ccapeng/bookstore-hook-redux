import Request, { getFullURL } from "./request";

const CategoryService = {
  listURL:() => {
    let url = "api/categories";
    return getFullURL(url);
  },
  getURL: (categoryId) => {
    let url = `api/categories/${categoryId}`;
    return getFullURL(url);
  },
  saveURL: (id) => {
    let url = "api/categories";
    if (id !== 0) {
      url = `api/categories/${id}`;
    }
    return getFullURL(url);
  },

  deleteURL: (id) => {
    let url = `api/categories/${id}`;
    return getFullURL(url);
  },

  list: () => {
    let url = "api/categories";
    return Request.get(url);
  },
  get: (categoryId) => {
    let url = `api/categories/${categoryId}`;
    return Request.get(url);
  },
  save: (category) => {
    if (category.id === 0) {
      const body = JSON.stringify({ name: category.name });
      let url = "api/categories";
      return Request.create(url, body);
    } else {
      const body = JSON.stringify(category);
      let url = `api/categories/${category.id}`;
      return Request.update(url, body);
    }
  },
  delete: (categoryId) => {
    let url = `api/categories/${categoryId}/`;
    return Request.delete(url);
  }
}

export default CategoryService;