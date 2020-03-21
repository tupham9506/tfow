import { convertToStandard } from '@utils/text';
// import common from '@plugins/common';
// import _ from 'lodash';

export const state = () => ({
  list: null
});

export const getters = {
  getList (state) {
    return state.list;
  },
  getById (state, id) {
    return (id) => {
      const column = state.list.filter((column) => {
        return column.id === id;
      });
      return column ? column[0] : null;
    };
  },
  getByName (state) {
    return (name) => {
      const column = state.list.filter((column) => {
        return convertToStandard(column.name) === convertToStandard(name);
      });
      return column ? column[0] : null;
    };
  }
};

export const mutations = {
  setList (state, data) {
    state.list = data;
  },
  moveCard (state, data) {
    // let coumnIndex = _.findIndex(state, {id: data.from});
  }
};

export const action = {
  // getColumnList () {

  // }
};

export const namespaced = true;
