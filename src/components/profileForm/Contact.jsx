'use client'
import React from "react";
import { Form, Input, Button } from "antd";
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const Contact = () => {
  const onFinish = (values) => {
    console.log("Form Values:", values);
  };

  return (
    <div className="w-full">
      {/* Form Section */}
      <div className="container mx-auto py-10 px-6">
        <Form
          layout="vertical"
          onFinish={onFinish}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Name */}
          <Form.Item
            label="Your Name*"
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input style={{height:'40px'}} placeholder="Name" />
          </Form.Item>

          {/* Number */}
          <Form.Item
            label="Your Number*"
            name="number"
            rules={[{ required: true, message: "Please enter your number" }]}
          >
            <Input style={{height:'40px'}} placeholder="Your number" />
          </Form.Item>

          {/* Email */}
          <Form.Item
            label="Your Email*"
            name="email"
            className="md:col-span-2"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Enter a valid email" },
            ]}
          >
            <Input style={{height:'40px'}} placeholder="Email address" />
          </Form.Item>

          {/* Message */}
          <Form.Item
            label="Your Message*"
            name="message"
            className="md:col-span-2"
            rules={[{ required: true, message: "Please enter your message" }]}
          >
            <TextArea rows={4} placeholder="Message" />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item className="md:col-span-2">
            <button
              type="submit"
              className=" bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-600 hover:to-red-600 text-white font-semibold px-8 py-3  shadow-lg transition-all duration-200 hover:shadow-xl"
            >
              Send Message
            </button>
          </Form.Item>
        </Form>
      </div>

      {/* Map + Contact Info Section */}
      <div className="relative">
           <div class="w-full h-64 md:h-96 bg-gray-200 rounded-lg overflow-hidden my-11">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31537641.21293088!2d-125.00165!3d39.828175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzkg4oCmMTI1!5e0!3m2!1sen!2sus!4v1694960000000!5m2!1sen!2sus"
            frameborder="0"
            class="w-full h-full"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="United States Location"
          ></iframe>
        </div>

        <div className="  left-0 w-full bg-white/90 flex flex-col md:flex-row justify-around items-center py-6 text-gray-700 text-center">
          {/* Address */}
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <EnvironmentOutlined className="text-xl" />
            <p>
              244 Fifth Avenue, Suite D-273, New York,
              <br /> N.Y. 10001
            </p>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <PhoneOutlined className="text-xl" />
            <p>
              +25132541254 <br /> +414445454454
            </p>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <MailOutlined className="text-xl" />
            <p>hridoy162476@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
