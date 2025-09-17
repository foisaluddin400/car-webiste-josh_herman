"use client";
import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { FaEye, FaEyeSlash, FaGoogle, FaFacebookF } from "react-icons/fa";
import Link from "next/link"; // ✅ Next.js Link

export const SignUpPage = () => {
  const [form] = Form.useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onFinish = (values) => {
    console.log("Form Values:", values);
    // এখানে তুমি API call করতে পারো
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4 lg:px-0">
      <div className="w-full max-w-lg lg:p-8 p-4 border rounded-md shadow-sm bg-white">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Create An Account
        </h2>
        <p className="text-gray-600 mb-6 text-sm">
          Secure your account by creating a password and verifying your email.
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
            <Input style={{ height: "50px" }} placeholder="Enter Email Address" />
          </Form.Item>

          {/* Password */}
          <Form.Item
            label="Enter New Password"
            name="password"
            rules={[
              { required: true, message: "Please enter your password!" },
              { min: 6, message: "Password must be at least 6 characters!" },
            ]}
          >
            <Input
              style={{ height: "50px" }}
              type={showPassword ? "text" : "password"}
              placeholder="Enter New Password"
              suffix={
                <span
                  className="cursor-pointer text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              }
            />
          </Form.Item>

          {/* Confirm Password */}
          <Form.Item
            label="Confirm New Password"
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please confirm your password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Passwords do not match!"));
                },
              }),
            ]}
          >
            <Input
              style={{ height: "50px" }}
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm New Password"
              suffix={
                <span
                  className="cursor-pointer text-gray-500"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              }
            />
          </Form.Item>

          {/* Continue Button */}
          <Form.Item>
            <button
              type="primary"
              htmlType="submit"
              block
            
              className="w-full bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-600 hover:to-red-600 text-white font-semibold px-8 py-3  shadow-lg transition-all duration-200 hover:shadow-xl"
            >
              Continue
            </button>
          </Form.Item>
        </Form>

        {/* Terms */}
        <p className="text-xs text-gray-600 mb-6 text-center">
          By Clicking Continue, I agree to the{" "}
          <span className="text-blue-600 cursor-pointer">Terms of Service</span>{" "}
          and{" "}
          <span className="text-blue-600 cursor-pointer">Privacy Policy</span>
        </p>

        {/* Divider */}
        <div className="flex items-center mb-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500 text-sm">Or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google */}
        <Button
          style={{ height: "50px" }}
          block
          className="flex items-center justify-center border border-gray-300 mb-3"
        >
          <FaGoogle className="text-red-500 mr-2" /> Continue With Google
        </Button>

        {/* Facebook */}
        <Button
          style={{ height: "50px" }}
          block
          className="flex items-center justify-center border border-gray-300"
        >
          <FaFacebookF className="text-blue-600 mr-2" /> Continue With Facebook
        </Button>

        {/* Sign In Link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <Link
            href="/signIn"
            className="text-blue-600 cursor-pointer hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};
