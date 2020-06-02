import { LightningElement, api, track, wire } from 'lwc';

import getContacts from '@salesforce/apex/ContactTable_LWC_Controller.getContacts';

export default class ContactTable_LWC extends LightningElement {
    @track columns = [
        {
            label:'Account Name',
            fieldName : 'Name',
            type : 'text',
            sortable : true
        },
        {
            label:'First Name',
            fieldName : 'FirstName',
            type : 'text',
            sortable : true
        },
        {
            label:'Last Name',
            fieldName : 'LastName',
            type : 'text',
            sortable : true
        },
        {
            label:'Email',
            fieldName : 'Email',
            type : 'Email',
            sortable : false
        }
    ];
    @api recordId;
    @track error;
    @track conList;
    @wire(getContacts,
         { accId:'$recordId' }
    )
    wiredAccounts({
        error,
        data
    }){
        if(data){
            console.log('inside function ==>');
            this.conList = data;

        }else if(error){
            this.error = error;
        }
    }
}