// @file config.js
let dest = './release'; // 出力先ディレクトリ
let src = './dev'; // ソースディレクトリ

module.exports = {
  // 出力先の指定
  dest: dest,

  // jsのビルド設定
script:{
  jsoptions:{
    output: {
      filename: "[name].js",
      sourceMapFilename: "map/[file].map"
    },
    devtool: "#inline-source-map",
    resolve: {
      modulesDirectories: [
        // 'bower_components',
        "node_modules",
        "src"
      ],
      alias: {}
    },
    module: {},
    plugins: {}
  },

 beautifyOptions: {
    indent_size: 2,
    indent_char: "",
    eol: "\n", //改行コードの指定
    end_with_newline: true //最後に改行を入れるかどうか
  },

},

babel:{
  src: src + '/js/app.js',
  dest: dest + '/js',
  beautifyOptions: {
    indent_size: 2,
    indent_char: "",
    eol: "\n", //改行コードの指定
    end_with_newline: true //最後に改行を入れるかどうか
  },
},

  // webpackの設定
  webpack: {
    entry: src + '/js/app.js',
    output: {
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['', '.js']
    }
  },
  sass: {
    src: [
      src + '/sass/**/!(_)*' // ファイル名の先頭がアンスコはビルド対象外にする
    ],
    dest: dest   + '/css/',
    output: 'dev/css', // 出力フォルダ先

    autoprefixer: {
      browsers: ['last 3 version', 'iOS >= 8.1', 'ie >= 8', 'Android >= 4.4'],
      cascade: false
    },
    options: [
      'outputStyle: expanded',
      'sourceMap: true',
      'sourceComments: false'
    ],
    minify: false
  },


  ejs:{
    src: [
      // src + '/ejs/**/!(_)*' // ファイル名の先頭がアンスコはビルド対象外にする
      'dev/ejs/**/*.ejs', '!' + 'dev/ejs/**/_*.ejs'
    ],
    dest:dest,

  },

  // ファイルのコピー
  copy: {
    src: [
      // 今後ただコピーするファイルが増えそうなので配列にしておく
      src + '/index.html'
    ],
    dest: dest
  },
  server:{
    dest:dest
  },
  build:{
    dest:dest
  }
};

//現状だと、relaaseフォルダにdevができてしまう。。。