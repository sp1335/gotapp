import { Component } from 'react'
import styled from 'styled-components'
import gotService from './services/gotService'
import Spinner from './spinner'
const CDBlock = styled.div`
    min-height: 30vh;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    h4{
        margin-bottom: 20px;
        text-align: center;
    }
    selectet-error{
        color: #fff;
        text-align: center;
        font-size: 26px;
    }
    span{
        max-width: 85%;
        white-space: normal;
        overflow-wrap: anywhere;
    }
`

export default class RandomChar extends Component {
    constructor() {
        super();
        this.updateChar()
    }
    gotService = new gotService();
    state = {
        char: {},
        loading: true,
        error: false
    }
    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        }
        )
    }
    onCharLoaded = (char, loading = false) => {
        this.setState({ char })
        this.setState({ loading })
    }
    updateChar() {
        const id = Math.floor(Math.random() * 90 + 25)
        this.gotService.getCharacter(521512512512)
            .then(this.onCharLoaded)
            .catch(this.onError)
    }
    render() {
        const { char, loading } = this.state
        const content = !loading ? <View char={char} /> : <Spinner />;
        return (
            <>
                <CDBlock className='rounded'>
                    {content}
                </CDBlock>
            </>
        )
    }

}

const View = ({ char }) => {
    const { name, gender, born, died, culture } = char
    return (
        <>
            <h4>Random Character: {name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Gender</span>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Born</span>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Died</span>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Culture</span>
                    <span>{culture}</span>
                </li>
            </ul>
        </>
    )
}