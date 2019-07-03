export class Student{
    constructor(studId,course,bal){
        this.studId=studId;
        this.bal=bal;
        this.course=course;

    }
    enroll(){
        return `Student Id: ${this.studId}\nEnrolled: ${this.course}\nBalance: ${this.bal}`;
    }
}