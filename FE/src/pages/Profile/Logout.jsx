import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Helmet from '~/components/Main/Helmet';
import ProfileSide from '~/components/Main/ProfileSide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointLeft, faHandPointRight } from '@fortawesome/free-regular-svg-icons';
import { AuthContext } from '../../context/authContext';

const Logout = () => {

    const {logout} = useContext(AuthContext);

    return (
        <Helmet title="Account">
            <div className="header-title">
                <h2>Tài khoản</h2>
            </div>
            <div className="profile">
                <ProfileSide />

                <div className="profile__right">
                    <div className="profile__right__title">thoát</div>

                    <div className="profile__right__logout">
                        <p>
                            Bạn có chắc chắn muốn đăng xuất không?
                            <Link to="/">
                            <span>
                                    <span>
                                        <FontAwesomeIcon icon={faHandPointRight} />
                                    </span>
                                    <span onClick={logout} >Xác nhận và đăng xuất</span>
                                    <span>
                                        <FontAwesomeIcon icon={faHandPointLeft} />
                                    </span>
                                </span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </Helmet>
    );
};

export default Logout;