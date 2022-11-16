import { initializeApp} from "firebase/app"
import{getStorage,ref,uploadBytes} from "firebase/storage"
import {Modal,Form,Input,Button,Upload} from "antd"

const firebaseConfig = {
    apiKey: "AIzaSyB09bxjnwjS27h4IzMJ-bsxFRl1EMjjv6Y",
    authDomain: "upload-storage-fh.firebaseapp.com",
    projectId: "upload-storage-fh",
    storageBucket: "upload-storage-fh.appspot.com",
    messagingSenderId: "139454573639",
    appId: "1:139454573639:web:38ffda6153291a10139562"
  };


export default function UploadModal({setShowUpload,setPhotoList}) {
    const handleNewPhoto =(values) => {
        console.log(values) 
        //0. Connect to firebase project
        const app = initializeApp(firebaseConfig)
        const storage = getStorage(app)
        //1.Upload photo to storage bucket 
        const filename = values.photo.file.name
        const imageRef = ref(storage,`photo/${filename}`) 
        uploadBytes(imageRef,values.photo.file)
        .then(() => console.log('upload successful'))
        .catch(err => console.error(err))

        //2. figure out URL for that photo
        const photoUrl = `https://firebasestorage.googleapis.com/v0/b/upload-storage-fh.appspot.com/o/photos%2F${filename}2022.10.31-BocaCode-42.jpg?alt=media`
        //3. put that UL in to new photo object
        let newPhotoObj = values
        newPhotoObj.photo = photoUrl
        //4.send a post request to API
        fetch("http://localhost:5002/photos",{
            method:'POST',
            headers:{'Content-type': 'application/json' },
            body:JSON.stringify(newPhotoObj)
        })

        .then(results => results.json())
        .then(newListOfPhotos => {

            //5.get back new list of photos
            setPhotoList(newListOfPhotos)

              //6.set photolist 
              closeModal()

        })
        .catch(alert)
        
      
    }
    const closeModal = () => setShowUpload(false)
    return (
        <>
        <Modal title="Upload Photo" open={true} footer={null} onCancel={closeModal} >
            <Form labelCol={{ span:8}} wrapperCol={{span:16}} onFinish={handleNewPhoto}>
                <Form.Item label="User Name" name="username">
                    <Input required/>
                </Form.Item>
                <Form.Item label="Profile Picture URL" name="profilePic">
                    <Input required/>
                </Form.Item>
                <Form.Item label="Photo" name="photo">
                    <Upload listType="picture-card">
                        +
                    </Upload>
                </Form.Item>
                <Form.Item label="Description" name="description">
                    <Input.TextArea rows={4} required/>
                </Form.Item>
                <Form.Item wrapperCol={{offset:8,span:16}}>
                    <Button type="primary" htmlType="submit"> Save Photo</Button>
                    
                </Form.Item>
                

            </Form>
        </Modal>
        </>
    )
}