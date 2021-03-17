import {AddLabel} from "./AddLabel.js";
import {Pin} from "./Pin.js"
import {Color} from "./Color.js"
export function NoteItem({note,noteList,setNoteList,setTagFilterList,tagFilterList})
  {
    function deleteNote(){
      const newList = [...noteList].filter((noteInList)=>noteInList.noteId!==note.noteId);

      setNoteList(newList);
    }

    function setStateAfterPin(){
      const newList = [...noteList];

      newList.map((noteInList) => {
        if (noteInList.noteId === note.noteId) {
          noteInList.pinned = !note.pinned;
        }
      });

      setNoteList(newList);
    }

    function addTagToTagsListInNote(tag){
      let newList = [...noteList];

      newList.map((noteInList) => {
        if (noteInList.noteId === note.noteId) {
          noteInList.tagsList = [...note.tagsList, tag];
        }
      });

      setNoteList(newList);
      }

    function setColor(code){
      const newList = [...noteList];

      newList.map((noteInList) => {
        if (noteInList.noteId === note.noteId) {
          noteInList.color=code;
        }
      });

      setNoteList(newList);
    }  
    return (
      <div style={{ backgroundColor: note.color }} className="noteItem-div">

        {/***Title***/}
        <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}> {note.title} </div>
         
        {/***Note Text***/}
        <div className="note-text"style={{margin:"1rem"}}>{note.noteText}</div>
      
        {/***Tags list***/}
        <div>
          {     
          note.tagsList.map((label) => {
            return <div className="label-item">{label.labelName}</div>;
          })}
        </div>

        <div className="utilities-div"style={{display:"flex",flexWrap:"wrap" ,justifyContent:"space-between",backgroundColor:"plum"}}>
        
          <Pin noteItem={note} setStateAfterPin={setStateAfterPin}/>

          <Color setColor={setColor}/>

          <div className="label">
            <button>Add Label</button>
            <AddLabel
              note={note}
              noteList={noteList}
              setNoteList={setNoteList}
              setTagFilterList={setTagFilterList}
              tagFilterList={tagFilterList}
              addTagToTagsListInNote={addTagToTagsListInNote}
            />
          </div>

          <div>
          <button style={{backgroundColor:"transparent",border:0,outline:0}}onClick={deleteNote}> <span class="material-icons">delete</span> </button>
          </div>

        </div>
      </div>
    );
  }