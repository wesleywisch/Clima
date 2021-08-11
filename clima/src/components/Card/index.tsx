import { useState } from 'react';
import { Spinner } from '../Spinner';
import { Container } from "./style";

type ApiProps = {
    name: string;
    main: {
        humidity: number;
        temp: number;
        temp_max: number;
        temp_min: number;
    }
    sys: {
        country: string;
    }
    weather: {
        description: string;
        icon: string;
    }[]
}

export function Card() {
    const [city, setCity] = useState('');
    const [cityName, setCityName] = useState<ApiProps>();
    const [isLoading, setIsLoading] = useState(false);

    async function searchResults() {
        setIsLoading(true);

        await fetch(`${process.env.REACT_APP_BASE}weather?q=${city}&appid=${process.env.REACT_APP_KEY}&units=${process.env.REACT_APP_UNITS}`)
            .then(response => {
                if (!response.ok) {
                    setCityName(undefined);
                    alert('Cidade não encontrada!')
                    return;
                }
                return response.json();
            })
            .catch(error => {
                alert(error.message)
            })
            .then(data => {
                setCityName(data);
            })
        setIsLoading(false);
        setCity('');
    }


    return (
        <Container>

            <main>
                {cityName ? (
                    <div className="city">{cityName.name}, {cityName.sys.country}</div>
                ) : (
                    <div></div>
                )}

                <div className="date">{cityName ? (
                    new Date().toLocaleDateString("pt-BR", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                    })
                ) : (
                    <div></div>
                )}</div>

                <div className="container-img">
                    {cityName ? (
                        <img src={`/assests/${cityName?.weather[0].icon}.png`} alt="Qualquer coisa" />
                    ) : (
                        <img src="/assests/nuvemInterrogação.png" alt="Nuvem com ponto de interrogação" />
                    )}

                    {isLoading ? (
                        <Spinner />
                    ) : (
                        <></>
                    )}
                </div>

                {cityName ? (
                    <div className="container-temp">{cityName?.main.temp} <span>°</span> </div>
                ) : (
                    <div></div>
                )}

                {cityName ? (
                    <div className="hi-low">
                        <div className="foto"><img src="/assests/tempFrio.png" alt="Frio" /> Min: <strong>{cityName?.main.temp_min}°c</strong></div>
                        <div className="foto"><img src="/assests/tempQuente.png" alt="Frio" /> Max: <strong>{cityName?.main.temp_max}°c</strong></div>
                    </div>
                ) : (
                    <div></div>
                )}
            </main>

            <footer>
                <div>
                    <input
                        placeholder="Digite o nome da cidade!"
                        type="text"
                        value={city}
                        onChange={event => setCity(event.target.value)}
                    />

                    <button type="submit" onClick={searchResults}>
                        <img src="/assests/lupa.png" alt="Pesquisar" />
                    </button>
                </div>
            </footer>
        </Container>
    )
}