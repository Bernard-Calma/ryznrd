const PreviewToolTip = ({pc}) => {
    const {
        name,
        cpu,
        graphicsCard,
        memory,
        motherboard,
        pcCase,
        powerSupply,
        storage
    } = pc;

    const memoryInfo = {
        brand: memory.memoryList[0].brand,
        model: memory.memoryList[0].model,
        speed: memory.memoryList[0].speed,
        capacity: memory.memoryList.reduce((n, {size}) => n + size, 0)
    }

    return(
        <div className="previewToolTip">
            <p>Case: {`${pcCase.brand} ${pcCase.model}`}</p>
            <p>MOBO: {`${motherboard.brand} ${motherboard.model}`}</p>
            <p>CPU: {`${cpu.brand} ${cpu.model}`}</p>
            <p>RAM: {`${memoryInfo.brand} ${memoryInfo.model} ${memoryInfo.speed}MHZ ${memoryInfo.capacity}`}</p>
            <p>GPU: {`${graphicsCard.brand} ${graphicsCard.model}`}</p>
            <p>PSU: {`${powerSupply.brand} ${powerSupply.model}`}</p>
            {
                storage.map((storageItem, key) => 
                    // console.log(storageItem)
                    <p key={key}>Storage: {`
                        ${storageItem.brand} 
                        ${storageItem.model} 
                        ${storageItem.capacity >= 1000 ? storageItem.capacity/1000 + "TB" : storageItem.capacity + "GB"}`}</p>
                )
            }
            
        </div>
    )
}

export default PreviewToolTip