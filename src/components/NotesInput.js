import {useState} from "react";
import {v4} from "uuid";
import {Pin} from "./Pin.js";
import {AddLabel} from "./AddLabel.js"
import {Color} from "./Color.js"

export const NotesInput=(prop)=> {
    const [noteObject,setNoteObject]=useState({
      title:"",
      noteText:"",
      pinned:false,
      color:"#f9f3f3",
      tag:"",
      tagsList:[]
    });

    function setStateAfterPin(){
      setNoteObject({...noteObject,pinned :!noteObject.pinned});  
    }

    function addTagToTagsListInNote(tag){
      const newTagList=[...noteObject.tagsList,tag];
      setNoteObject({...noteObject, tagsList:newTagList});
    }

    function setColor(code){
      setNoteObject({...noteObject,color:code});
    }

    return (
      <div className="editing-component" style={{backgroundColor:noteObject.color,position:"relative"}}>

        {/***Title***/}
        <div className="title-component">
          <input
            value={ noteObject.title }
            name="title"
            
            onChange={(e) => {
              setNoteObject({...noteObject,title:e.target.value});
            }}
            style={{ backgroundColor:noteObject.color }}
            className="title-input"
            placeholder="Title">
            </input>
        </div>

        {/***Notes*****/}
        <div>
          <textarea
            value={ noteObject.noteText }
            onChange={(e) => {
              setNoteObject({...noteObject,noteText:e.target.value});
            }}
            style={{  outline: "none" ,backgroundColor:noteObject.color}}
            className="note-area"
            rows="5"
            placeholder="Take a note"
          ></textarea>
        </div>

        {/****Displaying Added Tags****/}
        <div style={{ marginBottom: "1rem" }}>
          {noteObject.tagsList.map((tags) => {
            return <div className="label-item">{tags.labelName}</div>;
          })}
        </div>

        <Pin noteItem={noteObject} setStateAfterPin={setStateAfterPin}/>
 
        <div class="flex-options">
            

          <Color setColor={setColor}/>

          {/****Tag Input***/}
          <div className="label">
            <button>Add Label</button>
            <AddLabel
              note={ noteObject }
              setTagFilterList={prop.setTagFilterList}
              tagFilterList={prop.tagFilterList}
              addTagToTagsListInNote={addTagToTagsListInNote}
            />
          </div>
            {/****Submit Button****/}
          <button
              onClick={() => {
                const newNoteList=[...prop.noteList,{...noteObject,noteId:v4()}]
                setNoteObject({
                  title:"",
                  noteText:"",
                  pinned:false,
                  color:"#f9f3f3",
                  tag:"",
                  tagsList:[]
                }) 
                prop.setNoteList(newNoteList);        
              }}>
              Add note
          </button>
          
        </div>
      </div>
    );
  }