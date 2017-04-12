import {async, register} from 'platypus';
import BaseService from '../base/base.svc';

export default class PizzeriasService extends BaseService {
    constructor() {
        super('pizzerias');
    }

    getAll() {
        return this.get();
    }
}

register.injectable('pizzerias-svc', PizzeriasService);
