import React from "react";
import { Modal, Button, Checkbox, Form, Input } from "antd";
const SessionModal = ({ isModalOpen, handleOk, handleCancel }) => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Modal
    
      title="Showluv Africa Platform Setup Form"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form
        name="basic"
        
     
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
         <h3 className="font-bold text-lg">Personal Information</h3>
        <hr className="mb-4" />
        <Form.Item
          label="Full Name"
          name="full_name"
          rules={[
            {
              required: true,
              message: "Please input your Full Name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email Address"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email Address!",
            },
          ]}
        >
          <Input />
        </Form.Item>{" "}
        <Form.Item
          label="Phone number"
          name="phone"
          rules={[
            {
              required: true,
              message: "Please input your Phone number!",
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>{" "}
        <h3 className="font-bold text-lg">Business Information</h3>
        <hr className="mb-4" />
        <Form.Item
          label="Business Name"
          name="business_name"
          rules={[
            {
              required: true,
              message: "Please input your Business Name!",
            },
          ]}
        >
          <Input />
        </Form.Item>{" "}
        <Form.Item
          label="Industry/Market Niche"
          name="niche"
          rules={[
            {
              required: true,
              message: "Please input your Industry/Market Niche!",
            },
          ]}
        >
          <Input />
        </Form.Item>{" "}
        <Form.Item label="Years in Business" name="years">
          <Input />
        </Form.Item>{" "}
        <h3 className="font-bold text-lg">Ecommerce Platform Requirements</h3>
        <hr className="mb-4" />
        <Form.Item
          label="Desired Subdomain"
          name="subdomain"
          rules={[
            {
              required: true,
              message: "Please input your desired subdomain!",
            },
          ]}
        >
          <Input placeholder="e.g showluv.come" />
        </Form.Item>{" "}
        <Form.Item
          label="Estimated Number of Initial Products"
          name="initial_products"
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default SessionModal;
