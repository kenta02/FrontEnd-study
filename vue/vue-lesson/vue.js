// 初期化
var app = new Vue({
  // elementを指定
  el:'#todo',
  // データを初期化
  data: {
    todos:[],
    input:""
  },
  // 自動的に計算
  computed: {
    lefts:function(){
      return this.todos.filter(function(t){
        return !t.isDone}).length;
      }
    },
    //読み込んだ最初に呼ばれる関数
    created: function(){
      this.title = "Mytodos";
      var saved = [{
        isDone:true,
        content:"content1"
      },
      {
        isDone:false,
        content:"content2"
      },
      {
        isDone:false,
        content:"content3"
      },
      {
        isDone:false,
        content:"content4"
      }
    ]
    for(var i = 0; i < saved.length; i++){
      this.todos.push(saved[i]);
    }
  },
  //変数の宣言
  methods:{
    addTodo:function(){
      if (this.input === '') return;
      this.todos.push({isFone:false, content:this.input});
      this.input=""
    }
  }
})




















// var app = new Vue({
//   // 対象となるHTML要素
//   el: '#todoApp',
//   // バインドするデータ
//   data: {
//     title: "Welcome to Vue.js",
//     fontStyle: {
//         fontSize: "20px",
//     },
//     todo: "",
//     todos: []
//   },
//   // イベントから呼び出す各種処理
//   methods: {
//     addTodo: function() {
//         this.todos.push({
//         name: this.todo,
//         doing: false
//       })
//       this.todo = ""
//     },
//     begin: function(index){
//         this.todos[index].doing = !this.todos[index].doing;
//     }
//   }
// })
