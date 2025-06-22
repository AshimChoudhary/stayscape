'use client';

import axios from 'axios';
import { useCallback, useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import useRegister from '@/app/hooks/useRegisterModel';
import { register } from 'module';
import { error, log } from 'console';

const RegisterModel = () => {
  const registerModel = useRegister();
  const [oading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setLoading(true);

    axios
      .post('/api/register', data)
      .then(() => {
        registerModel.onClose();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return <div>RegisterModel</div>;
};

export default RegisterModel;
