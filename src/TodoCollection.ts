import TodoItem from "./TodoItem";

class TodoCollection {
    
    private nextId: number = 1

    private itemMap: Map<number, TodoItem>
    
    constructor(public userName: string, todoItems: TodoItem[] = []) {
        this.itemMap = new Map<number, TodoItem>()
        todoItems.forEach((item) => this.itemMap.set(item.id, item))
    }
    
    // return 이 없는 경우 undefined 이기 때문에 타입을 TodoItem | undefined 사용
    getTodoById(id: number) : TodoItem | undefined {
        return this.itemMap.get(id)
    }
    
    addTodo(task: string) : number {
        // pointer 위치를 조정해주는 반복문
        while (this.getTodoById(this.nextId)) {
            this.nextId++
        }
        // complete 프로퍼티의 경우 기본값을 지정했기 때문에 안넘겨도됨
        this.itemMap.set(this.nextId, new TodoItem(this.nextId, task))
        return this.nextId
    }

    // includeComplete -> true : 모든 할일 목록을 반환
    // includeComplete -> false : 완료되지 않은 할일 목록을 반환
    getTodoItems(includeComplete: boolean): TodoItem[] {
        return [...this.itemMap.values()].filter((item) => {
            return includeComplete || !item.complete
        })
    }

    removeComplete(): void {
        this.itemMap.forEach((item) => {
            if(item.complete) {
                this.itemMap.delete(item.id)
            }
        })
    }

    markComplete(id: number, complete: boolean) : void {
        const todoItem = this.getTodoById(id)
        if(todoItem) {
            todoItem.complete = complete
        }
    }
    
}

export default TodoCollection