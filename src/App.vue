<template>
  <b-container id="app" fluid>
    <b-row>
      <b-col cols="12" sm="10" class="mt-2">
        <b-form-input v-model="url" type="email" placeholder="Url" @input="debounceMethod"></b-form-input>
      </b-col>
      <b-col cols="12" sm="2" class="mt-2">
        <copy-to-clipboard :content="url">
          Копіювати посилання
        </copy-to-clipboard>
      </b-col>
    </b-row>

    <b-row class="mt-4">
      <b-col v-for="(item, index) in data" :key="`${item.name}-${index}`" cols="12" md="4" lg="3">
        <b-card
            :img-src="item.url"
            img-alt="Image"
            img-top
            tag="article"
            class="mb-2"
        >
          <b-card-text>
            <a :href="item.url" target="_blank">{{ item.name }}</a>
          </b-card-text>

          <copy-to-clipboard :content="item.url">
            Копіювати посилання на зображення
          </copy-to-clipboard>
        </b-card>
      </b-col>
    </b-row>
  </b-container>

</template>

<script>
import debounce from 'lodash.debounce';
import CopyToClipboard from './components/CopyToClipboard';
import {RouterService} from './services/RouterService';
import {ApiHttpService} from './services/ApiHttpService';

const URL_QUERY_PARAM = 'url';
const router = new RouterService(URL_QUERY_PARAM);
const http = new ApiHttpService();

const TIMEOUT = 500;

export default {
  name: 'App',
  components: {
    CopyToClipboard,
  },
  data: () => ({
    url: '',
    data: [],
  }),
  created() {
    this.url = router.getQueryParam();
    this._getApiData();
  },
  methods: {
    debounceMethod: debounce(function () {
      router.setQueryParam(this.url);
      this._getApiData();
    }, TIMEOUT),

    async _getApiData() {
      if (!this.url) {
        return;
      }

      try {
        const {objects} = await http.getJson(this.url);
        this.data = objects.map(({name}) => ({
          name,
          url: `${this.url}${name}`,
        }));
      } catch (error) {
        console.error(error);
      }
    },
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
