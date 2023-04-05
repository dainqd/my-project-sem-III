import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

function ManagerCustomer() {
    const navigate = useNavigate();

    const handle = async () => {
        navigate('/dashboard')
        alert("Coming Soon")
    }

    useEffect(() => {
        handle();
    }, []);
}

export default ManagerCustomer;