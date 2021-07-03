const Data=({header, description})=>{
    return (
        <div className="data">
            <h1 className="header">
                {header}
            </h1>
            <h2 className="description">
                you have consumed {description} cals today
            </h2>
        </div>
    );
}

const Card=()=>{
    return (
        <div className="container">
            <div className="heading">
                <h1>Calorie Read Only</h1>
            </div>
            <div className="card-container">
                <Data header="Pizza" description="56"/>
                <Data header="Burger" description="69"/>
                <Data header="Coke" description="500"/>
                <Data header="Browne" description="100"/>
                <Data header="Fried Rice" description="90"/>
                <Data header="Lassania" description="200"/>
                <Data header="Pani Puri" description="10"/>
            </div>
        </div>
    );
}
export default Card;