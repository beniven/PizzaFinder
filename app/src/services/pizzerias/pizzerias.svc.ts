import {async, register} from 'platypus';
import BaseService from '../base/base.svc';

export default class PizzeriasService extends BaseService {
    constructor() {
        super('pizzerias');
    }

    getAll() {
        return this.get();
    }

    read(id: number) {
        return this.get(id.toString());
    }
}

register.injectable('pizzerias-svc', PizzeriasService);
