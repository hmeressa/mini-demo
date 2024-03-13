// ContactForm.js

import React from 'react';
import { Form, Input, Button } from 'antd';

const Contact = ()=> {
  const onFinish = (values) => {
    console.log('Submitted values:', values);
  };

    return (
        <>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Form
        name="contact_form"
        onFinish={onFinish}
        layout="vertical"
        style={{ width: 600 }}>
        <h2 className="section-title">Contact</h2>
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input your name!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: 'email',
              message: 'Please input a valid email address!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Message"
          name="message"
          rules={[
            {
              required: true,
              message: 'Please input your message!',
            },
          ]}
        >
          <Input.TextArea rows={3} />
        </Form.Item>

        <Form.Item style={{ textAlign: 'center' }}>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Submit
          </Button>
        </Form.Item>
      </Form>
            </div>
            </>
  );
}

export default Contact;
