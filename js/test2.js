Vue.component('todo-item',{
	props:['todo'],
	template:'<li>{{todo.text}}</li>'
});
var app = new Vue({
	el:'#app',
	data:{
		message:'页面加载中' + new Date(),
		message2:'Hello',
		message3:'Hello Vue!',
		seen:true,
		todos:[
			{test:'学习Vue'},
			{test:'学习CSS3'},
			{test:'学习HTML5'}
		],
		todosomething:[
			{test:'学习Vue-1'},
			{test:'学习CSS3-2'},
			{test:'学习HTML5-3'}
		],
		groceryList:[
			{text:'蔬菜'},
			{text:'奶酪'},
			{text:'水果'}
		],
	},
	methods:{
		reverseMessage:function(){
			this.message2 = this.message2.split('').reverse().join('');
		}
	}
});