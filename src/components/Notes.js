import {PinnedNotes} from "./PinnedNotes.js";
import {OtherNotes} from "./OtherNotes.js";
export function Notes({noteList, setNoteList,setTagFilterList,tagFilterList,isFiltered,filter}){
   
    function isNotePinned(notesObj) {
    return notesObj.pinned === true;
    }
    const numPinnedNotes = noteList.filter(isNotePinned).length;
    return(
        <div >        
        {noteList.length > 0 && (
          <div>
            <div>
              {numPinnedNotes > 0 && (
                <PinnedNotes
                  noteList={ noteList}
                  setNoteList={setNoteList}
                  setTagFilterList={setTagFilterList}
                  tagFilterList={tagFilterList}
                  isFiltered={isFiltered}
                  filter={filter}
                 
                />
              )}
            </div>
            <div>
              {noteList.length - numPinnedNotes > 0 && (
                <OtherNotes
                  noteList={ noteList}
                  setNoteList={setNoteList}
                  setTagFilterList={setTagFilterList}
                  tagFilterList={tagFilterList}
                  isFiltered={isFiltered}
                  filter={filter}
                  
                />
              )}
            </div>
          </div>
        )}
        </div>
    )
}