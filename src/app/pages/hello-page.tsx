import { Link } from "react-router-dom";

export function HelloPage() {
    return(
        <div>
            <h1>Hello Kitty</h1>
            <p>
                <Link to={'/'}>Go home</Link>
            </p>
        </div>
    );
}