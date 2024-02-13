import { LightningElement ,api} from 'lwc';

export default class StudentTile extends LightningElement {

    studentClick(){
        //alert(this.student.Name);
        debugger;
        console.log('Name', this.student.Name);
        console.log('photo', this.student.PhotoUrl);
    }
    @api student = {
        Name : '[Your Name]',
        PhotoUrl : '/services/images/photo/003B0FakePictId',
    };

    @api isSelected = false;

    get tileSelected(){
        return this.isSelected ? "tile selected" : "tile";
    }
}