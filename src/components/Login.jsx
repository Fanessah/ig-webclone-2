import { Button, Form, Input, Layout } from 'antd'


export default function Login({ setUser, setToken }) {
  const handleFormSubmit = (values) => {
    fetch('http://localhost:5002/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    })
      .then(response => response.json())
      .then(data => {
        setToken(data.token)
        setUser(data.user)
      })
      .catch(alert)
  }
  return (
    <Layout.Content style={{ padding: '50px' }}>
      <h1>Login</h1>
      <Form onFinish={handleFormSubmit} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
        <Form.Item label="Email" name="email" rules={[{
          required: true,
          message: 'Please enter a valid email address'
        }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password" rules={[{
          required: true,
          message: 'Please enter password'
        }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
          <Button type="primary" htmlType='submit'>Login</Button>
        </Form.Item>
      </Form>
    </Layout.Content>
  )
}
