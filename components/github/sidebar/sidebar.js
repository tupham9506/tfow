import board from '@components/github/board';

export default {
  name: 'sidebar',
  components: {
    board
  },
  props: [],
  data () {
    return {
      repoList: null,
      projectList: null,
      columnList: null,
      cardList: null,
      commentList: null
    };
  },
  computed: {
  },
  async mounted () {
    // Get repo list
    await this.$store.dispatch('github/repo/getList');
  },
  methods: {
    async onSelectRepo (fullName) {
      await this.$store.github.issue.getList(fullName);
      await this.getProjectList(fullName);
    },
    async getProjectList (fullName) {
      const res = await this.request({
        url: this.API.GITHUB.PROJECT,
        data: {
          full_name: fullName
        }
      });
      if (!res.req_success) {
        return false;
      }
      this.projectList = res.data;
    },
    async getColumnList (id) {
      const res = await this.request({
        url: this.API.GITHUB.COLUMN,
        data: {
          id
        }
      });
      if (!res.req_success) {
        return false;
      }
      const columnList = res.data;
      let i, j, cardList, splitContentArray, issueNumber;
      for (i in columnList) {
        cardList = await this.getCardList(columnList[i].id);
        for (j in cardList) {
          splitContentArray = cardList[j].content_url.split('/');
          issueNumber = splitContentArray[splitContentArray.length - 1];
          cardList[j].issue = this.issueList[issueNumber];
          cardList[j].issue.column_id = columnList[i].id;
          cardList[j].issue.card_id = cardList[j].id;
        }
        columnList[i].card_list = cardList;
      }
      this.columnList = columnList;
      this.$store.commit('github/column/setList', columnList);
    },
    async getCardList (columnId) {
      const res = await this.request({
        url: this.API.GITHUB.CARD,
        data: {
          column_id: columnId,
          per_page: 100
        }
      });
      if (!res.req_success) {
        return false;
      }
      return res.data;
    },
    selectCard (card) {
      this.$emit('select-card', card);
    }
  }
};
