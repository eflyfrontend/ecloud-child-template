<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {mapState} from 'vuex';
    import SharedModule from '@/shared';

    @Component({
        components: {},
    })
    export default class Home extends Vue {
        public $router: any;
        public $route: any;

        private mounted() {
            const shared = SharedModule.getShared();
            Vue.prototype.shared = shared;
        }
    }
</script>
<style>

	#app {
		font-family: 微软雅黑 Regular,Microsoft Yahei,Hiragino Sans GB,Helvetica Neue,Arial,sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #555;
	}

	#nav {
		padding: 30px;
	}

	#nav a {
		font-weight: bold;
		color: #555;
	}

	#nav a.router-link-exact-active {
		color: #42b983;
	}
</style>
