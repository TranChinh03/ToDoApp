import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Touchable,
    TouchableOpacity
} from "react-native";
import {connect} from "react-redux"
import {addTodo} from '../actions'

class AddToDo extends Component {

    state ={ 
        text:''
    }

    addToDo = (text) => {
        this.props.dispatch(addTodo(text));
        this.setState({text: ''})
    }
    render() {
        return (
            <View style={{flexDirection: 'row', marginHorizontal: 20}}>
                <TextInput
                    onChangeText={(text)=>this.setState({text})}
                    value={ this.state.text }
                    placeholder="Add new work!"
                    style={{borderWidth:1, borderColor: '#f1f1e2', backgroundColor: '#acccac', height: 50, flex: 1, padding: 5}}
                />

                <TouchableOpacity Style={{backgroundColor: '#201589'}}  onPress={()=>this.addToDo(this.state.text)}>
                    <View Style={{height: 50, backgroundColor: '#201589'}}>
                        <Text Style={{padding: 10}}>+</Text>
                    </View> 
                </TouchableOpacity> 
            </View>
        );
    }
}
export default connect()(AddToDo);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});