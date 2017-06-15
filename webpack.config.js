var conf ={

entry:'./main.js',

output :{
path:'/',
filename:'index.js',
},

devServer:{
inline:true,
port:8080
},
module:{
	loaders:[
		{
			test:/\.jsx?$/,
			///\.jsx?$/ without quotes and $ not&
			exclude:/node_modules/,
			loader:'babel-loader',
			query:{
				presets:['react','es2015']
			}
		}
	]
},


}

module.exports=conf;

