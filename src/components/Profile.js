import React from 'react';
class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
        }
        console.log(this.props.name+"child constructor");
    }
    componentDidMount(){
        console.log(this.props.name+" child componentDidMount");
    }
    render(){
        return (
            
            <div>
                {console.log(this.props.name+" child render")}
            <h1>Name : {this.props.name}</h1>
            <h2>Age : {this.props.age}</h2>
            <h3>Count: {this.state.count}</h3>
            <button onClick={()=>{
                this.setState({
                    count:this.state.count+1,
                })
            }}
            >Increment</button>
        </div>
        )
    }
}
export default Profile;