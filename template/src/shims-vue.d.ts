declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}
declare module 'js-cookie';
declare module 'querystring';
declare module 'vue/types/vue' {
  interface Vue {
    $layer: any;
    $router: any;
  }
}
