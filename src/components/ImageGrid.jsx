import React from 'react'
import useFirestore from '../hooks/useFirestore'

const ImageGrid = ({setSelectedImg}) => {
    const { docs } = useFirestore('images')
    console.log(docs)
    return (
        <div className='img-grid'>
            { docs && docs.map(doc => (
                <div className='img-wrap' 
                key={doc.id} 
                onClick={() => setSelectedImg(doc.urlRef)}
                >
                    <img src={doc.urlRef} alt="upload pic" />
                </div>
            ))}
        </div>
    )
}

export default ImageGrid