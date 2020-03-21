import draggable from 'vuedraggable';
import changeStatus from '@components/github/change-status';

export default {
  name: 'issue',
  components: {
    draggable,
    changeStatus
  },
  props: ['issue'],
  data () {
    return {

    };
  },
  computed: {
    flow () {
      return this.$store.getters['github/flow/selectedFlow'];
    }
  },
  mounted () {
  },
  methods: {
  }
};
