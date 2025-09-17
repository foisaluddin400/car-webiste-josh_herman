'use client'

import React from "react";
import { Form, Input, Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const BookingForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form Data:", values);
  };

  return (
    <div className="container mx-auto  mt-11">
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
      >
        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[{ required: true, message: "Please enter your first name" }]}
          >
            <Input style={{height:'40px'}} placeholder="First Name" />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[{ required: true, message: "Please enter your last name" }]}
          >
            <Input style={{height:'40px'}} placeholder="Last Name" />
          </Form.Item>
        </div>

        {/* Email */}
        <Form.Item
          label="E-mail (required)"
          name="email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input style={{height:'40px'}} placeholder="Email" />
        </Form.Item>

        {/* Phone */}
        <Form.Item
          label="Phone"
          name="phone"
        >
          <Input style={{height:'40px'}} placeholder="Phone" />
        </Form.Item>

        {/* Street Address */}
        <Form.Item
          label="Street Address"
          name="street"
        >
          <Input placeholder="Type here..." />
        </Form.Item>

        {/* Town/City */}
        <Form.Item
          label="Town/City"
          name="city"
        >
          <Input style={{height:'40px'}} placeholder="City" />
        </Form.Item>

        {/* Postcode/Zip */}
        <Form.Item
          label="Postcode/Zip"
          name="zip"
        >
          <Input style={{height:'40px'}} placeholder="Postcode/Zip" />
        </Form.Item>

        {/* Driving Licence Number */}
        <Form.Item
          label="Driving Licence Number"
          name="licenceNumber"
        >
          <Input style={{height:'40px'}} placeholder="Driving Licence Number" />
        </Form.Item>

        {/* Upload Driving Licence */}
        <Form.Item
          label="Upload Your Driving Licence"
          name="licenceFile"
        >
          <Upload beforeUpload={() => false}>
            <Button icon={<UploadOutlined />}>Choose File</Button>
          </Upload>
        </Form.Item>

        {/* Your Age */}
        <Form.Item
          label={
            <span>
              Your Age{" "}
              <span className="text-red-500 text-sm">
                (Refundable security deposit: $3000 if under 25 and if 25 or older $1000)
              </span>
            </span>
          }
          name="age"
        >
          <Input style={{height:'40px'}} placeholder="Your Age" />
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <button
            htmlType="submit"
            type="primary"
            className="flex items-center bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-600 hover:to-red-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl"
          >
            Submit
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default BookingForm;
