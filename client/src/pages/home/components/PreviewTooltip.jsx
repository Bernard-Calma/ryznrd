const PreviewToolTip = ({pc}) => {
    const {
        name,
        graphicsCard,
        memory,
        motherboard,
        pcCase,
        powerSupply,
        storage
    } = pc;

    return(
        <div className="previewToolTip">
            <p>Case: {`${pcCase.brand} ${pcCase.model}`}</p>
            <p>MOBO: {`${graphicsCard.brand} ${graphicsCard.model}`}</p>
            <p>CPU: {`${pcCase.brand} ${pcCase.model}`}</p>
            <p>RAM: {`${graphicsCard.brand} ${graphicsCard.model}`}</p>
            <p>GPU: {`${graphicsCard.brand} ${graphicsCard.model}`}</p>
            <p>PSU: {`${pcCase.brand} ${pcCase.model}`}</p>
            <p>Storage: {`${pcCase.brand} ${pcCase.model}`}</p>
        </div>
    )
}

export default PreviewToolTip