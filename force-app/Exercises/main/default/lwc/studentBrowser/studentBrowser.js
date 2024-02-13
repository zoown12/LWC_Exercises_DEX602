import { LightningElement , wire} from 'lwc';
import getStudents from '@salesforce/apex/StudentBrowser.getStudents';
export default class StudentBrowser extends LightningElement {

    @wire(getStudents) students;

    @wire(getStudents, {instructorId: "", courseDeliveryId: ""})
    students;

    constructor(){
        super();
        const studentNames = ['Rad', 'Stuar', 'Andres', 'Jonas', 'Simon'];
        this.studentList = studentNames.map((studentName,index) =>{
            return {'sobjectType' : 'Contact',
                    'Name' : studentName,
                    'PhotoUrl' : '/services/images/photo/003B0FakePictId',
                    'Id' : index
            }
        });
    }
}