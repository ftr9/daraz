import './errorPage.css'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div className='errorPage'>
            <div className='errorPage__content'>
                <img src='/images/pages/errorPage.png' alt='Error'></img>
                <div className='errorPage__backbutton' onClick={() => {
                    navigate("/");
                }}>
                    Go Back
                </div>
            </div>
        </div>
    )
}

export default ErrorPage
