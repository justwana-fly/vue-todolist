const todo = [
    {
      id: 1,
      text: `Scarponi`,
      done: false,
    },
    {
      id: 2,
      text: `Giacca a vento`,
      done: false,
    },
    {
      id: 3,
      text: `Zaino`,
      done: false,
    },
    {
      id: 4,
      text: `Cappello`,
      done: false,
    },
    {
      id: 5,
      text: `Piccone`,
      done: false,
    },
    {
      id: 6,
      text: `Corda`,
      done: false,
    },
    {
      id: 7,
      text: `Mappa`,
      done: false,
    },
    {
      id: 8,
      text: `Tenda`,
      done: false,
    },
    {
      id: 9,
      text: `Sacco a pelo`,
      done: false,
    },
    {
      id: 10,
      text: `Bussola`,
      done: false,
    },
  ];
  console.log(todo)

const {createApp} = Vue;

createApp({
    data(){
        return{
            todo: todo,
        }
    },
    methods:{

    },
    mounted(){
        //console.log(this.todo)
    }
}).mount(`#app`)