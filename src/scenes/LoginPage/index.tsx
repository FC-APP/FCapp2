import CSafeAreaView from '@components/CSafeAreaView';
import { useNavigationBackAction } from '@hooks/useNavigationBack';
import { useNavigation } from '@react-navigation/native';
import { GenericNavigationProps } from '@routes/types';
import { Flex, Icon, Pressable, Text } from 'native-base';
import * as React from 'react';
import { FC, useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Login: FC = () => {
  const { t } = useTranslation();
  const { setOptions } = useNavigation<GenericNavigationProps>();
  const goBack = useNavigationBackAction();

  useLayoutEffect(() => {
    setOptions({
      headerLeft: () => (
        <Flex flex={1} justifyContent="center">
          <Pressable onPress={goBack}>
            <Icon as={MaterialIcons} name="arrow-back-ios" color="MIDNIGHT_BLUE" size="24px" />
          </Pressable>
        </Flex>
      ),
      headerTitle: () => (
        <Text fontSize="20px" fontFamily="body" fontWeight={700}>
          {t('Login:Login')}
        </Text>
      ),
    });
  }, [goBack, setOptions, t]);

  return (
    <CSafeAreaView>
      <Text>Login</Text>
    </CSafeAreaView>
  );
};

export default React.memo(Login);
