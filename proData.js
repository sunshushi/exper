new Vue({
    el: '#commandList',
    data: {
        picked: ''
    }
})
Vue.component('todo-item', {
    template: '\
      <li>\
      <img width="100" height="100" :src="imgUrl" alt="图片">\
        <br>\
        {{ title }}\
        <br>\
        {{ price }}\
        <div class="recommendIns">超过95%的消费者都在买</div>\
        <button v-on:click="$emit(\'add\')">+</button>\
      </li>\
    ',
    props: ['imgUrl', 'title', 'price']
})

new Vue({
    el: '#todo-list-example',
    data: {
        newTodoText: '',
        todos: [{
                id: 11000,
                title: 'VANS OLD SKOOL经典帆布情侣休闲滑板鞋男女s',
                price: '469',
                imgUrl: './img/pro/11000.png',
            },
            {
                id: 12000,
                title: 'NIKE AIR FORCE 1 LOW AF1纯白低帮板鞋',
                price: '549',
                imgUrl: './img/pro/12000.png',
            }
        ],
        nextTodoId: 11001,
    },
    methods: {
        addNewTodo: function () {
            this.todos.push({
                id: this.nextTodoId++,
                title: this.newTodoText
            })
            this.newTodoText = ''
        },
        say: function (message) {
            alert(message)
        }
    }
})