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
  Dimensions,
  Button,
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
        marginTop: 80,
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '20%',
      }}>
      <View
        style={{
          width: '100%',
          height: '20%',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
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
          height: '10%',
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

const MainBody = () => {
  /*
 <LottieView
        source={require('./assets/lottieFiles/lottie_skateBoard.json')}
        autoPlay
        loop
        style={{width: 100, height: 100}}
      />
*/

  return (
    <View style={styles.baseSection}>
      <View style={styles.baseSection2}>
        <View
          style={{
            width: 140,
            height: 280,
            backgroundColor: '#414141',
            borderRadius: 10,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{width: 114, height: 135}}
            source={require('./assets/homeScreen/coffee_1.png')}
          />
          <Text style={{color: 'white'}}>Drizzled with Caremel</Text>
          <View style={{flexDirection: 'row'}}>
            <Text>$5.99</Text>
            <Button title="+" color="#EFE3C8" />
          </View>
        </View>
        <View
          style={{
            width: 140,
            height: 280,
            backgroundColor: '#414141',
            borderRadius: 10,
          }}>
          <Text>HAHA</Text>
        </View>
      </View>
    </View>
  );
};

function App(): React.JSX.Element {
  //const isDarkMode = useColorScheme() === 'dark';

  const bears = useBearStore((state: any) => state.bears);

  const backgroundStyle = {
    backgroundColor: '#201520',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.sectionBackground}>
        <View>
          <Header />
          <MainBody />
          <Text>{bears}</Text>
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
  baseSection: {
    padding: 10,
    height: 600,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red',
    borderStyle: 'solid',
  },
  baseSection2: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 5,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  sectionBackground: {
    backgroundColor: '#201520',
    height: 800,
    borderWidth: 1,
    borderColor: 'white',
    borderStyle: 'solid',
  },
});

export default App;
