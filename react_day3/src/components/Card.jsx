const Data=({header, description})=>{
    return (
        <div className="data">
            <h1 className="header">
                {header}
            </h1>
            <h2 className="description">
                {description}
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
                <Data header="Pizza" description="you have consumed 56 cals today"/>
                <Data header="Burger" description="you have consumed 69 cals today"/>
                <Data header="Coke" description="you have consumed 500 cals today"/>
                <Data header="Browne" description="you have consumed 180 cals today"/>
                <Data header="Fried Rice" description="you have consumed 90 cals today"/>
                <Data header="Lassania" description="you have consumed 200 cals today"/>
                <Data header="Pani Puri" description="you have consumed 10 cals today"/>
            </div>
        </div>
    );
}
export default Card;