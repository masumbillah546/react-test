import React from "react"
import { Row, Col, Image } from 'antd';
import './TestThree.css';

const Profile = () => {
  return (
    <div className="container ">
      <div className="row border">       
          <div className="col-lg-6">
            <div className="row p-3">
                <div className="col-md-4">
                <img className="rounded-circle" 
                 width={120} height={120}
               
                src="http://localhost:3000/595x595.png"
                />
                </div>
                 <div className="col-md-4 p-0">
                
                <ul className="list-group" >
                <h3>Masum Billah</h3>
                  <li className="list-group text-muted">UI/UX Design Team</li>
                  <li className="list-group text-muted">Web Designer</li>
                 
                </ul>
                <div className="pt-3">
                <h6>Employee ID : FT-001</h6>
                 <li className="list-group text-muted">Date of Join : 1st Jan 20113</li>
                 </div>
                <div className="pt-4">
                <button className="btn btn-1">Send Message</button>
                </div>
                </div>
                <div className="col-md-4 bl"></div>
             </div>

          </div>
          <div className="col-lg-6">
             <div className="row p-2">
                <div className="col-md-10">
                     <table className="table table-light">
                      <tr className="p-9">
                        <th className="text-secondary">Phone:</th>
                        <td><a href="">01738004246</a></td>
                      </tr>
                      <tr>
                        <th className="text-secondary">Email:</th>
                        <td><a href="">masumbillah546@gmail.com</a></td>
                      </tr>
                      <tr>
                        <th className="text-secondary">Birthday:</th>
                        <td className="text-muted">20/12/1993</td>
                      </tr>
                      <tr>
                        <th className="text-secondary">Address:</th>
                        <td className="text-muted">Dhaka, Bangladesh</td>
                      </tr>
                      <tr>
                        <th className="text-secondary">Gender:</th>
                        <td className="text-muted">Male</td>
                      </tr>
                      <tr>
                        <th className="text-secondary">Reports to:</th>
                        <td><a href=""><img className="rounded-circle"
                           width={30} height={30} src="http://localhost:3000/595x595.png" alt="image" /> Wahidur Rahman</a></td>
                      </tr>
                    </table>
                </div>
                 
             </div>
          </div>
          
        </div>
        <div className="row">
            <div className="col-lg-12 p-0 ">


                <ul className="nav border " role="tablist">
                  <li className="nav-item">
                    <a className="text-secondary nav-link active" href="#profile" role="tab" data-toggle="tab"><p className="h6">Profile</p></a>
                  </li>
                  <li className="nav-item">
                    <a className=" text-muted nav-link" href="#buzz" role="tab" data-toggle="tab">Projects</a>
                  </li>
                  <li className="nav-item">
                    <a className=" text-muted nav-link" href="#references" role="tab" data-toggle="tab">Bank & Statuory</a>
                  </li>
                </ul>


                <div className="tab-content">
                  <div role="tabpanel" className="tab-pane fade in active" id="profile">...</div>
                  <div role="tabpanel" className="tab-pane fade" id="buzz">bbb</div>
                  <div role="tabpanel" className="tab-pane fade" id="references">ccc</div>
                </div>

            </div>
          </div>
    </div>
  );
};

export default Profile;
