"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TodoItem {
    // 아래처럼 접근 제어자를 생성자 인수에 주면 프로퍼티를 장성해주지 않아도 프로퍼티로 인식
    constructor(id, task, complete) {
        this.id = id;
        this.task = task;
        this.complete = complete;
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    // 반환값이 없을 때는 void로 명시
    printDetails() {
        console.log(`${this.id}\t${this.task}\t${this.complete ? '\t(complete)' : ''}`);
    }
}
exports.default = TodoItem;
