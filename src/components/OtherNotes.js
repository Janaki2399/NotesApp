import {NoteItem} from "./NoteItem.js";
export function OtherNotes({ noteList, setNoteList,setTagFilterList,tagFilterList,isFiltered,filter})
  {
    function isFilterNote (note) {
      for(const i in note.tagsList){
        if(note.tagsList[i].labelId===filter.labelId){
          return true;
        }
      }
      return false;
    }
    return (
      <div>
        <div>Other Notes</div>

        <div className="notes-div">
          {
            noteList.map((noteItem) => {
             
              if ((noteItem.pinned === false && isFiltered && isFilterNote(noteItem)) ||
               (noteItem.pinned === false && !isFiltered) ) {

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
            })
          }
        </div>
      </div>
    );
  }