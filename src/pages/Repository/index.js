import React from 'react';
import PropTypes from 'prop-types';
import { WebView } from 'react-native-webview';

export default function Repository({ navigation }) {
  return <WebView source={{ uri: navigation.getParam('item').html_url }} />;
}
Repository.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('item').name,
});
Repository.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};
