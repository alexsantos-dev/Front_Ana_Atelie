import { Searcher } from '../Searcher/Searcher.jsx'
import { Container } from './Style.jsx'

export default function Header() {
    return (
        <Container>
            <nav>
                <a href='/'><h2>Logo</h2></a>
                <Searcher />
                <a href='/'>(12) 18765-3451</a>
                <ul>
                    <li>
                        🧑
                    </li>
                    <li>
                        🛒
                    </li>
                </ul>
            </nav>
        </Container>
    )
}
