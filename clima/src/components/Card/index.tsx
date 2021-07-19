import { FormEvent, useState } from 'react';

import nuvemInterrogação from '../../assests/nuvemInterrogação.png';
import lupa from '../../assests/lupa.png';

import { Container } from "./style";

export function Card() {
    const [content, setContent] = useState('');

    function handleCreateNewRequest(event: FormEvent) {
        event.preventDefault();
    }


    return (
        <Container>
            <header>
                <h2>TEMPO E TEMPERATURA</h2>
            </header>

            <main>
                <div className="City">Cidade Rio de janeiro, BR</div>
                <div className="date">Segunda, 19 Julho 2021</div>
                <div className="container-img">
                    <img src={nuvemInterrogação} alt="Nuvem com ponto de interrogação" />
                </div>
                <div className="container-temp">
                    <div>22</div>
                    <span>C</span>
                </div>
                <div className="weather">Nublado</div>
                <div className="hi-low">22c / 23c</div>
            </main>

            <footer>
                <form onSubmit={handleCreateNewRequest}>
                    <input type="text"
                        value={content}
                        onChange={event => setContent(event.target.value)}
                    />

                    <button type="submit">
                        <img src={lupa} alt="Pesquisar" />
                    </button>
                </form>
            </footer>
        </Container>
    )
}