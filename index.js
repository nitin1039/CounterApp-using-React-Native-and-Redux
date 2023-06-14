import React from 'react';
import { connect } from 'react-redux';
import { View, FlatList, Text, Button, Dimensions, Pressable } from 'react-native';
import { increment, addNumber, deleteNumber } from './redux/actions';

const Index = ({ numbers, addNumber, deleteNumber }) => {
  const marginIncreament = Dimensions.get('window').height / 12

  const elevationStyle = Platform.OS === 'android' ? { elevation: 10 } : { shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 4 };
  const textShadowStyle = Platform.select({
    ios: {
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 1,
    },
    android: {
      elevation: 2,
    },
  });
  const renderItem = ({ item, index }) => (
    <>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        width: 200,
        alignSelf: 'center',
        
        marginTop: 15,
        marginBottom: 15,
        borderRadius: 9,
        backgroundColor: 'pink',
        ...elevationStyle,
      }}>
        <Text style={{
          fontSize: 20,
          color: 'white',
          textShadowColor: 'rgba(0, 0, 0, 0.5)',
          textShadowOffset: { width: 1, height: 1 },
          textShadowRadius: 2,
          ...textShadowStyle,
        }}>{item}</Text>

        <Text style={{
          fontSize: 20,
          color: 'white',
          textShadowColor: 'rgba(0, 0, 0, 0.5)',
          textShadowOffset: { width: 1, height: 1 },
          textShadowRadius: 2,
          ...textShadowStyle,
        }} onPress={() => deleteNumber(index)}> Delete</Text>
      </View>
    </>
  );


  return (
    <View style={{ backgroundColor: 'pink', flex: 1 }}>
      <Pressable onPress={addNumber}>
        <View style={{
          alignSelf: 'center',
          padding: 20,
          width: 200,
          marginTop: marginIncreament,
          borderRadius: 9,
          backgroundColor: 'pink',
          ...elevationStyle,
        }}>
          <Text style={{
               color: 'white',
            textAlign: 'center', fontSize: 20,
            textShadowColor: 'rgba(0, 0, 0, 0.5)',
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 2,
            ...textShadowStyle,
          }}>Increment</Text>
        </View>
      </Pressable>
      <FlatList
        data={numbers}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  numbers: state.numbers,
});

const mapDispatchToProps = {
  addNumber,
  deleteNumber,
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
