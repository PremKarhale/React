function Colorpalate({ name, shades }) {
    const scale = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

    return <>
        <div className="Parent">
            <div className="inside">
                <div className="white">
                    <p style={{ color: "black" }}>{name}</p>
                    <p>colors.cool.{name}</p>
                </div>
                <div className="palate">
                    
                    {shades.map((shade,index) => (
                        
                        <div key={shade} style={{ backgroundColor: shade, display:"flex",justifyContent:"space-between"}}>
                            <span className="shade-no">{scale[index]}</span>
                            <span className="shade-hex">{shade}</span>
                        </div>
                    ))}

                </div>
            </div>

        </div>

    </>
}
export default Colorpalate