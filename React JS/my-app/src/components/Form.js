import React,{useState} from 'react'
export default function Form(props) {
  const handleUpClick = ()=>{
    // console.log("handle was click:"+ text);
    let res=text.toUpperCase();
    // phly asy kia tha ma naa 
    // setText("you have click on uppper case");
    setText(res);
  } 

  const handleLoClick = ()=>{
    // console.log("handle was click:"+ text);
    let res=text.toLowerCase();
    // phly asy kia tha ma naa 
    // setText("you have click on uppper case");
    setText(res);
  } 

  const handleOnChange = (event)=>{
    // console.log("On change");
    setText(event.target.value);
  }
     const handleAllClear = ()=>{
    setText("")

  } 
  const handleAllCopy=()=>{
    console.log('i am a copy');
    let res=document.getElementById("exampleInputEmail1")
   res.select();
   navigator.clipboard.writeText(res.value);
  }
  // const handleExtraSpaces=()=>{
  //   let newText=text.split(/[ ]+/);
  //   setText(newText.join(" "))
  // }

  // chat gpt sy search kr k kia ha
  const handleExtraSpaces = () => {
    const trimmedText = text.replace(/\s+/g, ' ').trim();
    setText(trimmedText);
  }

  const [text, setText] = useState("");
  return (
   <>
       <div className="mb-3">
      <form>
        <h1>{props.heading}</h1>
   {/* <div className="mb-3">
   <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" style={(background: props.mode==='light'?'gray':'white') aria-describedby="emailHelp" value={text} onChange={handleOnChange} />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>   */}
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" style={{backgroundColor: props.mode==='dark'?'gray':'white'}} aria-describedby="emailHelp" value={text} onChange={handleOnChange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>

   {/* <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" value={text}/>
  </div>  */}
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upper case</button>
  <button type="submit" className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lower case</button>
  <button type="submit" className="btn btn-primary mx-2" onClick={handleAllClear}>Clear</button>
  <button type="submit" className="btn btn-primary mx-2" onClick={handleAllCopy}>Copy</button>
  <button type="submit" className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>


</form>
    </div>
    <div className="container my-3">
      <h1>your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008* text.split(" ").length}Minutes Read</p>
      <h2>preview</h2>
      <p>{text}</p>
    </div> 
    </> 
  )
}

