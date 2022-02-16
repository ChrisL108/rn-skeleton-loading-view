import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { LoadingView } from 'rn-skeleton-loading-view';

export default function App() {
  const [loading1, setLoading1] = React.useState<boolean>(true);
  const [loading2, setLoading2] = React.useState<boolean>(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading1(false);
    }, 5000);
    setTimeout(() => {
      setLoading2(false);
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <LoadingView loading={loading1} colorArray={['yellow', 'green']}>
        <Text>I took a little longer</Text>
        <Text>because I have more data</Text>
      </LoadingView>
      <LoadingView loading={loading2} colorArray={['gray', 'white']}>
        <Text>I loaded faster!</Text>
      </LoadingView>
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
