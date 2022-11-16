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
                <Form.Item label="User Name" name="username">
                    <Input required/>
                </Form.Item>
                <Form.Item label="Profile Picture URL" name="ProfilePic">
                    <Input required/>
                </Form.Item>
                <Form.Item label="Photo" name="Photo">
                    <Input required/>
                </Form.Item>
                <Form.Item label="Description" name="description">
                    <Input required/>
                </Form.Item>
                <Form.Item wrapperCol={{offset:8,span:16}}>
                    <Button type="primary" htmlType="submit"> Save Photo</Button>
                    <Input required/>
                </Form.Item>
                

            </Form>
        </Modal>
        </>
    )
}