import React, {useState} from 'react'

export default function TextArea() {

    let myStyle = {
        color: 'red',
        backgroundColor: 'lightblue'
    }

    const [detail, setDetail] = useState('daalo bhai')
    const upperFunc = ()=> {setDetail(detail.toUpperCase())}
    const clearFunc = ()=> {setDetail("")}
    const changeFunc = (poop)=> {setDetail(poop.target.value)}

    // const clickFunc = function() {}

  return (
    <>
        <div className="container mb-3">
            <label className="form-label" style={myStyle}>Example textarea</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" value={detail} onChange={changeFunc}></textarea>

            <div className="container my-3">
                <button type="button" className="btn btn-primary" onClick={upperFunc}>ToUpperCase</button>
                <button type="button" className="btn btn-primary mx-3" onClick={clearFunc}>Clear</button>
            </div>
        </div>
    </>
  )
}
