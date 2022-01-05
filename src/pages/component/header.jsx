import "./styles/header.css";
import TextLocation from "./Input/TextLocation"
export default function Header() 
{
    return (
        <header>
            <div className="LogoHeader">
                <h1>COMBUSTIVEL.ONLINE</h1>
            </div>
            <div>
                <div className="HeaderCidade">
                    <TextLocation />
                </div>
            </div>
        </header>
    )
}