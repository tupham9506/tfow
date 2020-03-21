export const state = () => ({
  flowId: 1,
  flowList: [{
    id: 1,
    nodes: [{
      title: 'Chuyển sang In progess',
      component: 'change-status',
      change_column_name: 'done',
      position: 'bottom'
    }]
  }]
});

export const getters = {
  selectedFlow: (state) => {
    const flow = state.flowList.filter((flow) => {
      return flow.id === state.flowId;
    });
    return flow ? flow[0] : null;
  }
};

export const namespaced = true;
