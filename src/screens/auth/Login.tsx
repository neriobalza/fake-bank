import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@navigation/index';
import {Layout, SignInForm, SignUpForm, Header} from '@components/index';
// import {useTheme} from '@hooks/index';

type Props = NativeStackScreenProps<RootStackParamList, 'Auth'>;

const Login = (props: Props) => {
  const {
    route: {params},
  } = props;
  const [isNew, setIsNew] = useState(params.isNew);

  const switchForm = () => {
    setIsNew(!isNew);
  };

  return (
    <Layout>
      <Header title={isNew ? 'Sign Up' : 'Sign In'} />
      <>
        {!isNew ? (
          <SignInForm switchForm={switchForm} />
        ) : (
          <SignUpForm switchForm={switchForm} />
        )}
      </>
    </Layout>
  );
};

export default Login;
