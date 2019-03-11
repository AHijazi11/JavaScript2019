import React from "react";

function IsUserLoggedIn(props) {
     return <ul>
    {props.Users.map((user,index)=>{
    return <li key={"Test" + index}>Is {user.name} logged in? {user.isUserLoggedIn? "Yes" : "No"}</li>
    })}
    </ul>  
} 
export default IsUserLoggedIn;