import React, { ChangeEvent, FormEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { login, selectLoginStatus } from '../../store/login/loginSlice';
import { EFetchingStatus } from '../../types/fetching-status.type';
import { Error } from '../kit/error';
import { Logo } from '../kit/logo';
import { Label } from '../kit/label';
import { Input } from '../kit/input';
import { Heading } from '../kit/heading';
import { Form, FormRow } from '../kit/form';
import { PrimaryButton } from '../kit/button';
import { Password } from '../kit/password';
import { LoginScreenRoot } from './login-screen.styled';

export const LoginScreen = () => {
  const loginStatus = useSelector(selectLoginStatus);
  const history = useHistory();

  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const dispatch = useAppDispatch();

  const disabled = useMemo(() => {
    return !password || !username || loginStatus === EFetchingStatus.FETCHING;
  }, [password, username, loginStatus]);

  const onSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();

    dispatch(login(username, password));
  }, [dispatch, username, password]);

  useEffect(() => {
    if (loginStatus === EFetchingStatus.SUCCESS) {
      history.push('/');
    }
  }, [loginStatus, history]);

  return (<LoginScreenRoot>
      <Logo/>
      <section>
        <Heading>Log in</Heading>
        <Form onSubmit={onSubmit}>
          <FormRow>
            <Label htmlFor={'login'}>Username</Label>
            <Input type={'text'} placeholder={'login'} id={'login'} onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)} />
          </FormRow>
          <FormRow>
            <Label htmlFor={'password'}>Password</Label>
            <Password id={'password'} placeholder={'password'} onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
          </FormRow>
          {loginStatus === EFetchingStatus.ERROR && <Error size="medium">Invalid username or password</Error>}
          <FormRow>
            <PrimaryButton type={'submit'} disabled={disabled}>Log in</PrimaryButton>
          </FormRow>
        </Form>
      </section>
    </LoginScreenRoot>
  );
}
