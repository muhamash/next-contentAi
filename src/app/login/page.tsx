'use client'

import React, { useEffect } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import TypingAnimation from '../../components/typingAnimation';
import Link from 'next/link';

const Login = () =>
{
    const onFinish = ( values: any ) =>
    {
        console.log( 'Success:', values );
    };

    const onFinishFailed = ( errorInfo: any ) =>
    {
        console.log( 'Failed:', errorInfo );
    };

    // useEffect( () =>
    // {
    //     const onFinish = ( values: any ) =>
    //     {
    //         console.log( 'Success:', values );
    //     };

    //     const onFinishFailed = ( errorInfo: any ) =>
    //     {
    //         console.log( 'Failed:', errorInfo );
    //     };
    // } )

    // function onFinish ( values: any ): void
    // {
    //     throw new Error( values );
    // }

    // function onFinishFailed ( errorInfo: any ): void
    // {
    //     throw new Error( 'Function not implemented.' );
    // }

    return (
        <div className='py-10'>
            <div className='w-[40%] flex mx-auto bg-gradient-to-br from-green-500 via-violet-500 to-red-500 p-[1.5px] rounded-md shadow-md shadow-[#9c9ef693]'>
                <div className='bg-white w-full flex flex-col items-center rounded-md'>
                    <div className="py-3">
                        <p className="text-2xl font-OpenSans font-semibold">
                            <TypingAnimation message=" Please log in to your account!! " />
                        </p>
                    </div>

                    <Form
                        className='flex flex-col mx-auto py-5'
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        style={{
                            maxWidth: 600,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
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
                            <div className='flex items-center gap-10'>
                                <div>
                                     <Button
                                    className='bg-violet-500 text-white font-OpenSans font-semibold shadow-md shadow-slate-400'
                                    htmlType="submit">
                                    Submit
                                    </Button>
                               </div>
                                <div>
                                    <p className='text-violet-600 font-OpenSans font-semibold cursor-pointer hover:text-red-700 underline'>
                                        Forgot password
                                    </p>
                                </div>
                            </div>
                        </Form.Item>

                        <Form.Item>
                            <div className='flex justify-center'>
                                <p className='font-OpenSans font-semibold'>
                                    Don@t have an account yet?
                                </p>
                                <Link href={'/register'}>
                                <p className='font-OpenSans text-violet-600 font-semibold cursor-pointer hover:text-red-700'>
                                    Sign up
                                </p>
                                </Link>
                            </div>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
};

export default Login;