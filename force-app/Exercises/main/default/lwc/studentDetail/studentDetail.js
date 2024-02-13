import { LightningElement, wire } from 'lwc';

// TODO #1: import the getRecord, getFieldValue, and getFieldDisplayValue functions from lightning/uiRecordApi.
import {getRecord, getFieldValue, getFieldDisplayValue} from 'lightning/uiRecordApi';

// TODO #2: We've imported the name field and placed it into an array for you.
//          To prepare for Lab 1, import the Description, Email, and Phone fields and add them to the array.

import FIELD_Name from '@salesforce/schema/Contact.Name';
import FIELD_Description from '@salesforce/schema/Contact.Description';
import FIELD_Email from '@salesforce/schema/Contact.Email';
import FIELD_Phone from '@salesforce/schema/Contact.Phone';
const fields = [FIELD_Name,FIELD_Description,FIELD_Email,FIELD_Phone, 'Contact.Im__c']; // In schema No Cotact.Im__c cause error!

export default class StudentDetail extends LightningElement {

	// TODO #3: locate a valid Contact ID in your scratch org and store it in the studentId property.
	// Example: studentId = '003S000001SBAXEIA5';
	studentId = '003DS000014Mu2SYAS';

	//TODO #4: use wire service to call getRecord, passing in our studentId and array of fields.
	//		   Store the result in a property named wiredStudent.
	@wire(getRecord, {recordId: '$studentId',fields})
	wiredStudent;
		
	get name() {
		return this._getDisplayValue(this.wiredStudent.data, FIELD_Name);
	}

	//TODO #5: We provided a getter for the name field. 
	// 		   To prepare for Lab 1, create getters for the description, phone, and email fields.
	get description() {return this._getDisplayValue(this.wiredStudent.data, FIELD_Description);}
    get phone() {return this._getDisplayValue(this.wiredStudent.data, FIELD_Phone);}
    get email() {return this._getDisplayValue(this.wiredStudent.data, FIELD_Email);}
	//TODO #6: Review the cardTitle getter, and the _getDisplayValue function below.
	
	get cardTitle() {
		let title = "Please select a student";
		if (this.wiredStudent.data) {
			title = this.name;
		} else if (this.wiredStudent.error) {
			title = "Something went wrong..."
		}
		return title;
	}
	
	_getDisplayValue(data, field) {
		return getFieldDisplayValue(data, field) ? getFieldDisplayValue(data, field) : getFieldValue(data, field);
	}
	
}