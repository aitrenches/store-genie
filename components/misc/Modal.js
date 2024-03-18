import React, { useEffect, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Modal, Form, Input, Select, Spin, Result } from "antd";
import ButtonPrimary from "./ButtonPrimary";
import countries from "./json/country-flag.json";
import { http } from "../../utils/axios";

const SessionModal = ({ isModalOpen, handleOk, handleCancel }) => {
  const { TextArea } = Input;
  const [form] = Form.useForm();
  // useEffect(() => {
  //   const get = async () => {
  //     const res = await http.get("/onboarding");
  //     console.log(res);
  //   };
  //   get();
  // }, []);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(null);

  const onFinish = async (values) => {
    try {
      setLoading(true);
      const res = await http.post(`/onboarding`, values);
      console.log(res)
      form.resetFields();
      setShowModal("success");
    } catch (error) {
      console.log(error);
      setShowModal("fail");
    } finally {
      setLoading(false);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const closeSuccessResponseModal = () => {
    setShowModal(null);
    handleCancel();
  };
  const closeResponseModal = () => {
    setShowModal(null);
  };
  const businessCategories = [
    "Accounting",
    "Advertising",
    "Agriculture",
    "Automotive",
    "Banking",
    "Beauty",
    "Biotechnology",
    "Construction",
    "Consulting",
    "Education",
    "Energy",
    "Engineering",
    "Entertainment",
    "Fashion",
    "Finance",
    "Food and Beverage",
    "Healthcare",
    "Hospitality",
    "Information Technology",
    "Insurance",
    "Legal",
    "Manufacturing",
    "Marketing",
    "Media",
    "Non-Profit",
    "Real Estate",
    "Retail",
    "Telecommunications",
    "Transportation",
    "Travel",
    "Other",
  ];

  const filterOption = (input, option) => {
    return (option?.value ?? "").toLowerCase().includes(input.toLowerCase());
  };
  return (
    <>
      {" "}
      <Modal
        footer={false}
        title="Showluv Market Platform Setup Form"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          form={form}
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
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your Full Name!",
              },
            ]}
          >
            <Input placeholder="Enter your Full Name" />
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
            <Input placeholder="Enter your Email Address" />
          </Form.Item>{" "}
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please select a Country!",
              },
            ]}
            label="Country"
            name="country"
          >
            <Select
              showSearch
              filterOption={filterOption}
              placeholder="Select a country"
            >
              {countries.map((country) => (
                <Select.Option value={country.country}>
                  {country.country}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
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
            <Input
              type="number"
              placeholder="Enter phone number e.g +2348012345678"
            />
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
            <Input placeholder="Enter your Business Name" />
          </Form.Item>{" "}
          <Form.Item
            label="Business Category"
            name="business_category"
            rules={[
              {
                required: true,
                message: "Please select your Business Category!",
              },
            ]}
          >
            <Select placeholder="Select a business category">
              {businessCategories.map((category) => (
                <Select.Option key={category} value={category}>
                  {category}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>{" "}
          <Form.Item label="Website" name="website">
            <Input placeholder="e.g showluv.com" />
          </Form.Item>{" "}
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please enter your interested feature!",
              },
            ]}
            name={"interested_features"}
            label="Interested Features"
          >
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item name={"additional_notes"} label="Additional Notes">
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
            <ButtonPrimary addClass={"mt-4"} type="primary" htmlType="submit">
              Submit {loading && <Spin />}
            </ButtonPrimary>
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        footer={false}
        open={showModal === "success"}
        onCancel={closeResponseModal}
      >
        <Result
          status="success"
          title="Submission Successful!"
          subTitle="Your data was sent successfully and will back to you soon"
          extra={[
            <ButtonPrimary key="console" onClick={closeSuccessResponseModal}>
              Close
            </ButtonPrimary>,
          ]}
        />
      </Modal>
      <Modal
        footer={false}
        open={showModal === "fail"}
        onCancel={closeResponseModal}
      >
        <Result
          status="error"
          title="Submission Failed!"
          subTitle="Something went wrong please try again"
          extra={[
            <ButtonPrimary key="console" onClick={closeResponseModal}>
              Close
            </ButtonPrimary>,
          ]}
        />
      </Modal>
    </>
  );
};

export default SessionModal;
