const path = require("path"); // утилита, которая превращает относительный путь в абсолютный
const HtmlWebpackPlugin = require("html-webpack-plugin"); // корректно подставлять правильные пути файлов.
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // каждый раз при сборке проекта удалять содержимое папки dist
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // берёт много CSS-файлов и объединяет их в один

module.exports = {
  // синтаксис экспорта в Node.js
  entry: { main: "./src/index.js" }, // указали первое место, куда заглянет webpack, — файл index.js в папке src
  output: {
    path: path.resolve(__dirname, "dist"), // переписали точку выхода, используя утилиту path
    filename: "main.js",
    publicPath: "",
  }, //// указали, в какой файл будет собираться весь js, и дали ему имя
  mode: "development", // добавили режим разработчика
  devServer: {
    static: path.resolve(__dirname, "./dist"), // путь, куда "смотрит" режим разработчика
    compress: true, // это ускорит загрузку в режиме разработки
    port: 8080, // порт, чтобы открывать сайт по адресу localhost:8080, но можно поменять порт

    open: true, // сайт будет открываться сам при запуске npm run dev
  },
  module: {
    rules: [
      // rules — это массив правил
      // добавим в него объект правил для бабеля
      {
        // регулярное выражение, которое ищет все js файлы
        test: /\.js$/,
        // при обработке этих файлов нужно использовать babel-loader
        use: "babel-loader",
        // исключает папку node_modules, файлы в ней обрабатывать не нужно
        exclude: "/node_modules/",
      },
      {
        // регулярное выражение, которое ищет все файлы с такими расширениями
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: "asset/resource",
      },
      {
        // применять это правило только к CSS-файлам
        test: /\.css$/,
        // при обработке этих файлов нужно использовать
        // MiniCssExtractPlugin.loader и css-loader
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            // добавьте объект options
            options: { importLoaders: 1 },
          },
          // Добавьте postcss-loader
          "postcss-loader",
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // путь к файлу index.html
    }),
    new CleanWebpackPlugin(), // использовали плагин
    new MiniCssExtractPlugin(), // подключение плагина для объединения файлов css
  ], // добавьте массив
};
