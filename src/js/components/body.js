import React from 'react';
import {Common} from './common.js'

function getGreeting(user) {
  if (user) {
    return <p>Hello, {formatName(user)}!</p>;
  }
  return <h1>Hello, Stranger.</h1>;
}

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez',
  age : '18'
};

const buttonDis = true;

const html = "abcdefg &nbsp; daf;kdasf"

export default class BodyIndex extends React.Component{
    constructor(){
        super();
        //state 相当于VUE的data 定义自身组件需要的一些属性
        this.state = user
    }
    componentWillMount(){
        console.log('bodyIndex - componentWillMount')
    }

    componentDidMount(){
         console.log('bodyIndex - componentDidMount')
    }
    changeAge(age){
       this.setState({
        age : age
       })
       Common.log('test commonjs');
       this.refs.submitBtn.style.color = 'red'
    }
    render(){
        setTimeout(()=>{
            this.setState({
                firstName: 'weibin',
                lastName: 'Perez'
            })
        },3000)
        return (
            <div>
                <h1>this is body {getGreeting(user)}</h1>
                <input type='button' value='click' disabled={buttonDis}/>
                {/**/}
                <p dangerouslySetInnerHTML={{__html:html}}></p>
                <p>hello , {this.state.firstName}</p>
                <p>接收到的父组件的属性{this.props.name}</p>
                <button ref="submitBtn" onClick={this.changeAge.bind(this,99)}>点击改变age</button>
                <p>{this.state.age}</p>
                <p>子组件和父组件双向绑定：<input type="text" onChange={this.props.handleChildrenInput} /></p>
                {/* 假如还有一个子组件 bodyIndex组件要把index.js组件传过来的值全部给子组件，可以用{...this.props}*/}
            </div>
        )
    }
}
//传进来的name必须是字符串  而且是必填的
BodyIndex.propTypes = {
  name: React.PropTypes.string.isRequired
};

//默认值

BodyIndex.defaultProps = {
  name :'这是一个默认名字'
}
