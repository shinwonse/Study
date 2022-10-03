import Model from './models/model';
import View from './views/view';
import Controller from './controllers/controller';

const PHRASE = '동해물과 백두산이 마르고 닳도록';

const model = new Model(PHRASE);
const view = new View(model);
const controller = new Controller(model, view);
