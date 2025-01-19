import React from "react";
import { Form, Input, FormProps } from "antd";

type FieldType = {
  name?: string;
  email?: string;
  message?: string;
};

const ContactUs: React.FC = () => {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="contact-us"
      layout="vertical"
      onFinish={onFinish}
      className="mt-10 p-4 rounded-lg shadow-sm bg-white dark:bg-slate-800"
      autoComplete="off"
      onFinishFailed={onFinishFailed}
    >
      <Form.Item<FieldType>
        label={
          <span className="text-gray-700 font-semibold dark:text-white">
            Name
          </span>
        }
        name="name"
        rules={[{ required: true, message: "Please enter your name!" }]}
      >
        <Input
          placeholder="Your Name"
          variant="outlined"
          size="large"
          className=" invalid:bg-transparent text-md bg-transparent focus:bg-transparent hover:bg-transparent hover:border-primary focus:border-primary dark:text-white placeholder:text-gray-400"
        />
      </Form.Item>

      <Form.Item<FieldType>
        label={
          <span className="text-gray-700 font-semibold dark:text-white">
            Email
          </span>
        }
        name="email"
        rules={[
          { required: true, message: "Please enter your email!" },
          { type: "email", message: "Please enter a valid email!" },
        ]}
      >
        <Input
          placeholder="Your Email"
          variant="outlined"
          size="large"
          className=" invalid:bg-transparent text-md bg-transparent focus:bg-transparent hover:bg-transparent hover:border-primary  focus:border-primary dark:text-white placeholder:text-gray-400"
        />
      </Form.Item>

      <Form.Item<FieldType>
        label={
          <span className="text-gray-700 font-semibold dark:text-white">
            Message
          </span>
        }
        name="message"
        rules={[{ required: true, message: "Please enter your message!" }]}
      >
        <Input.TextArea
          placeholder="Your Message"
          rows={4}
          variant="outlined"
          size="large"
          className=" invalid:bg-transparent text-md bg-transparent focus:bg-transparent hover:bg-transparent hover:border-primary focus:border-primary dark:text-white placeholder:text-gray-400"
        />
      </Form.Item>

      <Form.Item>
        <button
          //   type="primary"
          type="submit"
          className="w-full bg-primary hover:bg-orange-600 p-2 text-white text-md rounded-md"
        >
          Submit
        </button>
      </Form.Item>
    </Form>
  );
};

export default ContactUs;
