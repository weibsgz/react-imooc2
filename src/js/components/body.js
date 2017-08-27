import React from 'react';

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
  lastName: 'Perez'
};

const buttonDis = true;

const html = "abcdefg &nbsp; daf;kdasf"

export default class BodyIndex extends React.Component{
    constructor(){
        super();
        this.state = user
    }
    componentWillMount(){
        console.log('bodyIndex - componentWillMount')
    }

    componentDidMount(){
         console.log('bodyIndex - componentDidMount')
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
            </div>
        )
    }
}