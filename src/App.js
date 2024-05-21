import './App.css';
import { useEffect, useState} from 'react';

const App = () => {
  const [HtmlData,setHtmlData]=useState('');
  const [CssData,setCssData]=useState('');
  const [JsData,setJsData]=useState('');
const [Display,setDisplay]=useState('');

  const handleHtml=(e)=>{
    setHtmlData(e.target.value);
  }
  const handleCss=(e)=>{
    setCssData(e.target.value);
  }
  const handleJs=(e)=>{
    setJsData(e.target.value);
  }

  useEffect(()=>{
    setTimeout(()=>{
      setDisplay(`<html>${HtmlData}</html>
                  <style>body{
                    background-color:white;
                    font-family:Verdana;
                    font-size:22px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  }
                  ${CssData}</style>
                  <script>${JsData}</script>`
                )
    },250)
  },[HtmlData,CssData,JsData])
  console.log(HtmlData,CssData,JsData);
  return (
  <div className='background'>
    <h2>CODE EDITOR</h2>
    <div className='container'>
      
      <div className='leftEditor'>
        <div className='edit'>
          <center>HTML  <i class="fa-brands fa-html5"></i></center><br/>
          <textarea className='ta' onChange={handleHtml} value={HtmlData}></textarea>
        </div>
        <div className='edit'>
          <center>CSS  <i class="fa-brands fa-css3" ></i></center><br/>
          <textarea className='ta' onChange={handleCss} value={CssData}></textarea>
        </div>
        <div className='edit'>
          <center>JS  <i class="fa-brands fa-js"></i></center><br/>
          <textarea className='ta' onChange={handleJs} value={JsData}></textarea>
        </div>
      </div>
      <div className='rightOp'>
        <h3>OUTPUT</h3>
        <center>
        <iframe className='output' title='Output' srcDoc={Display}></iframe>
        </center>
      </div>
    </div>
  </div>
  )
}

export default App
