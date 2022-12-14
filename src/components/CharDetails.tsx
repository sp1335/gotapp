import { Component } from 'react'
import styled from 'styled-components'
import gotService from './services/gotService'
const CDBlock = styled.div`
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
`
export default class CharDetails extends Component {
    gotService = new gotService();
    state = {
        name: null,
        gender: null,
        born: null,
        died: null,
        culture: null
    }
    render() {
        const { name, gender, born, died, culture } = this.state
        return (
            <>
                <CDBlock className='rounded'>
                    <h4>{name}</h4>
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
                </CDBlock>
            </>
        )
    }

}