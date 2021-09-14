import React, { useEffect } from "react";
import HighlightIcon from "@material-ui/icons/Highlight";
import axios from 'axios';

function Header() {


  const [imgobj, setImgObj] = React.useState(null)

  useEffect(() => {
    var num = Math.floor(Math.random() * 100);
    const url = 'https://picsum.photos/id/'

    axios.get(url + num.toString() + '/info')
      .then((response) => {
        setImgObj(response.data)
      })


  }, [])
  if (!imgobj) return null;
  console.log(imgobj.download_url)
  return (
    <header>
      <h1>
        <HighlightIcon />
        TasksBoard
        {imgobj && <img id='target' src={imgobj.download_url} alt="profile" />}
      </h1>



    </header>
  );
}

export default Header;
