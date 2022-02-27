import React from 'react';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {AppIconsPack} from './app-icons-pack';
import {StatusBar} from '../components/status-bar.component';
import {AppNavigator} from '../navigation/app.navigator';
import * as eva from '@eva-design/eva';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <IconRegistry icons={[EvaIconsPack, AppIconsPack]} />
      {/* <ApplicationProvider {...eva} theme={eva.light}> */}
      <ApplicationProvider {...eva} theme={eva.dark}>
        <StatusBar />
        <AppNavigator />
      </ApplicationProvider>
    </React.Fragment>
  );
};

export default App;
