import React, { useState } from "react";

 

const List = ({items}) => {

  const [list, setData] = useState(items);

  function random(){
    return 0.5 - Math.random()
  }

  function clickHandle() { 
    setData([...list].sort(random)); 
  }
  return (
        <ol>
          {list.map((list) => (
              <li onClick={clickHandle}>{list}</li>
          ))}
       </ol>    
  );
}

export default function App (){
    return (
        <div>
          <List items={["A", "B", "C", "D", "E"]} />
        </div>
      );
}
