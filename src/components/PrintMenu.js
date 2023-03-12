function PrintMenu() {
    const types = ["B/W", "Color"]
    const sizes = ["A4 Size", "A5 Size", "A3 Size", "A2 Size"]

    const onOptionChange = (event) => {
        console.log("user chose ", event.target.value )
    }
    return (
        <div>
            <h2>Print Options</h2>
            <label>Size</label>
            <select onChange={onOptionChange}>
                {sizes.map((size, index) => {
                    return <option key={index} >
                        {size}
                    </option>
                })}
            </select>

            <label>Type</label>
            <select onChange={onOptionChange}>
                {types.map((type, index) => {
                    return <option key={index} >
                        {type}
                    </option>
                })}
            </select>
            
            <label>Quantity</label>
            <input type="text"></input>
            <label>Amount</label>
            <input type="text"></input>
            
            <button>Submit</button>
        </div>
    )
}

export default PrintMenu;