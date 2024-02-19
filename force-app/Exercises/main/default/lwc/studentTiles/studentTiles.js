import { LightningElement,api } from 'lwc';

export default class StudentTiles extends LightningElement {

    @api setSelectedStudent(studentId) {
        this.selectedStudentId = studentId;
    }

    @api studentList = [];

    selectedStudentId = '';

    handleStudentSelected(event){
        this.selectedStudentId=event.detail.studentId;
        }
    
}