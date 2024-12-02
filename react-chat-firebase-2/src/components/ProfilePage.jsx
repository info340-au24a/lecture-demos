import React, { useState } from 'react';

import { getDatabase, ref, set as firebaseSet} from 'firebase/database';

export default function ProfilePage(props) {
  const { currentUser } = props;
  //convenience
  const displayName = currentUser.userName;

  const [imageFile, setImageFile] = useState(undefined)
  const [imageUrl, setImageUrl] = useState(currentUser.userImg) //initial URL

  //image uploading!
  const handleChange = (event) => {
    if(event.target.files.length > 0 && event.target.files[0]) {
      const imageFile = event.target.files[0]
      console.log(imageFile);
      const objURL = URL.createObjectURL(imageFile);
      console.log(objURL);
      setImageFile(imageFile);
      setImageUrl(URL.createObjectURL(imageFile));
    }
  }

  const handleImageUpload = (event) => {
    console.log("Uploading", imageFile);

    const db = getDatabase();
    const imgRef = ref(db, "testImage");

    //make a JavaScript "Image" <img>
    const imgElem = new Image();
    imgElem.src = imageUrl;
    console.log(imgElem);
    
    const bitmap = createImageBitmap(imgElem);
    
    //HACKY DO NOT DO
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    //not drawing image yet
    ctx.drawImage(bitmap, 0,0, imgElem.width);
    
    const url = canvas.toDataURL();
    console.log(url);

    firebaseSet(imgRef, url);
  }

  return (
    <div className="container">
      <h2>
        {props.currentUser.userName && displayName+"'s"} Profile
      </h2>

      <div className="mb-5 image-upload-form">
        <div className="mb-2">
          <img src={imageUrl} alt="user avatar preview" />
        </div>        
        <label htmlFor="imageUploadInput" className="btn btn-sm btn-secondary me-2">Choose Image</label>
        <button className="btn btn-sm btn-success" onClick={handleImageUpload}>Save to Profile</button>
        <input type="file" name="image" id="imageUploadInput" className="d-none" onChange={handleChange}/>
      </div>
    </div>
  )
}