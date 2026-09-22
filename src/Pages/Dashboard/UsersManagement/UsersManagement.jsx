import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { FaUserSlash } from "react-icons/fa6";
import { FaUserShield } from "react-icons/fa6";
import { FaUserEdit } from "react-icons/fa";
import { FaUserMinus } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import Swal from 'sweetalert2';
const UsersManagement = () => {
    const axiosSecure = useAxiosSecure();
    const [searchText, setSearchText] = useState('')
    const { data : users = [], refetch} =useQuery({
        queryKey: ['users', searchText],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users?searchText=${searchText}`)
            return res.data
        }
    })

const updateUserRole = (user, role) => {

    const userRole = {
        role: role
    };

    axiosSecure.patch(`/users/${user._id}/role`, userRole)
        .then(res => {

            console.log("Update result:", res.data);

            if (res.data.modifiedCount > 0) {
                refetch();

                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `User role changed to ${role}`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
        .catch(error => {
            console.log(error);
        });
};


const handleMakeAdmin = (user) => {

    Swal.fire({
        title: "Make this user an admin?",
        text: "This will give the user admin privileges.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, make admin",
        cancelButtonText: "Cancel"
    }).then((result) => {

        if (result.isConfirmed) {
            updateUserRole(user, "admin");
        }

    });
};


const handleRemoveAdmin = (user) => {

    Swal.fire({
        title: "Remove admin role?",
        text: "This user will become a normal user.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, remove admin",
        cancelButtonText: "Cancel"
    }).then((result) => {

        if (result.isConfirmed) {
            updateUserRole(user, "user");
        }

    });
};
    return (
        <div>
            <div className='text-center my-4'>
                <h2 className='text-2xl font-bold'>Users Management {users.length}</h2> 
                
                <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input onChange={(e)=> setSearchText(e.target.value)} type="search" className="grow" placeholder="Search User" />
  <kbd className="kbd kbd-sm">⌘</kbd>
  <kbd className="kbd kbd-sm">K</kbd>
</label>
            </div>
            <div className='w-10/12 mx-auto my-5'>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <th>Profile</th>
        </th>
        <th>Email</th>
        <th>Role</th>
        <th>Admin Actions</th>
        <th>Others Actions</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user, index)=>    <tr>
        
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={user.photoURL} />
              </div>
            </div>
            <div>
              <div className="font-bold">{user.displayName}</div>
              
            </div>
          </div>
        </td>
        <td>
          {user.email}
         
        </td>
        <td>{user.role}</td>
        <th>
  {
    user.role === 'admin' ? (
      <button
        className="btn text-center btn-error"
        onClick={() => handleRemoveAdmin(user)}
      >
        <FaUserSlash />
      </button>
    ) : (
      <button
        className="btn text-center btn-success"
        onClick={() => handleMakeAdmin(user)}
      >
        <FaUserShield />
      </button>
    )
  }
</th>
        <th>
            <button className='btn'><FaUserEdit />
</button>
            <button className='btn mx-3'><FaUserMinus />

</button>
            <button className='btn'><FaEye />

</button>
        </th>
      </tr>)
      }
   

      
    </tbody>
 
  </table>
</div>

            </div>
        </div>
    );
};

export default UsersManagement;