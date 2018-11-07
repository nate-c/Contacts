import { Injectable } from '@angular/core';
import {Contact} from '../../models/Contact';

@Injectable()
export class ContactsServiceService {

  constructor() { }
  contacts: Contact[];
  public getAllContacts(): Contact[] {
   this.setDummyContacts();
   return this.contacts;
  }

  public getContact(id: number): void {

  }

  public deleteContact(contact: Contact): void {

  }

  public saveContact(contact: Contact): void {

  }

  private setDummyContacts(): void {
    let thor = new Contact();
    thor.id =1;
    thor.firstName = 'Thor';
    thor.lastName = 'Odinson';
    thor.number = '123-456-7890';
    let tony = new Contact();
    tony.id = 2;
    tony.firstName = 'Tony';
    tony.lastName = 'Stark';
    tony.number = '234-567-8990';
    this.contacts.push(thor);
    this.contacts.push(tony);
  }
}
