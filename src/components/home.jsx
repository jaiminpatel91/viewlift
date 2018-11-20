import React, {Component} from 'react';

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    };


    onSubmit = () => {
        if ((typeof this.state.email === 'string' || this.state.email instanceof String) &&
            (typeof this.state.password === 'string' || this.state.password instanceof String)) {
                this.props.history.push("/about");

        } else {
            this.setState({
                error: 'Entered data is not String',
            });
        }
    };

    isError = () => {
        return this.state.error;
    };


    render() {
        return (
            <div className={'container'}>
                <table>
                <tbody>
                <tr>
                    <td>
                        Email:
                    </td>
                    <td>
                        <input type={"text"} onChange={this.onChange} name={'email'} />
                    </td>
                </tr>
                    <tr>
                    <td>
                        Password:
                    </td>
                    <td>
                        <input type={"password"} onChange={this.onChange} name={'password'} />
                    </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button type={'submit'} onClick={this.onSubmit}> submit </button>
                        </td>
                    </tr>
                </tbody>
                </table>
                <div style={{ color: 'red' }}> { this.isError()  } </div>
            </div>
        )
    }
}