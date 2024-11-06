import { useEffect, useState } from "react"

const Card=({name,flag})=>{
    return <div style={{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        textAlign:"center",
        justifyContent:"center",
        border:"1px solid gray",
        borderRadius:"5px",
        padding:"10px",
        width:"200px",
        height:"200px",


    }}>
        
        <img src={flag}
        alt="CountryFlag" 
        style={{ 
            width:"100px", 
            height:"100px",
            }}/>
        <h2> {name} </h2>
    </div>
}


function Countries(){
    // const countries=[0,1,2,3,4,5,6]
    const ApiEndpoint=" https://xcountries-backend.azurewebsites.net/all"
    const [countries,setCountries]=useState([]);
    console.log(countries);

    useEffect(()=>{
        fetch(ApiEndpoint) 
        .then(res=>res.json())
        .then(data=>setCountries(data))
        .catch(error=>console.error("Error fetching data:",error));
    },[])
    return (
        <div style={{display:"flex", flexWrap:"wrap", gap:"10px"}}>
       { countries.map(({abbr,flag,name})=>( 
       <Card key={abbr} flag={flag} name={name}/>
       ))
}
</div>
    )
}

export default Countries;