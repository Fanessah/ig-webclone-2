import { useState, useEffect } from "react"
import {Button } from "antd"

export default function Feed() {
    const [photoList, setPhotoList] = useState()
    useEffect(() => {
        fetch("https://express-ts-fh.web.app/photos")
            .then(results => results.json())
            .then(data => setPhotoList(data))
            .cath(alert)
    }, [setPhotoList])


    return (
        <section>
            {!photoList
                ? <p>Loading...</p>
                : <p> {photoList.length}</p>
            
            }
            <Button className="fab" type="primary" shape="circle" size="large"></Button>
        </section>

    )
}
