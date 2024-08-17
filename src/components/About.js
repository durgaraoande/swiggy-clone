import Profile from "./Profile";
import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }
  compnentDidMount() {
    console.log("Parent ComponentDidMount");
  }
  render() {
    return (
      <div>
        <h1>About Us</h1>
        {console.log("Parent Render")}
        <p>
          We are a group of developers who are passionate about programming and
          building software.
        </p>
        <Profile name={"abdr"} age={25} />
        <Profile name={"durgarao"} age={21} />
      </div>
    );
  }
}
export default About;


/*
Parent Constructor
About.js:15 Parent Render
Profile.js:8 abdrchild constructor
Profile.js:17 abdr child render
Profile.js:8 durgaraochild constructor
Profile.js:17 durgarao child render
Profile.js:11 abdr child componentDidMount
Profile.js:11 durgarao child componentDidMount

first parent conctructor will be called
then parent render will be called
then it sees child component and it will call child constructor
then render of child will be called

now it will not call child componentDidMount

because of another instance of child component is present
so it calls constructor and then render of child component

then calls componentDidMount of first child component
then calls componentDidMount of second child component
then calls componentDidMount of parent component

componentDidMount is called only once for each component
and is used to make api calls or to do some initial setup
just like useEffect in functional components


*/