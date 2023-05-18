import TodoItem from "./TodoItem";

class TodoCollection {
    
    private nextId: number = 1
    
    constructor(public userName: string, public todoItems: TodoItem[] = []) {
    }
    
    // return 이 없는 경우 undefined 이기 때문에 타입을 TodoItem | undefined 사용
    getTodoById(id: number) : TodoItem | undefined {
        return this.todoItems.find((item) => item.id === id)
    }
    
    addTodo(task: string) : number {
        // pointer 위치를 조정해주는 반복문
        while (this.getTodoById(this.nextId)) {
            this.nextId++
        }
        // complete 프로퍼티의 경우 기본값을 지정했기 때문에 안넘겨도됨
        this.todoItems.push(new TodoItem(this.nextId, task))
        return this.nextId
    }

    markComplete(id: number, complete: boolean) : void {
        const todoItem = this.getTodoById(id)
        if(todoItem) {
            todoItem.complete = complete
        }
    }
    
}

export default TodoCollection