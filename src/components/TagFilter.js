export function TagsFilter({tagFilterList,setIsFiltered,noteList,noteFilterList,setNoteFilterList,setFilter})  
  {
    return (
      <div style={{backgroundColor:"pink",height:"100%"}}>
        <div>TAGS</div>
        {
        tagFilterList.map((item) => {
          return (
            <div
              onClick={() => {
                setFilter(item);
                setIsFiltered(true);
              }}>
              {item.labelName}
            </div>
          );
        })}
      </div>
    );
  }