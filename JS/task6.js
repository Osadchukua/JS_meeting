'use strict'
class Worker {
  constructor(id, name) {
    if (!id || !name) {
      throw new Error('Fill up all data');
    }
    this.id = id;
    this.name = name;
  }
  getId() {
    return this.id;
  }
  getName() {
    return this.name;
    }
    setSalary(salary) {
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
}
class Manager extends Worker {
    setDepartment(depName) {
        this.department = depName;
    }
    getDepartment() {
        if (!this.department) {
            console.log('newComer');
        }
        return this.department;
    }
    setPosition(newPos) {
        this.position = newPos;
    }
}

const johnSmith = new Worker(715, 'John Smith');
johnSmith.setSalary(40000);
console.log(johnSmith);

const janeSmith = new Manager('007', 'Jane Smith');
janeSmith.getDepartment();
console.log(janeSmith);