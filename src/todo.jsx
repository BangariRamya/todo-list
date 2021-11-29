import {useState} from 'react';
import List from './list';

const Todo = () => {
    const [state, setState] = useState("");
    const [list, setList] = useState([]);

   //console.log(state);   ...same output as console.log(e.target.value); 

  const add = (e) => { 
    //   console.log(e.target.value); 
      setState(e.target.value);
      //setState("");
  }

 const addList =() => {
     setList([...list, state]);
     setState("");
 }

    return (
        <>
      
            <input type="text" name="text" placeholder="enter text" value={state} onChange={add} />
            <button type="submit" onClick={addList}>Add</button>
                
            {/* <ul>
                {list.map((item) => <li key={item}>{item}</li>)}
            </ul> */}

            <List props={list}/>
        </>
    );

}

export default Todo;