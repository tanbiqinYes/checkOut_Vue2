var vm = new Vue({
	el:"#App",
	data:{
		title:'Hello Vue',
	},
	filters:{

	},
	mounted: function(){
		this.cartView();
	},
	methods:{
		cartView: function(){
			this.title = "Vue Hello!!!!";
		}
	}
});