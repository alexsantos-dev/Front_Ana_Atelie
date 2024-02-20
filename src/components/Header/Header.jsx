import { Container } from './Style.jsx'

export default function Header() {
    return (
        <Container>
            <nav>
                <a href='/'><h1>Logo</h1></a>
                <input type="search" />
                <a href='/'>(12) 18765-3451</a>
                <ul>
                    <li>
                        user
                    </li>
                    <li>
                        carrinho
                    </li>
                </ul>
            </nav>
        </Container>
    )
}
