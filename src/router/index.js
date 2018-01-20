import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import About from '@/components/About';
import Albums from '@/components/Albums';
import Album from '@/components/Album';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/about-bmth',
			name: 'About',
			component: About
		},
		{
			path: '/albums',
			name: 'Albums',
			component: Albums
		},
		{
			path: '/albums/:id',
			name: 'Album',
			component: Album
		}
	]
});
