import {register} from 'platypus';
import BaseViewControl from '../../base/base.vc';
import PizzeriasRepository from '../../../repositories/pizzerias/pizzerias.repo';

export default class ListViewControl extends BaseViewControl {
    templateString: string = require('./list.vc.html');

    context = {
        pizzerias: <Array<any>>null
    };

    constructor(private repo: PizzeriasRepository) {
        super();
    }

    loaded() {
        this.repo.getAll()
            .then((results) => {
                this.context.pizzerias = results;
                console.log(results);
            });
    }

    toSingle(index: number) {
        console.log(index);
    }
}

register.viewControl('home-list-vc', ListViewControl, [
    PizzeriasRepository
]);
