class TodoItem {
    // 아래처럼 접근 제어자를 생성자 인수에 주면 프로퍼티를 장성해주지 않아도 프로퍼티로 인식
    constructor(public id: number, public task: string, public complete: boolean) {
        this.id = id
        this.task = task
        this.complete = complete
    }

    // 반환값이 없을 때는 void로 명시
    printDetails() : void {
        console.log(`${this.id}\t${this.task}\t${this.complete ? '\t(complete)' : ''}`)
    }

}

export default TodoItem