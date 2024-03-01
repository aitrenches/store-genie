import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import {
  Modal,
  Button,
  Checkbox,
  Form,
  Input,
  Upload,
  Radio,
  Row,
  Col,
} from "antd";
import ButtonPrimary from "./ButtonPrimary";
const SessionModal = ({ isModalOpen, handleOk, handleCancel }) => {
  const { TextArea } = Input;
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  return (
    <Modal
      footer={false}
      title="Showluv Market Platform Setup Form"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form
        name="basic"
        layout="vertical"
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
          name="existing_logo"
          label="Existing logo and brand guidelines?"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item
          label="Estimated Number of Initial Products"
          name="initial_products"
        >
          <Input type="number" placeholder="100" />
        </Form.Item>
        <Form.Item
          label="List the main categories of products you plan to sell:"
          name="categories"
        >
          <Input placeholder="e.g computer software, computer hardware" />
        </Form.Item>
        <Form.Item
          label="Preferred Payment Processors: (Stripe, PayPal, others specify)"
          name="payment_processors"
        >
          <Input placeholder="e.g Stripe, Flutterwave" />
        </Form.Item>
        <Form.Item
         rules={[
          {
            required: true,
            message: "Please select an option",
          },
        ]}
          name="multi_currency_support"
          label="Do you require multi-currency support?"
        >
          <Radio.Group>
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
         rules={[
          {
            required: true,
            message: "Please select a shipping option",
          },
        ]}
          name="ship_international"
          label="Do you plan to ship internationally?"
        >
          <Radio.Group>
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="inventory_services"
          rules={[
            {
              required: true,
              message: "Please select an option",
            },
          ]}
          label="Will you need inventory management services?"
        >
          <Radio.Group>
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item name="checkbox-group" label="Checkbox.Group">
          <Checkbox.Group>
            <div className="flex flex-col">
              <Checkbox
                value="SEO Optimization"
                style={{
                  lineHeight: "32px",
                }}
              >
                SEO Optimization
              </Checkbox>

              <Checkbox
                value="Email Marketing Integration"
                style={{
                  lineHeight: "32px",
                }}
              >
                Email Marketing Integration
              </Checkbox>

              <Checkbox
                value="Live Chat Support"
                style={{
                  lineHeight: "32px",
                }}
              >
                Live Chat Support
              </Checkbox>

              <Checkbox
                value="Customer Review System"
                style={{
                  lineHeight: "32px",
                }}
              >
                Customer Review System
              </Checkbox>

              <Checkbox
                value="Social Media Integration"
                style={{
                  lineHeight: "32px",
                }}
              >
                Social Media Integration
              </Checkbox>

              <Checkbox
                value="Blog/Content Management System"
                style={{
                  lineHeight: "32px",
                }}
              >
                Blog/Content Management System
              </Checkbox>

              <Checkbox
                value="Loyalty Program Features"
                style={{
                  lineHeight: "32px",
                }}
              >
                Loyalty Program Features
              </Checkbox>
              <Form.Item label="Others" name="other">
                <Input placeholder="other features" />
              </Form.Item>
            </div>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item label="Comments & Special Requests">
          <TextArea rows={4} />
        </Form.Item>
        <small>
          Please note that upon submission, our team will review your
          information and contact you to discuss further steps, including the
          setup process, timeline, and any additional information required.
        </small>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <ButtonPrimary type="primary" htmlType="submit">
            Submit
          </ButtonPrimary>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default SessionModal;
