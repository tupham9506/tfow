
export default {
  name: 'board',
  components: {},
  props: ['columnList'],
  data () {
    return {

    };
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    selectCard (card) {
      this.$emit('select-card', card);
    }
  }
};
