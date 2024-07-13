import React from "react";
import { FaCalendarCheck, FaCalendarAlt } from "react-icons/fa";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import { ImUngroup } from "react-icons/im";

type DoctorInfoType = {
  _id: string;
  name: string;
  imgUrl: string;
};

type UpcomingAppointmentType = {
  doctorInfo: DoctorInfoType;
  date: string;
};

type UpcomingAppointmentsType = UpcomingAppointmentType[];

const Page = () => {
  const UpcomingAppointments:UpcomingAppointmentsType = [
    {
      doctorInfo:{
        _id:"1525",
        name:"Dr. Krishna Acharya",
        imgUrl:"https://t3.ftcdn.net/jpg/02/60/04/08/360_F_260040863_fYxB1SnrzgJ9AOkcT0hoe7IEFtsPiHAD.jpg"
      },
      date:"15 July 2024 7:30 PM - 9:30 PM"
    },
    {
      doctorInfo:{
        _id:"1526",
        name:"Dr. Ramesh Patel",
        imgUrl:"https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-afro-professional-doctor-png-image_10148632.png"
      },
      date:"16 July 2024 10:00 AM - 12:00 PM"
    },
    {
      doctorInfo:{
        _id:"1527",
        name:"Dr. Smita Shah",
        imgUrl:"https://static.vecteezy.com/system/resources/thumbnails/028/287/555/small/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg"
      },
      date:"17 July 2024 2:00 PM - 4:00 PM"
    },
    {
      doctorInfo:{
        _id:"1528",
        name:"Dr. Rohan Mehta",
        imgUrl:"https://www.shutterstock.com/image-photo/headshot-arab-doctor-guy-wearing-260nw-2051512460.jpg"
      },
      date:"18 July 2024 5:00 PM - 7:00 PM"
    }
  ]
  return (
    <main className="w-full pt-10 px-4 bg-blue-50 h-screen flex flex-col lg:flex-row lg:gap-5">
      <section className="flex justify-center md:justify-start lg:w-[30vw]">
        <div className="w-[300px] lg:w-full  bg-white drop-shadow-md shadow-gray-300 min-h-[175px] lg:h-[200px] overflow-hidden rounded">
          <div className="w-full bg-blue-200 p-3 pb-6 flex flex-col justify-start">
            <h3 className="text-lg font-bold text-blue-600">Welcome Back !</h3>
            <h5 className="text-base text-blue-500 ml-2">Dashboard</h5>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-center items-center p-1 rounded-full bg-blue-50 self-start ml-5 -translate-y-1/2">
              <img
                className="w-10 h-10 rounded-full"
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="user photo"
              />
            </div>
            <div className="flex w-full justify-between -translate-y-5">
              <div className="flex flex-col px-2">
                <h4 className="text-gray-600 text-base font-medium">
                  John Doe
                </h4>
                <h4 className="text-gray-600 text-base">johndoe@gmail.com</h4>
              </div>
              <div className="px-2">
                <button className="px-2 py-1 rounded bg-blue-600 text-white font-medium max-w-max hover:bg-blue-700">
                  View Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="lg:w-[70vw] w-full">
        <section className="w-full grid mt-10 lg:mt-0 grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-5">
          <div className="bg-white shadow h-[125px] overflow-hidden rounded flex justify-between p-5">
            <div className="flex flex-col gap-2">
              <h4 className="text-gray-600 text-lg">
                Upcoming Appointments
              </h4>
              <h4 className="text-gray-900 text-lg lg:text-xl font-bold ">6</h4>
            </div>
            <div className="h-full flex items-center justify-end">
            <button className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center p-2">
              <BsFillCalendarWeekFill className="text-white" />
              </button>
            </div>
          </div>

          <div className="bg-white shadow h-[125px] overflow-hidden rounded flex justify-between p-5">
            <div className="flex flex-col gap-2">
              <h4 className="text-gray-600 text-lg ">
                Completed Appointments
              </h4>
              <h4 className="text-gray-900 text-lg lg:text-xl font-bold">
                183
              </h4>
            </div>
            <div className="h-full flex items-center justify-end">
              <button className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center p-2">
              <FaCalendarCheck className="text-white"/>
              </button>
            </div>
          </div>

          <div className="bg-white shadow h-[125px] overflow-hidden rounded flex justify-between p-5">
            <div className="flex flex-col gap-2">
              <h4 className="text-gray-600 text-lg ">
                Total Appointments
              </h4>
              <h4 className="text-gray-900 text-lg lg:text-xl font-bold">
                189
              </h4>
            </div>
            <div className="h-full flex items-center justify-end">
            <button className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center p-2">
              <FaCalendarAlt className="text-white" />
              </button>
            </div>
          </div>
        </section>

        <section className="mt-10 max-w-[100vw] overflow-x-scroll">
          <h3 className="text-xl font-bold">Today Appointments</h3>
          <table className="w-full bg-white rounded-lg shadow-lg mt-2 min-w-[500px]" cellPadding={5}>
            <thead>
              <tr className="bg-gray-100 border-b border-gray-200">
                <td className="text-gray-600 text-medium text-base w-1/2">DOCTOR</td>
                <td className="text-gray-600 text-medium text-base w-1/2">TIME</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-gray-600 text-medium text-sm flex items-center gap-2">
                  <img src="https://t3.ftcdn.net/jpg/02/60/04/08/360_F_260040863_fYxB1SnrzgJ9AOkcT0hoe7IEFtsPiHAD.jpg" alt="doctor" className="w-8 h-8 rounded-full object-cover"/>
                  <h3 className="text-medium text-black text-nowrap">Dr. Krishna Acharya</h3>
                </td>
                <td className="text-gray-600 text-medium text-sm">
                  <span className="bg-blue-200 text-blue-600 py-1 px-3 rounded text-sm text-nowrap">7:30 PM - 9:30 PM</span>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        
        <section className="mt-10 max-w-[100vw] overflow-x-scroll">
          <h3 className="text-xl font-bold">Upcoming Appointments</h3>
          <table className="w-full bg-white rounded-lg shadow-lg mt-2 min-w-[500px]" cellPadding={5}>
            <thead>
              <tr className="bg-gray-100 border-b border-gray-200">
                <td className="text-gray-600 text-medium text-base w-1/2">DOCTOR</td>
                <td className="text-gray-600 text-medium text-base w-1/2">DATE</td>
              </tr>
            </thead>
            <tbody>
              {UpcomingAppointments?.map((data,i)=>{
              return (
              <tr key={i}>
                <td className="text-gray-600 text-medium text-sm flex items-center gap-2">
                  <img src={data.doctorInfo.imgUrl} alt="doctor" className="w-8 h-8 rounded-full object-cover"/>
                  <h3 className="text-medium text-black text-nowrap">{data?.doctorInfo?.name}</h3>
                </td>
                <td className="text-gray-600 text-medium text-sm">
                  <span className="bg-blue-200 text-blue-600 py-1 px-3 rounded text-sm text-nowrap">{data.date}</span>
                </td>
              </tr>)
              }
              )}
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
};

export default Page;