import React,{useState} from 'react'

const Search = () => {
    const[inputVal, setInputVal] = useState("");
  return (
    <>
      <input value={inputVal}  onChange={(e)=>{setInputVal(e.target.value)}} type="text" placeholder="Add here.." className="m-2 border rounded-lg border-black border-2 p-4 text-xl"/>
      <div className=""><img /></div>
    </>
  )
}

export default Search
