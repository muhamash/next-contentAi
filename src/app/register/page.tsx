'use client'

import React, { useState } from "react";
import {
  AutoComplete,
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from "antd";

const { Option } = Select;

interface DataNodeType {
  value: string;
  label: string;
  children?: DataNodeType[];
}

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const Register = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  // const prefixSelector = (
  //   <Form.Item name="prefix" noStyle>
  //     <Select style={{ width: 70 }}>
  //       <Option value="86">+86</Option>
  //       <Option value="87">+87</Option>
  //     </Select>
  //   </Form.Item>
  // );


  return (
    <div className="py-10">
      <div>
          <p className="text-center py-5 text-2xl">
            Register to content Ai
          </p>
        </div>
      <div className="w-[60%] bg-violet-100 bg-opacity-50 flex mx-auto justify-center rounded-md shadow-lg hover:shadow z-0">
        
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          // initialValues={{
          //   residence: [ "zhejiang", "hangzhou", "xihu" ],
          //   prefix: "86",
          // }}
          // style={{ maxWidth }}
          className="w-[70%] bg-blue-200 mx-auto z-10 bg-opacity-50 p-10 rounded-md"
          scrollToFirstError
        >
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={[ "password" ]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ( { getFieldValue } ) => ( {
                validator ( _, value )
                {
                  if ( !value || getFieldValue( "password" ) === value )
                  {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error( "The new password that you entered do not match!" )
                  );
                },
              } ),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="userName"
            label="User Name"
            tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: "Please input your nickname!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[ { required: true, message: "Please input your phone number!" } ]}
          >
            <Input addonBefore={null} style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            name="gender"
            label="Gender"
            rules={[ { required: true, message: "Please select gender!" } ]}
          >
            <Select placeholder="select your gender">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: ( _, value ) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject( new Error( "Should accept agreement" ) ),
              },
            ]}
            {...tailFormItemLayout}
          >
            <Checkbox>
              I have read the <a href="###">agreement</a>
            </Checkbox>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button className="bg-violet-700" type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
        <div>

        </div>
      </div>
    </div>
  );
};

export default Register;
