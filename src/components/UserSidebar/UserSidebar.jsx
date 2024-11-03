import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'antd';
import { DashboardOutlined, UnorderedListOutlined, UserOutlined, PoweroffOutlined } from '@ant-design/icons';

const UserSidebar = () => {
  const navigate = useNavigate();

  const onClick = (e) => {
    if (e.key === '1') {
      navigate('/dashboard/users/profile');
    }  
    if (e.key === '2') {
      navigate('/dashboard/users/orders');
    }    
  };

  const items = [
    {
      key: 'sub1',
      label: 'Profile',
      icon: <DashboardOutlined />,
      children: [
        {
          key: '1',
          label: 'Profile',
        }, 
      ],
    }, 
    {
        key: 'sub2',
        label: 'Orders',
        icon: <DashboardOutlined />,
        children: [
          {
            key: '2',
            label: 'Orders',
          }, 
        ],
      },
    {
      type: 'divider',
    },
  ];
  

//   const profileItems = [
//     {
//       key: 'grp',
//       icon: <UserOutlined />,
//       label: 'Profile',
//       children: [
//         {
//           key: '13',
//           icon: <PoweroffOutlined />,
//           label: 'Signout',
//           danger: true,
//         },
//       ],
//     },
//   ];

  return (
    <div
      style={{
        width: 256,
        height: '100vh', 
        display: 'flex',
        flexDirection: 'column',  
        left: 0,
        top: 0,
        background: '#001529', 
      }}
    >
      <Menu
        onClick={onClick}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        items={items}
        style={{ flexGrow: 1 }}  
      />
      {/* <Menu
        onClick={onClick}
        mode="inline"
        theme="dark"
        items={profileItems}
      /> */}
    </div>
  );
};

export default UserSidebar;
