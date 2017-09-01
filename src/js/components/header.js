import React from 'react';
import ReactDom from 'react-dom';
import '../../css/style.css' //模块化加载css 

export default class componentHeader extends React.Component{
	constructor(){
		super();
		this.state = {
			minHeader:false
		}
	}
	switchHeight(){
		this.setState({
			minHeader:!this.state.minHeader
		})
	}
    render(){
    	//行内样式必须写在render里
    	const styleHeader = {
				header:{
					backgroundColor:"#333",
					paddingBottom:(this.state.minHeader) ? '3px' : "15px", 
					"padding-top":"15px"
				}
		}

        return (
            <header style={styleHeader.header} className="smallFontSize"
			onClick={this.switchHeight.bind(this)}>
                <h1>点击改变高度</h1>
            </header>
        )
    }
}