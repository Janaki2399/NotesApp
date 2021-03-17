export function Pin({noteItem,setStateAfterPin}){
    return(
        <div>
            <button style={{backgroundColor:"transparent",border:"0",outline:0,position:"absolute",top:"4px",right:0}}
                onClick={setStateAfterPin} >
                    
                {noteItem.pinned ? <span class="material-icons">push_pin</span> : <span class="material-icons-outlined">push_pin</span>}
            </button>
        </div>
    );
}