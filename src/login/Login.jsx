// import { Button } from "../component/Button.jsx"
// import { Input } from "../component/Input.jsx"
// export const Login = () => {
//     return (

//         <> 
//         <div className="container bg-slate-600 h-[500px]
//         flex justify-center 
//         ">
//           <div className="w-[350px] flex flex-col gap-3 pt-10">
//           <Input className="form-control h-12 " placeholder="Email"/>
//           <Input className ="form-control h-12 border-black border-2" placeholder="Password"/>

//           <Button>Login</Button>
//           <Button>Login with google</Button>
//           </div>
//         </div>
         
//          </>



//     )
// }


import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
export const Login  = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <> <div className='flex items-center justify-center w-full h-screen '>
      <Form 
      name="normal_login"
      className="login-form w-[400px]"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item >
        
      
        <Button type="primary" htmlType="submit" className="login-form-button bg-blue-500 w-full">
          Log in
        </Button>
        <div className="pt-3">
        Or <a href="" >register now!</a>
        </div>
      </Form.Item>
    </Form>
    </div></>
   
    
  );
};
// export default App;