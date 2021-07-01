const Square =() => {
    return(
        <div className="square"></div>
    );
}

const Row =() => {
    return(
        <div className="row">
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
        </div>
    );
}

const Card =() => {
    return(
        <div className="card">
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
        </div>
    );
}

export default Card;