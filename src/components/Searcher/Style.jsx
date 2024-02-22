import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    input{
    width: 400px;
    height: 2.5em;
    padding: 1em 1em 1.1em 1em;
    border: solid 1px black;
    border-radius: .2em;
        &::placeholder{
        font-style: italic;
    
    }
}

    i.Search-icon{
        position: absolute;
        top: .3em;
        right: 1em;
    }
`
