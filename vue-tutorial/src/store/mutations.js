import * as types from './mutation-types'

export default {
	//增加总时间
	[types.ADD_TOTAL_TIME](state,time){
		state.totalTime = state.totalTime+time
	},
	//减少总时间
	[types.DEC_TOTAL_TIME](state,time){
		state.totalTime = state.totalTime-time
	},
	//新增计划
	[types.SAVE_PLAN] (state, plan) {
	    // 设置头像默认值
	    const avatar='https://avatars1.githubusercontent.com/u/19756758?v=3&u=f95d5fa3f5ca99821830a75a1e0dec22227745fe&s=400';
	    state.list.push(
	      	Object.assign(
		      	{
					name: '柏林', 
					avatar: avatar 
				}, plan
			)
	    )
	},
	// 删除计划
	[types.DELETE_PLAN] (state, index) {
		state.list.splice(index, 1);
	}		
}