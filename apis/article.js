import RequestConfig from '@/utils/RequestConfig.js'
import ApiDomains from '@/utils/apiDomains.js'

// 用户
export default class Article {
	// 文章分类
	getCategories(data) {
		return RequestConfig.request({
			url: `${ApiDomains.goldTag}/categories`,
			method: 'get',
			data
		})
	}
	getArticles(data) { // 获取文章列表
		return RequestConfig.request({
			url: `${ApiDomains.webApi}/query`,
			method: 'post',
			data
		})
	}
	getDetailData(data) { // 获取文章详情
		return RequestConfig.request({
			url: `${ApiDomains.postStorage}/getDetailData`,
			method: 'get',
			data
		})
	}
	getPinList(data) { // 沸点
		return RequestConfig.request({
			url: `${ApiDomains.shortMsg}/pinList/topic`,
			method: 'get',
			data
		})
	}
}
