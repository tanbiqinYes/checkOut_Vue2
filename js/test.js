var app2 = new Vue({
	el:'#app_2',
	data:{
		message:'页面加载中' + new Date()
	}
});

var app3 = new Vue({
	el:'#app_3',
	data:{
		seen:false
	}
});

var app4 = new Vue({
	el:'#app_4',
	data:{
		todos:[
			{ text: '学习 JavaScript'},
			{ text: '学习 Vue' },
			{ text: '整个牛项目'}
		]
	}
});

var app5 = new Vue({
	el:'#app_5',
	data:{
		message:'Hello Vue.js'
	},
	methods:{
		reverseMessage:function(){
			this.message = this.message.split('').reverse().join('');
		}
	}
});

var app6 = new Vue({
	el:'#app_6',
	data:{
		message:'Hello VueJs!'
	}
});


Vue.component('todo-item',{
	props:['todo'],
	template:'<li>{{todo.text}}</li>'
});
var app7 = new Vue({
	el:'#app_7',
	data:{
		groceryList:[
		{ text:'蔬菜' },
		{ text:'奶酪' },
		{ text: '随便其他什么人吃的东西' }
		]
	}
});