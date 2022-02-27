import React from 'react';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {AppIconsPack} from './app-icons-pack';
import {StatusBar} from '../components/status-bar.component';
import {AppNavigator} from '../navigation/app.navigator';
import {Mapping, Theme, Theming} from '../services/theme.service';
import {AppearanceProvider} from 'react-native-appearance';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {appMappings, appThemes} from './app-theming';

const defaultConfig: {mapping: Mapping; theme: Theme} = {
  mapping: 'eva',
  theme: 'light',
};

const App: React.FC = () => {
  const [mappingContext, currentMapping] = Theming.useMapping(
    appMappings,
    defaultConfig.mapping,
  );
  const [themeContext, currentTheme] = Theming.useTheming(
    appThemes,
    defaultConfig.mapping,
    defaultConfig.theme,
  );

  return (
    <React.Fragment>
      <IconRegistry icons={[EvaIconsPack, AppIconsPack]} />
      <AppearanceProvider>
        <ApplicationProvider {...currentMapping} theme={currentTheme}>
          <Theming.MappingContext.Provider value={mappingContext}>
            <Theming.ThemeContext.Provider value={themeContext}>
              <SafeAreaProvider>
                <StatusBar />
                <AppNavigator />
              </SafeAreaProvider>
            </Theming.ThemeContext.Provider>
          </Theming.MappingContext.Provider>
        </ApplicationProvider>
      </AppearanceProvider>
    </React.Fragment>
  );
};

export default App;
