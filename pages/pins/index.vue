<template>
		<m-nav-bar>
			<template v-slot:title>沸点</template>
			<template v-slot:right>
				<text class="iconfont icon-search"></text>
				<text class="iconfont icon-tianjia"></text>
			</template>
			<template v-slot:content>
				<top-tabbar></top-tabbar>
			</template>
		</m-nav-bar>
</template>

<script>
	import TopTabbar from './top-tabbar.vue'
	
	import {
		mapState,
		mapActions
	} from 'vuex'

	export default {
		components: {TopTabbar},
		data() {
			return {
				
			}
		},
		mounted() {},
		computed: {
			...mapState('user', ['userInfo'])
		},
		methods: {
			...mapActions('user', ['Login'])
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
