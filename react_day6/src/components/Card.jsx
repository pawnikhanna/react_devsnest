import React, {useState} from "react";

const Data=({name, calorie, data, setData, index})=>{
    return (
        <div className="data">
            <div className="data-header">
                <h1> {name} </h1>
                <button
                    onClick={()=> {
                        let newData = data.filter((el,i) => i!==index)
                        setData(newData);
                    }}
                >Delete</button>
            </div>
            <h2> you have consumed {calorie} cals today</h2>
        </div>
    );
}

const Card=()=>{
    const [data,setData] = useState([
        {name: "Pizza", calorie:"56"},
        {name: "Burger", calorie:"69"},
        {name: "Coke", calorie:"500"},
        {name: "Browne", calorie:"180"},
        {name: "Fried Rice", calorie:"90"},
        {name: "Pani Puri", calorie:"10"},
        {name: "Lassania", calorie:"200"}
    ])
    function Empty(){
        if(data.length===0){
            return(
                <h1 style={{marginLeft:'30%'}}>
                    No Entry
                </h1>
            )
        }
        else{
            return <></>
        }
    }
    return (
        <div className="container">
            <div className="heading">
                <h1>Calorie Read Only</h1>
            </div>
            <div className="card-container">
                {data.map((card, index) => (
                    <Data key={index} name={card.name} calorie={card.calorie} data={data} setData={setData} index={index}/>
                ))}
                <Empty/>
            </div>
        </div>
    );
}
export default Card;