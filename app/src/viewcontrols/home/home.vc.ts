import {register, routing} from 'platypus';
import BaseViewControl from '../base/base.vc';
import ListViewControl from './list/list.vc';
import SingleViewContol from './single/single.vc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context: any = {};

    constructor(private router: routing.Router) {
        super();

        router.configure([
            { pattern: '', view: ListViewControl },
            { pattern: ':id', view: SingleViewContol }
        ])
    }
}

register.viewControl('home-vc', HomeViewControl, [
    routing.Router
]);
