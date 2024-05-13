import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex  flex-col ">
            <Helmet>
                <title>Heaven Hearth || ErrorPage</title>
            </Helmet>
            
            
        <div className="w-2/3 h-2/3 mx-auto">
            <img className="rounded-2xl" src={'https://i.ibb.co/qkz6Dn6/6338750.jpg'}  />
        </div>

        <div className="mx-auto">
            <Link to='/'> <button className="btn font-bold bg-[#FFC801]">Go Back to Home</button></Link>
        </div>
    </div>
    );
};

export default ErrorPage;