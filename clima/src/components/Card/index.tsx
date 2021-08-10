import { useState } from 'react';
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

    function searchResults() {
        fetch(`${process.env.REACT_APP_BASE}weather?q=${city}&appid=${process.env.REACT_APP_KEY}&units=${process.env.REACT_APP_UNITS}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`http error: status ${response.status}`)
                }
                return response.json();
            })
            .catch(error => {
                alert(error.message)
            })
            .then(data => {
                console.log(data);
                setCityName(data);
            })
        setCity('');
    }


    return (
        <Container>
            <header>
                <h2>Tempo e Temperatura</h2>
            </header>

            <main>
                {cityName ? (
                    <div className="city">{cityName.name}, {cityName.sys.country}</div>
                ) : (
                    <div></div>
                )}

                <div className="date">{ cityName ? (
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
                </div>

                {cityName ? (
                    <div className="container-temp">{cityName?.main.temp} <span>°C</span> </div>
                ) : (
                    <div></div>
                )}

                {cityName ? (
                    <div className="weather">{cityName?.weather[0].description}</div>
                ) : (
                    <div></div>
                )}

                {cityName ? (
                    <div className="hi-low">{cityName?.main.temp_min}°c / {cityName?.main.temp_max}°c</div>
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