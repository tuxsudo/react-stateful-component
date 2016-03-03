import {Component, PropTypes} from 'react';
import style from './lib/style.css';
import homer from './lib/homer.png';


// Using es6 classes for creating components:
// never ever inherit from anything other than Component
// to inherit functionality, use composition not inheritance


// This is the exported React Component
class MyComponent extends Component {

    constructor({ name, points }) {
        super({name, points});
        this.state = { points };
    }

    handleClick() {
        this.setState({points: this.state.points + 1});
    }

    render() {
        return (
            <div className={style.container}>
                <img className={style.image} src={homer} />
                <span className={style.name}>{this.props.name}</span>
                <span className={style.points}>{this.state.points}</span>
                <button className={style.button} onClick={this.handleClick.bind(this)}>Add</button>
            </div>
        );
    }

    // Lifecycle Methods
    // https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods

    //componentWillMount() {}
    //componentDidMount(){}
    //componentWillUnmount(){}
    //componentWillReceiveProps(){}
    //shouldComponentUpdate(){}
    //componentWillUpdate(){}
    //componentDidUpdate(){}

}

MyComponent.propTypes = {
    points: PropTypes.number,
    name: PropTypes.string
};


export default MyComponent;
