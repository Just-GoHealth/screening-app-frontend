import { createContext, useContext } from "react";
import useAxiosInstance from "../custom-hooks/useAxiosInstance.js";
import { ENDPOINTS } from "../endpoints/endpoints.js";
import { useAuthContext } from "./auth/AuthContext.jsx";

const SchoolContext = createContext(undefined);
const SchoolProvider = ({ children }) => {
  const { user, isAlpha } = useAuthContext();
  const axiosInstance = useAxiosInstance();
  const axiosWithToken = useAxiosInstance();

  const getSchools = () => {
    return axiosInstance.get(ENDPOINTS.getSchools).then((response) => {
      if (!!response && response.data) {
        return response.data;
      }
    });
  };

  const filterSchools = (schools) => {
    return schools.filter((school) => {
      if (!isAlpha) return user.school_id.includes(school.id);
      return school;
    });
  };

  const addProgram = async (data) => {
    return axiosWithToken
      .post(`${ENDPOINTS.addProgram}`, data)
      .then((response) => {
        if (!!response && response.data && response.status === 200) {
          return response.data;
        }
      });
  };

  return (
    <SchoolContext.Provider value={{ getSchools, filterSchools, addProgram }}>
      {children}
    </SchoolContext.Provider>
  );
};
export const useSchoolContext = () => useContext(SchoolContext);
export default SchoolProvider;
