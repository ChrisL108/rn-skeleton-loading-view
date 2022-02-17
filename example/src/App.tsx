import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoadingView from 'rn-skeleton-loading-view';
// import { LoadingView } from '../../src';

export default function App() {
  // const [loading, setLoading] = React.useState(false);

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, []);
  return (
    <View style={styles.container}>
      <LoadingView loading={true}>
        <Text>Here is some content</Text>
      </LoadingView>
      <Text>Here is some content</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
