import React from 'react';
import {StatusBar as RNStatusBar, StatusBarProps as RNStatusBarProps, ViewProps} from 'react-native';
import {StyledComponentProps} from '@ui-kitten/components';

export type StatusBarProps = RNStatusBarProps & StyledComponentProps;

export class StatusBar extends React.Component<StatusBarProps> {
  public render(): React.ReactElement<ViewProps> {
    const {eva, ...statusBarProps} = this.props;

    return <RNStatusBar {...eva?.style} {...statusBarProps} />;
  }
}
