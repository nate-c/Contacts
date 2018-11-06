import {Image} from './Image';
export class Contact {
    id: number;
    firstName: string;
    lastName?: string;
    number: string;
    address?: string;
    email?: string;
    birthday: string;
    image: Image;
}