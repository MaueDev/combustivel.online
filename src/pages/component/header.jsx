import "./styles/header.css";


export default function Header() 
{
    return (
        <header>
            <div className="LogoHeader">
                <h1>COMBUSTIVEL.ONLINE</h1>
            </div>
            <div>
                <div>
                    <label>Cidade:</label>
                    <input type="text" />
                </div>
                <div>
                    <button>Entrar</button>
                    <button>Criar Conta</button>
                </div>
            </div>
        </header>
    )
}