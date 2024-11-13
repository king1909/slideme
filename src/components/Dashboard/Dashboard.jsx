import React from 'react'
import Chart from './Components/Chart'
import './Dashboard.css'
import PieChart from './Components/PieChart'

function Dashboard() {
  return (
    <div>
      <body>
        <div id="wrapper">
          <div id="content-wrapper" className="d-flex flex-column bg-white">

            <div id="content">
              <div className="container-fluid">
                {/* Page Heading */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                  <select name="" id="" className='form-select max-w-sm'>
                  <option value="1">ข้อมูลของวันนี้</option>
                    <option value="2">ข้อมูลของสัปดาห์นี้</option>
                    <option value="3">ข้อมูลของเดือนนี้</option>
                    <option value="4">ข้อมูลของปีนี้</option>
                  </select>
                </div>

                <div className="row">

                  <div className="col-xl-3 col-md-6 mb-4 box">

                    <div className="card border-left-primary shadow h-100 p-2  second">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                            <p className='font-bold text-[15px] text'>จำนวนผู้ให้บริการ</p>
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800 detail">$40,000</div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-calendar fa-2x text-gray-300" />
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Earnings (Monthly) Card Example */}
                  <div className="col-xl-3 col-md-6 mb-4 box">

                    <div className="card border-left-success shadow h-100 p-2 second">
                      <div className="card-body">

                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                              <p className='font-bold text-[15px] text'>จำนวน Order</p>
                              </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800 detail">
                              <span>1,000 ออเดอร์</span>
                              </div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-dollar-sign fa-2x text-gray-300" />
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>
                  {/* Earnings (Monthly) Card Example */}
                  <div className="col-xl-3 col-md-6 mb-4 box">

                    <div className="card border-left-info shadow h-100 p-2 second">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                            <p className='font-bold text-[15px] text'>จำนวนรถ</p>
                            </div>
                            <div className="row no-gutters align-items-center">
                              <div className="col-auto">
                                <div className="h5 mb-0  font-weight-bold text-gray-800 detail"><span>50 คัน</span></div>
                              </div>

                            </div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-clipboard-list fa-2x text-gray-300" />
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                  {/* Pending Requests Card Example */}
                  <div className="col-xl-3 col-md-6 mb-4 box">
                    <div className="card border-left-warning shadow h-100 p-2 second">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                               <p className='font-bold text-[15px] text'>จำนวนผู้ใช้บริการทั้งหมด</p>
                               </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800 detail"><span>1800 คน</span></div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-comments fa-2x text-gray-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Content Row */}
                <div className="row">
                  <div className='d-flex p-[2rem] pb-[3.5rem]'>
                    <div className='bg-blue-400 rounded-xl text-white p-10 w-[30%]'>
                      <div className='d-flex flex-column'>
                      <h1>รายรับ</h1>
                      <h4>1,000,000 บาท</h4>
                      </div>
                    </div>
                    <div className='ml-10 bg-green-400 rounded-xl text-white p-10 w-[30%]'>
                      <div className='d-flex flex-column'>
                        <h1>รายได้</h1>
                        <h4>1,000,000 บาท</h4>
                        </div>
                    </div>
                    <div className='ml-10 bg-red-400 rounded-xl text-white p-10 w-[30%]'>
                      <div className='d-flex flex-column'>
                        <h1>รายจ่าย</h1>
                        <h4>70,000 บาท</h4>
                        </div>
                    </div>
                  </div>
                  {/* Pie Chart */}
                  <div className="col-xl-4 col-lg-5">

                    <div className="card shadow mb-4">
                      {/* Card Header - Dropdown */}
                      <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">ยอดการใช้บริการ</h6>
                      </div>
                      {/* Card Body */}
                      <div className="card-body">
                        <Chart />
                        {/* <div className="mt-4 text-center small">
                          <span className="mr-2 text-blue-500 font-bold">
                            <i className="fas text-blue-500 fa-circle" /> ภาคเหนือ
                          </span>
                          <span className="mr-2 text-purple-500 font-bold">
                            <i className="fas fa-circle text-success" /> ภาคใต้
                          </span>
                          <span className="mr-2 text-orange-400 font-bold">
                            <i className="fas fa-circle text-success" /> ภาคตะวันออกเฉียงเหนือ
                          </span>
                          <span className="mr-2 text-green-500 font-bold">
                            <i className="fas fa-circle text-success" /> ภากลาง
                          </span>
                        </div> */}
                      </div>

                    </div>
                  </div>
        
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Bootstrap core JavaScript--> */}
        <script src="vendor/jquery/jquery.min.js"></script>
        <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        {/* <!-- Core plugin JavaScript--> */}
        <script src="vendor/jquery-easing/jquery.easing.min.js"></script>
        {/* <!-- Custom scripts for all pages--> */}
        <script src="js/sb-admin-2.min.js"></script>
        {/* <!-- Page level plugins --> */}
        <script src="vendor/chart.js/Chart.min.js"></script>
        {/* <!-- Page level custom scripts --> */}
        <script src="js/demo/chart-area-demo.js"></script>
        <script src="js/demo/chart-pie-demo.js"></script>
      </body>
    </div>
  )
}

export default Dashboard