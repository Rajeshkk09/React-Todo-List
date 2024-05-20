
import { useEffect, useState } from "react";
import Dispaly from "./dispaly";

import React, { useRef } from 'react';


function App() {
  const inputref = useRef();
  const [leftData, setleftData] = useState([]);
  const [rightData, setrightData] = useState([]);

  // Clear all function here
  function ClearAll() {
    setleftData([]);
    setrightData([]);
    localStorage.removeItem("leftData",);
    localStorage.removeItem("rightData",);
  }


  function addcontant(data) {
    // console.log(data ,"hii")
    // console.log(inputref.current.value ,"inp")
    if (!leftData.includes(inputref.current.value)) {
      setleftData(
        [

          ...leftData, inputref.current.value
        ]
      )
    }
    inputref.current.value = ""

  }



  // creacte me rajesh 

  // const inputData = (data) => {
  //   // if (data !== "") {
  //     setleftData(
  //       [
  //         data,
  //         ...leftData
  //       ]
  //     )
  //   // }
  // }



  const moveToright = (index) => {
    // console.log("moveToright", index)

    // move from left data to right  data 

    // step1: add a copy off that to  right box first 
    setrightData(
      [
        ...rightData,
        leftData[index]
      ]
    )
    if (leftData.length == 1) {
      setleftData([])
      localStorage.removeItem("leftData")
    } else {
      const newLeftData = leftData.filter(
        (datas, i) => {
          if (i === index) return false;
          else return true;
        }
      )
      setleftData(newLeftData);
      // step2: Delate data from leftData 
    }

  }
  const moveToleft = (index) => {
    // console.log("moveToleft",index)
    setleftData(
      [
        ...leftData,
        rightData[index]
      ]
    )

    if (rightData.length == 1) {
      setrightData([])
      localStorage.removeItem("rightData")
    } else {
      const newRightData = rightData.filter(
        (dates, i) => {
          if (i === index) return false;
          else return true;
        }
      )
      setrightData(newRightData);
      // move from right data to left  data 
    }
  }

  //1111111.... localstorage efect

  useEffect(
    () => {
      if (leftData.length != 0) {

        localStorage.setItem("leftData", JSON.stringify(leftData));
      }
    },
    [leftData]
  )

  useEffect(
    () => {
      const lsleftData = localStorage.getItem("leftData")
      if (lsleftData != undefined) {
        setleftData(JSON.parse(lsleftData));
      }
    },
    []
  )

  // 222222....... localStorage right useefect 
  useEffect(
    () => {
      if (rightData.length != 0) {

        localStorage.setItem("rightData", JSON.stringify(rightData));
      }
    },
    [rightData]
  )

  useEffect(
    () => {
      const lsrightData = localStorage.getItem("rightData")
      if (lsrightData != undefined) {
        setrightData(JSON.parse(lsrightData));
      }
    },
    []
  )


  return (
    <div className="container">

      <div className="d-flex my-3" style={{ gap: 10 }}>
        <input ref={inputref} type="search" className="text-light fw-bold form-control border border-dark fw-bold" style={{
          background: "linear-gradient(to bottom right, #FD8451, #FFBD6F)",
          fontSize: 25,
        }} />
        <button onClick={addcontant} className="btn btn-primary">Add</button>
        <button onClick={ClearAll} className="btn btn-primary">Clear All</button>
      </div>

      <div className="row">
        <Dispaly ClearAll={ClearAll} items={leftData} moveHendler={moveToright} Mode="bg-primary" title="Left" />
        <Dispaly ClearAll={ClearAll} items={rightData} moveHendler={moveToleft} Mode="bg-secondary" title="Right" />

      </div>

    </div>
  );
}

export default App;
