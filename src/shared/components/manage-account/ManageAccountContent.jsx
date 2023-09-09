import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { AiOutlineLeft, AiOutlinePlusCircle } from "react-icons/ai";
import { useAuthContext } from "../../context/auth/AuthContext.jsx";
import { useInAppNavigation } from "../../custom-hooks/index.js";
import Heading from "../heading/heading.jsx";
import { useQuery } from "react-query";
import { useSchoolContext } from "../../context/SchoolContext.jsx";
import { useUserContext } from "../../context/UserContext.jsx";
import { BsPersonFill } from "react-icons/bs";
import Toggle from "../toggle/Toggle.jsx";
import useConfirmationModal from "../confirmation-modal/useConfirmationModal.jsx";

const ManageAccountContent = ({ setShowModal }) => {
  const { user, isAlpha, logout } = useAuthContext();
  const { getSchools, filterSchools } = useSchoolContext();
  const { getAllUsers } = useUserContext();
  const { handleAddSchool } = useInAppNavigation();
  const [toggleEnabled, setToggleEnabled] = useState(false);
  const { openModal, ModalComponent } = useConfirmationModal();

  const { data: schools } = useQuery({
    queryKey: ["schools"],
    queryFn: () => getSchools(),
  });
  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: () => getAllUsers(),
  });

  const userDetails = [
    {
      name: "Name",
      value: "full_name",
    },
    {
      name: "Email",
      value: "email",
    },
    {
      name: "Phone",
      value: "contact",
    },
    {
      name: "Joined",
      value: "createdAt",
    },
  ];

  const handleConfirmation = async () => {
    openModal("Are you sure you want to proceed?", () => console.log("done"));
  };

  return (
    <>
      {ModalComponent}

      <div className="p-8 space-y-10">
        <div className="flex justify-between items-center">
          <IconButton
            onClick={() => setShowModal(false)}
            size="small"
            style={{ background: "#BCBEC0" }}
          >
            <AiOutlineLeft color="white" />
          </IconButton>
          <Heading
            center={true}
            title={`Manage Account ${isAlpha() ? "(Alpha)" : ""}`}
            style
          />
          <button
            className="auth-button border-0 bg-black text-white pt-2"
            onClick={() => logout()}
          >
            Log out
          </button>
        </div>
        <div className="flex justify-center space-x-10">
          {/* Account Details */}
          <div>
            <div className="bg-black rounded-t-xl text-white py-2 px-4">
              <div className="w-full flex space-x-3 justify-between items-center">
                {!isAlpha() ? <BsPersonFill className="text-4xl" /> : null}
                <h3 className="flex text-2xl">
                  {isAlpha() ? "Accounts" : "Your page"}
                </h3>
                {isAlpha() ? (
                  <span className="ml-10 rounded-full border-2 border-white px-2 py-1">
                    {Array.isArray(users) ? users.length : 0}
                  </span>
                ) : (
                  <div>
                    <Toggle
                      enabled={user.is_active}
                      setEnabled={setToggleEnabled}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="border-[3px] border-black rounded-b-xl space-y-2 p-3">
              {isAlpha() && Array.isArray(users) ? (
                users.map((user, i) => (
                  <div key={i} className="flex space-x-4">
                    <h3>{user.full_name}</h3>
                    <span className="border-gray-600 border-2 rounded-full p-0.5 text-xs font-semibold text-gray-600">
                      200
                    </span>
                  </div>
                ))
              ) : isAlpha() && Array.isArray(users) && user.length === 0 ? (
                <p>No users found</p>
              ) : (
                <div className="space-y-2">
                  <table>
                    <tbody>
                      {userDetails.map((detail, index) => {
                        return (
                          <tr key={index}>
                            <td>{detail.name}</td>
                            <td className="pl-5 text-gray-400">
                              {user[detail?.value]}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
          {/* Schools */}
          <div className="min-w-[300px]">
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-black text-primary text-2xl">
                Programs.
                <span className="text-black">
                  {schools?.school_list?.length}
                </span>
              </h2>
              {isAlpha() ? (
                <AiOutlinePlusCircle
                  onClick={() => handleAddSchool()}
                  className="font-bold text-primary text-3xl cursor-pointer"
                />
              ) : null}
            </div>
            <hr className="border-b-[1px] border-gray-400 mb-4" />
            {/* List of Schools*/}
            <div className="space-y-1">
              {Array.isArray(schools?.school_list) ? (
                filterSchools(schools?.school_list).map((school, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-[270px] flex justify-between items-center border-2 border-primary rounded-lg px-2">
                      <p className="text-lg">{school.school_name}</p>
                      <p className="text-xs">200</p>
                    </div>
                    {isAlpha() ? (
                      <AiOutlinePlusCircle
                        onClick={() => handleAddSchool()}
                        className="font-bold text-gray-400 text-lg cursor-pointer"
                      />
                    ) : null}
                  </div>
                ))
              ) : (
                <p>No schools found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ManageAccountContent.displayName = "Manage Account Modal";

export default ManageAccountContent;
