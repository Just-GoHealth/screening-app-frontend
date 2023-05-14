import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const useInAppNavigation = () => {
  const navigate = useNavigate()
  const params = useParams()

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoHome = () => {
    navigate('/');
  };

  const handleAddSchool = () => {
    navigate('/add-new-school');
  };

  const startScreening = () => {
    navigate('/screening');
  };

  const viewHealthRecords = () => {
    navigate('/all-health-records');
  };

  return { navigate, handleGoHome, handleGoBack, handleAddSchool, startScreening, viewHealthRecords, params }
}
