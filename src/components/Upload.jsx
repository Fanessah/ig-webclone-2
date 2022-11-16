import {Modal,Form,Input,Button,} from "antd"

export default function Upload({setShowUpload}) {
    const handleNewPhoto =(values) => {
        //send a post request to API
        //get back new list of photos
        //set photolist 
    }
    const closeModal = () => setShowUpload(false)
    return (
        <>
        <Modal title="Upload Photo" open={true} footer={null} onCancel={closeModal} >
            <Form label col ={{ span:8}} wrapperCol={{span:16}} onFinish={handleNewPhoto}>
                <Form.Item label=""
            </Form>
        </Modal>
        </>
    )
}