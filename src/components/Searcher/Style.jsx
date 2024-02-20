import styled from 'styled-components'

export const Container = styled.input`
    width: 400px;
    height: 2.5em;
    padding: 1em 1em 1.1em 1em;
    border: solid 1px black;
    border-radius: .2em;
    &::placeholder{
        font-style: italic;
    }
`
