import { useCreateUser, useDeleteUser, useModifyUser } from '@api/hooks/useUser';
import EnvInfoView from '@components/AppVersion';
import CSafeAreaView from '@components/CSafeAreaView';
import { useNavigation } from '@react-navigation/native';
import { GenericNavigationProps } from '@routes/types';
import { Button, Flex, Icon, ScrollView, Text } from 'native-base';
import React, { useCallback, FC, memo, useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Home: FC = () => {
  const [t] = useTranslation();
  const navigation = useNavigation<GenericNavigationProps>();
  const { setOptions } = useNavigation<GenericNavigationProps>();
  const { mutate: createUser } = useCreateUser();
  const { mutate: modifyUser } = useModifyUser();
  const { mutate: deleteUser } = useDeleteUser();

  useLayoutEffect(() => {
    setOptions({
      headerLeft: () => <></>,
      headerTitle: () => <Icon as={FontAwesome5} name="react" color="PETER_RIVER" size="30px" />,
    });
  }, [setOptions]);

  return (
    <CSafeAreaView>
      <ScrollView
        backgroundColor="pageBackground"
        _contentContainerStyle={{
          alignItems: 'center',
          flex: 1,
          flexGrow: 1,
          justifyContent: 'center',
          padding: '15px',
        }}>
        <Text
          color="WHITE"
          fontFamily="body"
          fontWeight={700}
          fontStyle="normal"
          fontSize="3xl"
          paddingBottom="20px"
          textAlign="center">
          FC.app
        </Text>

        <Button onPress={() => navigation.navigate('Main', { screen: 'Login' })} backgroundColor="SUN_FLOWER" mb="5px">
          <Flex flexDirection="row" alignItems="center">
            <Icon as={EvilIcons} name="arrow-right" color="WHITE" marginRight={2} fontSize={20} />
            <Text color="WHITE" fontFamily="body" fontStyle="normal">
              {t('Homepage:loginIn')}
            </Text>
          </Flex>
        </Button>

        <Button onPress={() => navigation.navigate('Main', { screen: 'Login' })} backgroundColor="SUN_FLOWER" mb="5px">
          <Flex flexDirection="row" alignItems="center">
            <Icon as={EvilIcons} name="arrow-right" color="WHITE" marginRight={2} fontSize={20} />
            <Text color="WHITE" fontFamily="body" fontStyle="normal">
              {t('Homepage:googleLogin')}
            </Text>
          </Flex>
        </Button>

        <Button onPress={() => navigation.navigate('Main', { screen: 'Login' })} backgroundColor="SUN_FLOWER" mb="5px">
          <Flex flexDirection="row" alignItems="center">
            <Icon as={EvilIcons} name="arrow-right" color="WHITE" marginRight={2} fontSize={20} />
            <Text color="WHITE" fontFamily="body" fontStyle="normal">
              {t('Homepage:facebookLogin')}
            </Text>
          </Flex>
        </Button>

        <Button onPress={() => navigation.navigate('Main', { screen: 'Login' })} backgroundColor="SUN_FLOWER" mb="5px">
          <Flex flexDirection="row" alignItems="center">
            <Icon as={EvilIcons} name="arrow-right" color="WHITE" marginRight={2} fontSize={20} />
            <Text color="WHITE" fontFamily="body" fontStyle="normal">
              {t('Homepage:appleLogin')}
            </Text>
          </Flex>
        </Button>

        <Button
          onPress={() => navigation.navigate('Main', { screen: 'Register' })}
          backgroundColor="SUN_FLOWER"
          mb="5px">
          <Flex flexDirection="row" alignItems="center">
            <Icon as={EvilIcons} name="arrow-right" color="WHITE" marginRight={2} fontSize={20} />
            <Text color="WHITE" fontFamily="body" fontStyle="normal">
              {t('Homepage:emailSignUp')}
            </Text>
          </Flex>
        </Button>
        <EnvInfoView />
      </ScrollView>
    </CSafeAreaView>
  );
};

export default memo(Home);
