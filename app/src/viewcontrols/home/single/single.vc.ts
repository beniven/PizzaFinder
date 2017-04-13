import {register} from 'platypus';
import BaseViewControl from '../../base/base.vc';
import PizzeriasRepository from '../../../repositories/pizzerias/pizzerias.repo';

export default class SingleViewControl extends BaseViewControl {
    templateString: string = require('./single.vc.html');

    context = {
        pizzeria: <Array<any>>null
    };

    constructor(private repo: PizzeriasRepository) {
        super();
    }

    navigatedTo(params: { id: number }) {
        let id = params.id;

        id++;

        this.repo.read(id)
            .then((pizzeria) => {
                this.context.pizzeria = pizzeria;
            });
    }
}

register.viewControl('home-single-vc', SingleViewControl, [
    PizzeriasRepository
]);
