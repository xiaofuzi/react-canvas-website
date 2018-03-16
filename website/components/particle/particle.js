const React = require('react');
const ParticleJS = require('particles.js');

class Particle extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (<div 
            ref={{(dom) =>{ this.$dom = dom }}}
            className="particle-container"></div>);
    }

    componentDidMount () {
        console.log(this.$dom);
    }
}

module.exports = Particle;
