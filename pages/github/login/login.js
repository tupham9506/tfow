import * as Cookies from 'js-cookie';
import { hash } from '@utils/auth';

export default {
  name: 'login',
  layout: 'github',
  components: {},
  props: [],
  data () {
    return {
      username: '',
      password: '',
      loginError: false
    };
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    async login () {
      const token = hash(this.username, this.password);
      this.$store.commit('github/user/updateToken', token);
      Cookies.set('tflow.github.user.token', token, { path: '/' });
      const res = await this.request({
        url: this.API.GITHUB.LOGIN
      });
      this.loginError = true;
      if (!res.req_success) {
        return false;
      }
      this.$router.push('/github');
    }
  }
};
