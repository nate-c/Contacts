/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContactsServiceService } from '../services/contacts-service.service';

describe('ContactsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactsServiceService]
    });
  });

  it('should ...', inject([ContactsServiceService], (service: ContactsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
