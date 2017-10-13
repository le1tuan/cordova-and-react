import React from 'react';
import AppBarManagement from '../AppBarManagement';
import TextField from 'material-ui/TextField';
import styled from 'styled-components';
import { renderComponent } from '../HomePage/styles';
const Div = styled.div `
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content :center;
    overflow: hidden;
    margin: 10px;
`
const ElementInput = ({name}) => (
    <div style={{
        margin: 10
    }}>
        <div>{name}</div>
        <TextField 
            id={name}
            style={{
                width: '100%'
            }}
        />
    </div>
)
const button = renderComponent("Agree and Send");
class SignUpPage extends React.Component {
    render() {
        return (
            <div>
                <AppBarManagement/>
                <Div>

                    <ElementInput name="Name" />
                    <ElementInput name="Mail Address"/>
                    <ElementInput name="Password"/>
                    <ElementInput name="Password Confirmation"/>
                    <div
                        style={{
                        textAlign: "center",
                        marginBottom: 20
                    }}>
                        <a href="#">Terms and Policies</a>
                    </div>
                    { button }
                </Div>
            </div>
        )
    }
}
export default SignUpPage