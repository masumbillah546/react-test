import React from "react"
import { Row, Col, Image } from 'antd';

const Profile = () => {
  return (
    <Row justify="center">
      <Col span={20}>
        <Image
          width={1000}
          src="http://localhost:3000/HR_employee.png"
        />
      </Col>
    </Row>
  );
};

export default Profile;
