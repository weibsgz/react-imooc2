var React = require('react');
var ReactDOM = require('react-dom')
var Mock = require('mockjs')
import ComponentHeader from './components/header.js'
import ComponentFooter from './components/footer.js'
import BodyIndex from './components/body.js'
// ReactDOM.render(
//     <h1>H21111121d!</h1>,
//     document.getElementById('example')
// )

class Index extends React.Component {
    componentWillMount(){
        console.log('Index - componentWillMount')
    }

    componentDidMount(){
         console.log('Index - componentDidMount')
    }
  render() {
    return (
        <div>
            <ComponentHeader />
            <BodyIndex />
            <ComponentFooter />
        </div>
        
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('example')
);