import {async, register} from 'platypus';
import BaseRepository from '../base/base.repo';
import PizzeriasService from '../../services/pizzerias/pizzerias.svc';

export default class PizzeriasRepository extends BaseRepository {
    constructor(private svc: PizzeriasService) {
        super();
    }

    getAll() {
        return this.svc.getAll();
    }

    test() {
        return this.svc.test();
    }
}

register.injectable('pizzerias-repo', PizzeriasRepository, [
    PizzeriasService
]);
