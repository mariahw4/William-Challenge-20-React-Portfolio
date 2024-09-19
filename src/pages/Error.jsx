import { userRouteError } from 'react-router-dom';

export default function ErrorPage() {
    const error = userRouteError();

    return (
        <div id="error-page">
            <h1>404</h1>
            <p>Page not found</p>
            <p>{error.statusText || error.message}</p>
        </div>
    );
}