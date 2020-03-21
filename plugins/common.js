import Vue from 'vue';
import axios from 'axios';
import _ from 'lodash';
import * as Cookies from 'js-cookie';
import config from './config';

const common = {
  async request (input) {
    const options = _.cloneDeep(input, true);
    // Handle url
    let url = options.url;
    if (options.data) {
      let i, regex;
      for (i in options.data) {
        regex = new RegExp('{' + i + '}', 'g');
        if (url.search(regex) >= 0) {
          url = url.replace(regex, options.data[i]);
          delete options.data[i];
        }
      }
    }

    let response = {};
    try {
      response = await axios({
        url,
        data: options.data,
        params: options.data,
        method: options.method || 'get',
        headers: {
          Authorization: 'Basic ' + Cookies.get('tflow.github.user.token'),
          Accept: 'application/vnd.github.inertia-preview+json'
        }
      });
      response.req_success = true;
    } catch (e) {
      response = e.response;
      response.req_success = false;
    }
    return response;
  },
  mergeObject (oldObj, newObj) {
    let i;
    for (i in newObj) {
      oldObj[i] = newObj[i];
    }
    return oldObj;
  }
};

Vue.mixin({
  data () {
    return config;
  },
  methods: common
});

export default common;
