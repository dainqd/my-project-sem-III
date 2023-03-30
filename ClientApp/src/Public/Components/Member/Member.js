import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Header from "../Shared/Client/Header/Header";
import Navbar from "../Shared/Client/Navbar/Navbar";
import Footer from "../Shared/Client/Footer/Footer";
import Background from '../images/client/carousel-1.jpg';
import memberService from "../Service/MemberService";

function Team() {
    // const navigate = useNavigate();
    const [data, setData] = useState([]);
    const list = [];

    const getListMember = async () => {
        await memberService.listMember()
            .then((res) => {
                if (res.status === 200){
                    console.log("data member", res.data)
                    // list = res.data;
                    // console.log(list[0].name)
                    console.log(res.data[1])
                    setData(res.data)
                } else {
                    alert('Error')
                }
            })
            .catch((err) => {
                console.log(err)
                alert("Error, Please try again!")
            })
    };

    useEffect(() => {
        getListMember();
    }, []);

    data.forEach((member, index) => {
        list.push(
            <div class="col-lg-2 col-md-6 wow fadeInUp" style={{margin: "auto"}} data-wow-delay="0.3s" key={index}>
                <div className="team-item rounded">
                    <img className="img-fluid" src={member.avatar} alt=""/>
                    <div className="text-center p-4">
                        <h5>{member.fullName}</h5>
                        <span>{member.position}</span>
                    </div>
                    <div className="team-text text-center bg-white p-4">
                        <h5>{member.fullName}</h5>
                        <p>{member.introduce}</p>
                        <div className="d-flex justify-content-center">
                            <Link className="btn btn-square btn-light m-1" to=""
                            ><i className="fab fa-twitter"></i
                            ></Link>
                            <Link className="btn btn-square btn-light m-1" to=""
                            ><i className="fab fa-facebook-f"></i
                            ></Link>
                            <Link className="btn btn-square btn-light m-1" to=""
                            ><i className="fab fa-youtube"></i
                            ></Link>
                            <Link className="btn btn-square btn-light m-1" to=""
                            ><i className="fab fa-linkedin-in"></i
                            ></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div style={{backgroundColor:"#fff"}}>
            <Header />
            <Navbar />
            <div
                className="container-fluid page-header py-5 mb-5 wow fadeIn" style={{backgroundImage: `url(${Background})`}}
                data-wow-delay="0.1s">
                <div className="container py-5">
                    <h1 className="display-4 animated slideInDown mb-4">Team Members</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="#">Pages</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">
                                Team Members
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto" style={{maxWidth: "500px"}}>
                        <h1 className="display-6 mb-5">Meet Our Professional Team Members</h1>
                    </div>
                    <div className="row g-5 mt-5">
                        {list}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Team
