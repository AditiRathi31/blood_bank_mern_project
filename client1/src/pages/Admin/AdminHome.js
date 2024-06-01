import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <h4><p>
          Welcome! Here you can manage blood donations, update the list 
          of all blood types, and monitor their availability. Use the 'Donate Blood' function
          to record new donations and ensure accurate inventory. Your efficient management helps 
            maintain a steady supply of lifesaving blood.
           Thank you for your dedication and commitment to saving lives every day!
          </p></h4>
          <br/>
          <h5>Every donation counts. Encourage your community to donate blood and help save lives. 
            Together, we can make a difference. Thank you for your support and generosity!





</h5>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;