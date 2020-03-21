const API = {
  GITHUB: {
  }
};

// GITHUB api
API.GITHUB.BASE = 'https://api.github.com';
API.GITHUB.LOGIN = 'https://api.github.com/user';
API.GITHUB.ISSUE = `${API.GITHUB.BASE}/repos/{full_name}/issues`;
API.GITHUB.REPO = `${API.GITHUB.BASE}/user/repos`;
API.GITHUB.PROJECT = `${API.GITHUB.BASE}/repos/{full_name}/projects`;
API.GITHUB.COLUMN = `${API.GITHUB.BASE}/projects/{id}/columns`;
API.GITHUB.CARD = `${API.GITHUB.BASE}/projects/columns/{column_id}/cards`;
API.GITHUB.MOVE_CARD = `${API.GITHUB.BASE}/projects/columns/cards/{card_id}/moves`;

const HTTP_CODE = {
  SUCCESS: 200,
  NOT_FOUND: 404
};

export default {
  API,
  HTTP_CODE
};
