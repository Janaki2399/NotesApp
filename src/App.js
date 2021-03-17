import './App.css';
import {useState} from "react";
import {NotesInput} from "./components/NotesInput.js";
import {Notes} from "./components/Notes"
import {TagsFilter} from "./components/TagFilter.js";

function App() {
  const [noteList, setNoteList] = useState([]);
  const [tagFilterList, setTagFilterList] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [filter,setFilter]=useState({});
  
  function addTagFilter(list) {
    let sortedList = [...list];
    sortedList.sort((a, b) => {
      let firstName = a.labelName.toUpperCase();
      let secondName = b.labelName.toUpperCase();
      if (firstName < secondName) {
        return -1;
      } else if (firstName > secondName) {
        return 1;
      } else {
        return 0;
      }
    });

    setTagFilterList(sortedList);
  }
  
  
  return (
    <div className="App">
        {/***TAG FILTER COMPONENT***/}

       <div class="tagFilter-div">
       <button
          disabled={isFiltered ? false : true}
          onClick={() => {
            setIsFiltered(false);
          }}
        >
          All Notes
        </button>
        <TagsFilter
          tagFilterList={tagFilterList}
          setIsFiltered={setIsFiltered}
          noteList={noteList}
          setFilter={setFilter}
        />
      </div>
      <div>

        {/**NOTES INPUT COMPONENT***/}

        <NotesInput
          noteList={noteList}
          setNoteList={setNoteList}
          setTagFilterList={addTagFilter}
          tagFilterList={tagFilterList}
        />

        {/**NOTES COMPONENT***/}

        <Notes noteList={ noteList}
              setNoteList={setNoteList}
              setTagFilterList={addTagFilter}
              tagFilterList={tagFilterList}
              isFiltered={isFiltered}
              filter={filter}/>
       
      </div>
    </div>
  );
}

export default App;
