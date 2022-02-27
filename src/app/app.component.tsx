import React from 'react';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {AppIconsPack} from './app-icons-pack';
import {StatusBar} from '../components/status-bar.component';
import {AppNavigator} from '../navigation/app.navigator';
import {AppearanceProvider} from 'react-native-appearance';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import * as eva from '@eva-design/eva';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <IconRegistry icons={[EvaIconsPack, AppIconsPack]} />
      <AppearanceProvider>
        <ApplicationProvider {...eva} theme={eva.light}>
          <SafeAreaProvider>
            <StatusBar animated={true} />
            <AppNavigator />
          </SafeAreaProvider>
        </ApplicationProvider>
      </AppearanceProvider>
    </React.Fragment>
  );
};

export default App;
