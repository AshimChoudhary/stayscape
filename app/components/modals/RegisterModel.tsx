'use client';

import axios from 'axios';
import { useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import useRegister from '@/app/hooks/useRegisterModel';
import Modals from './Modals';
import Heading from '../Heading';
import Input from '../Inputs/Input';
import toast from 'react-hot-toast';
import Buttons from '../Buttons';
import { signIn } from 'next-auth/react';

const RegisterModel = () => {
  const registerModel = useRegister();
  const [loading, setLoading] = useState(false);

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
        toast.error('You trippin');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to StayScape" subtitle="Create an Account" />

      <Input
        id="email"
        label="Email"
        type="email"
        disabled={loading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="name"
        label="Name"
        disabled={loading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        type="password"
        label="Password"
        disabled={loading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const FooterContent = (
    <div className="flex flex-col gap-4 mt-4">
      <hr />

      {/* <Buttons
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onclick={() => signIn('google')}
      /> */}

      <Buttons
        outline
        label="Continue with Github"
        icon={AiFillGithub}
        onclick={() => signIn('github')}
      />

      <div className="text-neutral-500 text-center mt-4 font-light justify-center">
        <div className="flex flex-row items-center gap-2">
          <div>Already have an Account?</div>
          <div
            className="text-neutral-800 cursor-pointer hover:underline "
            onClick={registerModel.onClose}
          >
            Log In
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modals
      disabled={loading}
      isOpen={registerModel.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={registerModel.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={FooterContent}
    />
  );
};

export default RegisterModel;
