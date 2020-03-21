
export default {
  name: 'change-status',
  components: {},
  props: ['data', 'node'],
  data () {
    return {

    };
  },
  computed: {
    currentColumn () {
      return this.$store.getters['github/column/getById'](this.data.column_id);
    },
    nextColumn () {
      return this.$store.getters['github/column/getByName'](this.node.change_column_name);
    }
  },
  mounted () {

  },
  methods: {
    async changeColumn () {
      const res = await this.request({
        url: this.API.GITHUB.MOVE_CARD,
        data: {
          card_id: this.data.card_id,
          column_id: this.nextColumn.id,
          position: this.node.position
        },
        method: 'post'
      });
      if (!res.req_success) {
        return false;
      }
      this.$store.commit('github/column/moveCard', {
        card_id: this.data.card_id,
        from_column_id: this.data.column_id,
        to_column_id: this.nextColumn.id
      });
    }
  }
};
