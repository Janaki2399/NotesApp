import {NoteItem} from "./NoteItem"; 
import { useState } from "react";
export function PinnedNotes({noteList, setNoteList,setTagFilterList,tagFilterList,isFiltered,filter})
  {
  
    function isFilterNote(note){
      for(const i in note.tagsList){  
        if(note.tagsList[i].labelId === filter.labelId){   
          return true;
        }
      }
      return false;
    }
    
    return (
      <div>
        <div>Pinned Notes</div>
        <div className="notes-div">
          {
          noteList.map((noteItem) => {  
            if ((noteItem.pinned === true && isFiltered && isFilterNote(noteItem))  
              || (noteItem.pinned === true && !isFiltered) ) {
              
              return (
                <NoteItem
                  note={noteItem}
                  noteList={noteList}
                  setNoteList={setNoteList}
                  setTagFilterList={setTagFilterList}
                  tagFilterList={tagFilterList}
                />
              );
            }
          
          })}
        </div>
      </div>
    );
  }