const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
   mode: 'development', //devlopment mode
   entry: './src/js/index.js',//entry point 
   devtool: 'source-map',//enable source maps
   output:
   {
      filename: 'bundle.ee266c44f129b8013280.js',//output file name 
      path: path.resolve(__dirname, 'dist'),//output directory
      clean: true,//clean output folder before each build 
   },
   devServer: {
      static: path.join(__dirname, './dist'), // تعديل contentBase إلى static في Webpack 5
      compress: true, // تفعيل الضغط للملفات
     
      port: 8081, // المنفذ
      open: true, // فتح المتصفح تلقائيًا عند التشغيل
      historyApiFallback: true,
   },
   module: {
      rules: [
         {
            test: /\.scss$/,//process scss files
            use: ['style-loader', 'css-loader', 'sass-loader'],//scss loader
         },
         {
            test: /\.js$/,//process javascript file 
            exclude: /node_modules/,//exclude node_modules
            use: ['babel-loader'],// use babel for javascript transpiling
         },
      ],
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './src/html/index.html',//html template file 
         filename: 'index.html',//output html file name
         minify: {
            removeComments: true,
            collapseWhitespace: true,      // تصغير المحتوى في وضع الإنتاج
         },
      }),
   ],
};