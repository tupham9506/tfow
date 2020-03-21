import sidebar from '@components/github/sidebar';
import issue from '@components/github/issue';
export default {
  name: 'github',
  layout: 'github',
  components: { sidebar, issue },
  props: [],
  data () {
    return {
      issue: null
    };
  },
  computed: {
  },
  mounted () {
  },
  methods: {
    selectCard (card) {
      this.issue = card.issue;
    }
  }
};
