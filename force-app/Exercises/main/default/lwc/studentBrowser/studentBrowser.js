import { LightningElement , wire} from 'lwc';
import getStudents from '@salesforce/apex/StudentBrowser.getStudents';
import {publish, MessageContext} from 'lightning/messageService';
import SELECTED_STUDENT_CHANNEL from '@salesforce/messageChannel/SelectedStudentChannel__c';
import { NavigationMixin } from 'lightning/navigation';

export default class StudentBrowser extends NavigationMixin(LightningElement) {

    selectedDeliveryId = '';
    selectedInstructorId = '';

    @wire(getStudents, {instructorId: '$selectedInstructorId', courseDeliveryId: '$selectedDeliveryId'})
    students;

    cols = [{
                fieldName:"Name", label: "Name"
            },{
                fieldName:"Title", label: "Title", hiddenOnMobile :true
            },{
                fieldName:"Phone", label: "Phone", type: "phone" 
            },{
                fieldName:"Email", label: "E-mail" , type: "email"
            }
        ];

    handleFilterChange(event) {
        this.selectedDeliveryId = event.detail.deliveryId;
        this.selectedInstructorId = event.detail.instructorId;
    }

    handleRowDblClick(event){
        const studentId = event.detail.pk;
        this[NavigationMixin.Navigate] ({
            type: 'standard__recordPage',
            attributes: {
                recordId:studentId,
                objectApiName: 'Contact',
                actionName: 'edit'
            }
        });
    }

    @wire(MessageContext) messageContext;

    handleStudentSelected(event){
        const studentId = event.detail.studentId;
        this.updateSelectedStudent(studentId);
    }

    updateSelectedStudent(studentId){
        publish(this.messageContext, SELECTED_STUDENT_CHANNEL, {studentId:studentId});
    }

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
