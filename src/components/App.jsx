import React ,{useState}from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";



export default function App(){
    const[notes,setNotes]=useState([]);
    function addNote(newNote){
      setNotes((prevValue)=>{
        return [...prevValue,newNote]
      })
    }
    function deleteNote(id){
      setNotes(prevValue=>{
        return prevValue.filter((noteItems,index)=>{
          return index !== id;
        })
      })
    }

return(
    <div>
        <Header />
        <CreateArea 
         onAdd={addNote}/>
         {notes.map((noteItems,index)=> {
            return <Note 
            key={index}
            id={index}
            title={noteItems.title} 
            content={noteItems.content}
            onDelete={deleteNote}/>
         })}
        
        <Footer />
    </div>
   
)
}
