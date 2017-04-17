import {register, storage} from 'platypus';
import BaseViewControl from '../../base/base.vc';
import SingleViewControl from '../single/single.vc';
import PizzeriasRepository from '../../../repositories/pizzerias/pizzerias.repo';

export default class ListViewControl extends BaseViewControl {
    templateString: string = require('./list.vc.html');

    context = {
        pizzerias: <Array<any>>null
    };

    private favorites: Array<any> = [];

    constructor(private repo: PizzeriasRepository,
        private localStorage: storage.LocalStorage) {
        super();
    }

    initialize() {
        let favorites = this.favorites = JSON.parse(localStorage.getItem('favorites'));

        this.repo.getAll()
            .then((pizzerias) => {
                this.utils.forEach((p: any, i) => {
                    if (this.checkFavorites(i)) {
                        p.properties.favorite = true;
                    } else {
                        p.properties.favorite = false;
                    }
                }, pizzerias);

                console.log(pizzerias);

                this.context.pizzerias = pizzerias;
            });
    }

    checkFavorites(id: any): boolean {
        for (var i = 0; i < this.favorites.length; i++) {
            if (this.favorites[i] === String(id) ) { 
                return true;
            }
        }
        return false;
    }

    toSingle(index: number) {
        this.navigator.navigate(SingleViewControl, {
            parameters: {
                id: index
            }
        });
    }
}

register.viewControl('home-list-vc', ListViewControl, [
    PizzeriasRepository,
    storage.LocalStorage
]);
