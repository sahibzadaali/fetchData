import axios from 'axios';
import './style.css'
import React, { useEffect, useState } from 'react';
const PhotoApi = () => {
  const [showPhoto, setShowPhotos] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos/?_limit=10')
      .then(res => {
        setShowPhotos(res.data);
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <h1 className="photoStyle">PHOTO API</h1>
      <div className="tableStack">
        <table className="tableData">
          <thead>
            <tr>
              <th>Almum ID</th>
              <th>Title</th>
              <th>URL</th>
              <th>ThumbNail URL</th>
            </tr>
          </thead>
          <tbody>
            {(showPhoto.length > 0) ? showPhoto.map((showPhotos) => {
              return (
                <tr key={showPhotos.id}>
                  <td>{showPhotos.id}</td>
                  <td>{showPhotos.title}</td>
                  <td className="image"><img src={showPhotos.url}></img></td>
                  <td>{showPhotos.thumbnailUrl}</td>
                </tr>
              )
            }) : <tr><td colSpan="4">Loading...</td></tr>}
          </tbody>
        </table>
      </div>
    </>

  )
}
export default PhotoApi;