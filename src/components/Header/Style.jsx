import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  background-color: #fff;
  filter: drop-shadow(1px 1px 8px #aaaaaaab);
  nav{
    margin: 0 auto;
    max-width: 1280px;
    max-width: 1280px;
    height: 4em;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ul.User-options{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1em;

        li{
          font-size: 1.5em;
        }
    }
  }
`
