import React from 'react';

import Sidebar from '~/admin/components/sidebar/Sidebar';
import Helmet from '~/components/Main/Helmet';
import Button from '~/components/Main/Button';

const EmployeeAddItem = () => {
    return (
        <Helmet title="Admin">
            <div className="admin-container">
                <div className="admin-header__title">
                    <h2>Admin</h2>
                </div>
                <div className="admin">
                    <Sidebar />
                    <div className="admin__right">
                        <div className="admin__right__title">Insert Employee</div>
                        <div className="profile__right__account">
                            <label for="name">Name*</label>
                            <input type="text" name="name" />

                            <label for="gender">Gender*</label>
                            <input type="text" name="gender" />

                            <label for="birthday">Birthday*</label>
                            <input type="text" name="birthday" />

                            <label for="phone">Phone*</label>
                            <input type="text" name="phone" />

                            <label for="email">Email*</label>
                            <input type="text" name="email" />

                            <label for="address">Address*</label>
                            <input type="text" name="address" />

                            <Button primary>Lưu thay đổi</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Helmet>
    );
};

export default EmployeeAddItem;