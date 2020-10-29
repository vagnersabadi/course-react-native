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

    constructor(props) {
        super(props);

        this.state = {
            mail: '',
            password: '',
            isLoading: false,
            message: ''
        }
    }

    onChangeHandler(field, value) {
		this.setState({
			[field]: value
        });
	}

    render() {
        return (
            <View style={styles.container}>
                <FormRow first>
                    <TextInput
                        style={styles.input}
                        placeholder="user@mail.com" 
                        value={this.state.mail}
                        onChangeText={value => this.onChangeHandler('mail', value)}
                        />
                </FormRow>

                <FormRow last>
                    <TextInput
                        style={styles.input}
                        placeholder="*******"
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={value => this.onChangeHandler('password', value)}

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
