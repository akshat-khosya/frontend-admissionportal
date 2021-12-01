import React, { useState } from "react";
import axios from "axios";
function FileDetails() {
    const[files,setFiles]=useState();
  function handelChange(e) {
      const file=e.target.files[0];
      setFiles(file);
  }
  return (
    <div>
      <form>
        <input onChange={handelChange} type="file"></input>
      </form>
    </div>
  );
}

export default FileDetails;
