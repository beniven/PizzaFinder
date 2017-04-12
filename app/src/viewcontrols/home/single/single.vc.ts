import {register} from 'platypus';
import BaseViewControl from '../../base/base.vc';

export default class SingleViewControl extends BaseViewControl {
    templateString: string = require('./single.vc.html');

    context: any = {};
}

register.viewControl('home-single-vc', SingleViewControl);
