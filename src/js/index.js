var React = require('react');
var ReactDOM = require('react-dom')
//var Mock = require('mockjs')
import ComponentHeader from './components/header.js'
import ComponentFooter from './components/footer.js'
import BodyIndex from './components/body.js'
// ReactDOM.render(
//     <h1>H21111121d!</h1>,
//     document.getElementById('example')
// )

class Index extends React.Component { 
	constructor(){
        super();
        //state 相当于VUE的data 定义自身组件需要的一些属性
        this.state = {
        	number : 1
        }
    } 
    componentWillMount(){
        console.log('Index - componentWillMount')
    }

    componentDidMount(){
         console.log('Index - componentDidMount')
    }

    handleChildrenInput(e){
    	let v = e.target.value;
    	this.setState({
    		number:v
    	})
    }
  render() {
    return (
        <div>
            <ComponentHeader />
            <p>{this.state.number}</p>
        	{/*父子双向绑定*/}
            <BodyIndex name="weibin" handleChildrenInput={this.handleChildrenInput.bind(this)}/>
            <ComponentFooter />
        </div>
        
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('example')
);