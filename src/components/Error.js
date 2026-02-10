import { useRouteError } from "react-router-dom"

const ErrorHandler = () => {

    const err = useRouteError() ;
    return (
        <div className="error">
            <h1>Opps something went wrong</h1>
            <h2>{err.status}:{err.statusText}</h2>
            <h3>Halku re please correct it!!!</h3>
        </div>
    )
}


export default ErrorHandler ;