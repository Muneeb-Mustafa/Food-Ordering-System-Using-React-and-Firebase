import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';  
import { db } from '../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

const PrivateRoute = ({ element: Component }) => {
  const { currentUser, loading } = useAuth();
  const [isSeller, setIsSeller] = React.useState(true);
  const location = useLocation();

  React.useEffect(() => {
    const checkUserRole = async () => {
      if (currentUser) {
        try {
          const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
          if (userDoc.exists) {
            const userRole = userDoc.data().role; 
            if (userRole === 'seller') {
              setIsSeller(true);
            } else {
              setIsSeller(false);
            }
          } else {
            console.error('User document does not exist.');
            setIsSeller(false);
          }
        } catch (error) {
          console.error("Error checking user role: ", error);
          setIsSeller(false);
        }
      } else {
        setIsSeller(false);
      }
    };

    checkUserRole();
  }, [currentUser]);

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (currentUser && isSeller) {
    return Component;
  } else {
    return <Navigate to="/access-denied" state={{ from: location }} />;
  }
};

export default PrivateRoute;

