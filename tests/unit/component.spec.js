import MyComponent from '../../src/index.js';
import styles from '../../src/lib/style.css';
import test from 'tape';
import { shallow } from 'enzyme';

test('<MyComponent> shallow testing', t => {

    const defaultInst = shallow( <MyComponent name="Jared" points={1000} /> );
    t.ok( defaultInst.hasClass( styles.container), 'it appends the classnames' );

    t.equal("Jared", defaultInst.find(`.${styles.name}`).text(), 'it accepts a name parameter');
    t.equal(1000, parseInt(defaultInst.find(`.${styles.points}`).text()), 'it accepts a points parameter');

    t.end();
});
