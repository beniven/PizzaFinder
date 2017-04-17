import {register, storage} from 'platypus';
import BaseViewControl from '../../base/base.vc';
import PizzeriasRepository from '../../../repositories/pizzerias/pizzerias.repo';
declare let google: any;

export default class SingleViewControl extends BaseViewControl {
    templateString: string = require('./single.vc.html');

    context = {
        pizzeria: <Array<any>>null,
        favorite: false
    };

    private map: any;
    private lat: any;
    private lng: any;

    private id: number;
    private favorites: Array<any> = [];

    constructor(private repo: PizzeriasRepository,
        private localStorage: storage.LocalStorage) {
        super();
    }

    navigatedTo(params: { id: number }) {
        let id = this.id = params.id,
            context = this.context,
            utils = this.utils,
            favorites = this.favorites = JSON.parse(localStorage.getItem('favorites'));

        if (this.checkFavorites()) {
            context.favorite = true;
        }

        id++;

        this.repo.read(id)
            .then((pizzeria) => {
                context.pizzeria = pizzeria;
                console.log(pizzeria);
            })
            .then(() => {
                let coordinates = (<any>context.pizzeria).geometry.coordinates;

                this.lat = coordinates[1],
                this.lng = coordinates[0]
            })
            .then(() => {
                this._initMap();
            });
    }

    toggleFavorite() {
        let context = this.context;

        if (this.checkFavorites()) {
            this.removeFavorite();
            context.favorite = false;
        } else  {
            this.favorites.push(this.id);
            localStorage.removeItem('favorites');
            localStorage.setItem('favorites', JSON.stringify(this.favorites));
            context.favorite = true;
        }
    }

    checkFavorites(): boolean {
        for (var i = 0; i < this.favorites.length; i++) {
            if (this.favorites[i] === this.id ) { 
                return true;
            }
        }
        return false;
    }

    removeFavorite() {
        for (var i = 0; i < this.favorites.length; i++) {
            if (this.favorites[i] === this.id ) { 
                this.favorites.splice(i, 1);
                localStorage.removeItem('favorites');
                localStorage.setItem('favorites', JSON.stringify(this.favorites));
            }
        }
    }

    private _initMap(): void {
        this.utils.defer(() => {
            let map = this.map,
                locationLatLng = { lat: this.lat, lng: this.lng };

            map = new google.maps.Map(document.getElementById('pizzeria_map'), {
                center: locationLatLng,
                zoom: 18,
                disableDefaultUI: true
            });

            let marker = new google.maps.Marker({
                position: locationLatLng,
                map: map
            });

        }, 500);
    }

    // Borrowed from https://gist.github.com/mathewbyrne/1280286
    private _slugify(text: string) {
        return text.toString().toLowerCase()
            .replace(/\s+/g, '-')           // Replace spaces with -
            .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
            .replace(/\-\-+/g, '-')         // Replace multiple - with single -
            .replace(/^-+/, '')             // Trim - from start of text
            .replace(/-+$/, '');            // Trim - from end of text
    }
}

register.viewControl('home-single-vc', SingleViewControl, [
    PizzeriasRepository,
    storage.LocalStorage
]);
