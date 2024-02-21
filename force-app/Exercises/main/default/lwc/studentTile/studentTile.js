import { LightningElement ,api} from 'lwc';

export default class StudentTile extends LightningElement {

    studentClick(){
        //alert(this.student.Name);
       /* debugger;
        console.log('Name', this.student.Name);
        console.log('photo', this.student.PhotoUrl); */
        const evt = new CustomEvent('studentselected', {
            bubbles: true, composed: true,
            detail: { studentId: this.student.Id }
            });
            this.dispatchEvent(evt);
    }
    
    @api student = {
        Name : '[Your Name]',
        PhotoUrl : '/services/images/photo/003B0FakePictId',
    };

   //@api isSelected = false;  //return this.isSelected ? "tile selected" : "tile";
    @api selectedStudentId = '';
    get tileSelected() {
        return (this.selectedStudentId===this.student.Id) ?
        "tile selected" : "tile";
        }

    renderedCallback(){
        console.log('rendering student ' + this.student.Id);
    }
}