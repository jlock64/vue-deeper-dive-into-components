import { createApp } from 'vue';

import App from './App.vue';
// import TheHeader from './components/TheHeader.vue';
import BaseBadge from './components/BaseBadge.vue';
import BaseCard from './components/BaseCard'
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';

const app = createApp(App);

// these are "global" components and can use them anywhere in the app
// downside is that Vue needs to download all this code initially and could be a problem for larger applications
// app.component('the-header', TheHeader);

// the component below is used in multiple places so here it is ok for a global component
app.component('base-badge', BaseBadge);
app.component('base-card', BaseCard);
// app.component('badge-list', BadgeList);
// app.component('user-info', UserInfo);

app.mount('#app');
