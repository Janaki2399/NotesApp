export function Color(prop){
    return (
        <div class="color-flex">
            <div className="color-div" style={{backgroundColor:"#c5d7bd"}}
            onClick={()=>{
                prop.setColor("#c5d7bd")
            }}> &nbsp; </div>
            
            <div className="color-div"
            style={{backgroundColor:"#f1d1d0"}}
            onClick={()=>{
                prop.setColor("#f1d1d0")
            }}
            >&nbsp;</div>
            <div className="color-div"
            style={{backgroundColor:"#ffd384"}}
            onClick={()=>{
                prop.setColor("#ffd384")
            }}
            >&nbsp;</div>
            <div className="color-div"
            style={{backgroundColor:"#c6fced"}}
            onClick={()=>{
                prop.setColor("#c6fced")
            }}
            >&nbsp;</div>
        </div>
    );
}