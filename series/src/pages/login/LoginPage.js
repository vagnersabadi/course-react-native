import React from 'react';
import {
    View,
    TextInput,
    Text,
    StyleSheet,
    Button,
    ActivityIndicator,
    Alert
} from 'react-native';
import FormRow from '../../components/FormRow';

export class LoginPage extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <FormRow>
                    <TextInput
                        style={styles.input}
                        placeholder="user@mail.com" />
                </FormRow>

                <FormRow>
                    <TextInput
                        style={styles.input}
                        placeholder="*******"
                        secureTextEntry
                    />
                </FormRow>
            </View>
        )
    }

};


const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
    input: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5,
    },
});
