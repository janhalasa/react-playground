import { Link, Outlet } from "react-router-dom";

export function TemplatePage() {
    return(
        <div className='root-page-layout'>
            <aside>
                <h1>React playground</h1>
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/tic-tac-toe'}>Tic-tac-toe game</Link>
                    </li>
                    <li>
                        <Link to={'/form'}>Form sample</Link>
                    </li>
                    <li>
                        <Link to={'/hello'}>Hello</Link>
                    </li>
                </ul>
            </aside>
            <main>
                <Outlet />
            </main>
        </div>
    );
}