/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import LottieView from 'lottie-react-native';
import useBearStore from './store/dataStore';
import {Colors} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Header = () => {
  const [search, setSearch] = useState('');

  return (
    <View
      style={{
        flex: 1,
        marginTop: 50,
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 200,
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
      }}>
      <View
        style={{
          width: '100%',
          height: '80%',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: 'red',
          borderStyle: 'solid',
        }}>
        <Image
          style={{
            width: 120,
            height: 97,
          }}
          source={require('./assets/homeScreen/Brand_Logo.png')}
        />
        <Image
          style={{
            width: 50,
            height: 50,
          }}
          source={require('./assets/homeScreen/profile_pic.png')}
        />
      </View>
      <View
        style={{
          width: '80%',
          height: '20%',
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: 'blue',
          borderStyle: 'solid',
        }}>
        <TextInput
          onChangeText={setSearch}
          value={search}
          placeholder="Search"
        />
      </View>
    </View>
  );
};

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const bears = useBearStore((state: any) => state.bears);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.black : Colors.white,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Header />
          <Section title="See Your Changes12211" />
          <Text>{bears}</Text>
          <Text style={tw`text-yellow-700`}>Jin1129</Text>
          <LottieView
            source={require('./assets/lottieFiles/lottie_skateBoard.json')}
            autoPlay
            loop
            style={{width: 100, height: 100}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
