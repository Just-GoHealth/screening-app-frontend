import { HealthRecordsNavBar } from "../../shared/components/health-records-header/index.js";
import { Button } from "@mui/material";
import { AiOutlinePlus } from "react-icons/ai";
import { useInAppNavigation } from "../../shared/custom-hooks/index.js";
import { useState } from "react";
import ModalOverlay from "../../shared/components/modal-overlay/modal-overlay.jsx";
import Modal from "../../shared/components/modal/modal.jsx";
import ManageAccountContent from "../../shared/components/manage-account/ManageAccountContent.jsx";
import { GridComponent } from "../../shared/components/grid-component/GridComponent.jsx";
import {
  GridSchoolDownloadAction,
  GridSchoolNameRenderer,
} from "../../shared/components/grid-component/index.js";

const ManageAccountPage = () => {
  const { handleGoBack } = useInAppNavigation();
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal ? (
        <ModalOverlay setShowState={setShowModal}>
          <Modal>
            <ManageAccountContent setShowModal={setShowModal} />
          </Modal>
        </ModalOverlay>
      ) : null}
      <div className="health-records-container">
        <HealthRecordsNavBar
          heading={"JustGo Health Records"}
          onLeftIconClick={handleGoBack}
          rightIcon={
            <Button
              variant="contained"
              disableElevation
              color="secondary"
              startIcon={<AiOutlinePlus />}
              size="small"
              onClick={() => setShowModal(true)}
            >
              <p className="health-records-header-left-button">
                Manage Account
              </p>
            </Button>
          }
        />

        <div className="h-[465px]">
          <GridComponent
            searchplaceholder="Search for School"
            fetchUrl="https://screening-tool-api.onrender.com/schools"
            columnDefs={[
              { field: "number", headerName: "#", flex: 1 },
              {
                field: "school_name",
                headerName: "School",
                cellRenderer: GridSchoolNameRenderer,
                autoHeight: true,
              },
              {
                field: "studentPopulation",
                headerName: "Students",
              },
              {
                field: "updatedAt",
                headerName: "Date",
                valueFormatter: function (params) {
                  const date = new Date(params.value);
                  const month = date.toLocaleString("en-US", {
                    month: "short",
                  });
                  const day = date.getDate();

                  return month + " " + day;
                },
                sort: "desc",
                flex: 1,
              },
              {
                field: "download",
                headerName: "Download",
                cellRenderer: GridSchoolDownloadAction,
              },
            ]}
          />
        </div>
      </div>
    </>
  );
};
ManageAccountPage.displayName = "Manage Account Page";

export default ManageAccountPage;
