<script>
	import {
		mapState
	} from 'vuex'

	export default {
		globalData: {},
		computed: {
			...mapState('user', ['forcedLogin', 'hasLogin', 'userName'])
		},
		onShow() {
			console.log('shenm')
		},
		onLaunch() {

		},
		onLoad() {

		},
		onHide() {

		},
		onReady() {

		},
		async created() {
			// let res = await this.$minApi.user.getInfo()
			// console.log(res, '是')
		}
	}
</script>

<style lang="scss">
	@import url("./static/iconfont/iconfont.css");
	@import url('/static/css/article.css');
	* {
		box-sizing: border-box;
	}
	page {
		font-size: 16px;
		height: 100vh;
		overflow: hidden;
		--scroll-view-height: calc(100vh - var(--window-bottom) - var(--status-bar-height) - 44px - 50px);
        image{will-change: transform}
	}
    .split-line {
        width: 100%;
        height: 10px;
        background-color: #eee;
    }
</style>
