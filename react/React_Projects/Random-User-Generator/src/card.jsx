import React from "react";




function Card({data}){
    const myStyle = {
        padding : 5,
        color: "brown",
        textAlign : "center"
    }
    return(
        <>
        <div style={{outline:"solid", width:"12cm", marginLeft:"10cm"}}>
            <div style={{display:"grid", justifyContent:"center"}}><img style={{padding:5}} src={data.picture?.large} alt="pic" /></div>
            <h3 style={myStyle}>Name : {data.name?.first}</h3>
            <h3 style={myStyle}>Gender : {data.gender}</h3>
            <h3 style={myStyle}>Age : {data.dob?.age}</h3>
            <h3 style={myStyle}>City : {data.location?.city}</h3>
            <h3 style={myStyle}>Country : {data.location?.country}</h3>
            <h3 style={myStyle}>Email : {data.email}</h3>
            
        </div>
        
        </>
    )
}

export default Card