import {useState} from "react";
import {v4} from "uuid";
export function AddLabel({note,noteList,setNoteList,setTagFilterList,tagFilterList,addTagToTagsListInNote})
  {
    const [labelInput, setLabelInput] = useState("");
  
    function addTagToTagFilterList(tag){

      if (!tagFilterList.includes(tag)) {
        let newTagList = [...tagFilterList, tag];
        setTagFilterList(newTagList);
      }
    }

    function checkTagExists(){
      if(labelInput===""){
        return true;
      }
      for(let i in tagFilterList){
        if(tagFilterList[i].labelName===labelInput)
        {
          return true;
        }  
      }
      return false;
    }
    
    return (
      <div>
        <div className="labeldropdown">
          {/***Tag Input****/}
          <input
            className="tag-input"
            value={labelInput}
            onChange={(e) => {
              setLabelInput(e.target.value);
            }}
            placeholder="add tag"
          ></input>

          {/***Displaying used tags in drop down****/}
          <div>
            {tagFilterList.map((tag) => {
              if (!note.tagsList.includes(tag)) {

                return (
                  <div style={{ cursor: "pointer" }} onClick={() => {addTagToTagsListInNote(tag)}}>
                    {tag.labelName}
                  </div>
                );
              }
            })}
          </div>

          {/***Creating new Tags in note***/}
          <button
            style={{width:"100%"}}
            disabled={checkTagExists()}
            onClick={() => {
                const labelObj={
                  labelId: v4(),
                 labelName: labelInput
                }
              addTagToTagFilterList(labelObj);
              addTagToTagsListInNote(labelObj);
              setLabelInput("");  
              }}>
            + create {labelInput}
          </button>
        </div>
      </div>
    );
  }