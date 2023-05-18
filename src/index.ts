import TodoItem from "./TodoItem";
import {data} from "./data";
import TodoCollection from "./TodoCollection";

const sampleTodos : TodoItem[] = data.map((item) => {
    return new TodoItem(item.id, item.task)
})

const myTodoCollection = new TodoCollection('My Todo List', sampleTodos)

myTodoCollection.addTodo('JavaScript 학습하기')
myTodoCollection.addTodo('친구 만나기')

myTodoCollection.markComplete(3, true)

console.log(`${myTodoCollection.userName}`)
myTodoCollection.todoItems.forEach((item) => console.log(item.printDetails()))