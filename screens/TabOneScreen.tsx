import * as React from 'react';
import { StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import { decrementAction, incrementAction } from 'll-pkg';
import { Text, View } from '../components/Themed';

function TabOneScreen({ decrementAction, count, incrementAction}) {
  return (
    <View style={styles.container}>
      <Button title="-" onPress={decrementAction} />
      <Text>{count}</Text>
      <Button title="+" onPress={incrementAction} />
    </View>
  );
}

const mapStateToProps = (state) => ({
  count: state.counterReducer.count
})

const mapDispatchToProps = {
  decrementAction,
  incrementAction
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TabOneScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
