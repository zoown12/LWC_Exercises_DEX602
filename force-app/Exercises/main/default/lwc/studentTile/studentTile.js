import { LightningElement ,api} from 'lwc';

export default class StudentTile extends LightningElement {

    studentClick(){
        alert(this.student.Name);
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