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

// 모든 todoItem 반환
myTodoCollection.getTodoItems(true).forEach((item) => item.printDetails())
console.log('=======================================')
myTodoCollection.getTodoItems(false).forEach((item) => item.printDetails())

myTodoCollection.removeComplete()