import React from 'react';
import {ImageProps, StyleSheet} from 'react-native';
import {Button, Icon, Layout, Text} from '@ui-kitten/components';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {loadposts} from './auth/reduce/auth.slice';
import {ScrollView} from 'react-native-gesture-handler';

const HeartIcon = (props?: Partial<ImageProps>): React.ReactElement<ImageProps> => <Icon {...props} name="heart" />;

const Home = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector(state => state.auth);

  React.useEffect(() => {
    dispatch(loadposts());
  }, [dispatch]);

  return (
    <>
      <Layout style={styles.container}>
        <ScrollView>
          <Text style={styles.text} category="s1">
            DSA: {JSON.stringify(auth)}
          </Text>
          <Text style={styles.text} category="h1">
            Welcome to UI Kitten 😻
          </Text>
          <Text style={styles.text} category="s1">
            Start with editing App.js to configure your App
          </Text>
          <Text style={styles.text} appearance="hint">
            For example, try changing theme to Dark by using eva.dark
          </Text>
          <Button style={styles.likeButton} accessoryLeft={HeartIcon} onPress={() => dispatch(loadposts())}>
            LIKE
          </Button>
        </ScrollView>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
  likeButton: {
    marginVertical: 16,
  },
});

export default Home;
