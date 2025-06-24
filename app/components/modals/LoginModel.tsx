'use client';

import { signIn } from 'next-auth/react';
import axios from 'axios';
import { useCallback, useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import useRegister from '@/app/hooks/useRegisterModel';
import Modals from './Modals';
import Heading from '../Heading';
import Input from '../Inputs/Input';
import toast from 'react-hot-toast';
import Buttons from '../Buttons';
import useLoginModel from '@/app/hooks/useLoginModel';
import { useRouter } from 'next/navigation';

const LoginModel = () => {
  const router = useRouter();
  const registerModel = useRegister();
  const loginModel = useLoginModel();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setLoading(true);

    signIn('credentials', {
      ...data,
      redirect: false,
    }).then((callback) => {
      setLoading(false);

      if (callback?.ok) {
        toast.success('Logged In');
        router.refresh();
        loginModel.onClose();
      }
      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  const toggle = useCallback(() => {
    loginModel.onClose();
    registerModel.onOpen();
  }, [loginModel, registerModel]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome Back!!" subtitle="Login to your Account!" />

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
        <div className="flex flex-col items-center gap-2">
          <div>First time using StayScape</div>
          <div
            className="text-neutral-800 flex flex-col cursor-pointer hover:underline "
            onClick={toggle}
          >
            Create an Account..
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modals
      disabled={loading}
      isOpen={loginModel.isOpen}
      title="Log In"
      actionLabel="Continue"
      onClose={loginModel.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={FooterContent}
    />
  );
};

export default LoginModel;
