'use client'
import React from "react";
import { Form, Input, Button } from "antd";


export const ForgotPassword = () => {
  const [form] = Form.useForm();


  const onFinish = (values) => {
    console.log("Form Values:", values);


  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4 lg:px-0">
      <div className="w-full max-w-lg lg:p-8 p-4 border rounded-md shadow-sm bg-white">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Forgot Password
        </h2>
        <p className="text-gray-600 mb-6 text-sm">
          Enter your email address and we will send you a verification link.
        </p>

        {/* Ant Design Form */}
        <Form form={form} layout="vertical" onFinish={onFinish}>
          {/* Email */}
          <Form.Item
            label="Enter Email Address"
            name="email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Enter a valid email!" },
            ]}
          >
            <Input
              style={{ height: "50px" }}
              placeholder="Enter Email Address"
            />
          </Form.Item>

          {/* Continue Button */}
          <Form.Item>
            <button
              type="primary"
              htmlType="submit"
              className="w-full bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-600 hover:to-red-600 text-white font-semibold px-8 py-3  shadow-lg transition-all duration-200 hover:shadow-xl"
            >
              Continue
            </button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
