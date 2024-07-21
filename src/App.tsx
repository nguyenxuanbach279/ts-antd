import React from 'react';
import './App.css';
import RHFInput from './components/Input/RHFInput';
import { Button, Form } from 'antd';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';


interface FormValues {
  name: string;
}
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
});

function App() {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
  });

  const formItemLayout = 'vertical'

  const onSubmit: SubmitHandler<FormValues> = (data: any) => console.log(data);
  return (
    <div className="App">
      <Form onFinish={handleSubmit(onSubmit)} layout={formItemLayout}>
        <RHFInput name="name" label='name' control={control} rules={{ required: true }}/>
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default App;
