import { useParams } from "react-router-dom";
import CreateAssignmentModal from "../../../../components/modal/CreateAssignmentModal";
import { useState } from "react";

const ClassProgress = () => {
  const { id } = useParams();
  //   console.log(id);

  // for create a assignment modal
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* class progress section */}

      {/* assignment section */}
      <div>
        <button onClick={() => setIsOpen(true)} className="btn">
          Create
        </button>
        <CreateAssignmentModal
          isOpen={isOpen}
          closeModal={closeModal}
          id={id}
        ></CreateAssignmentModal>
      </div>
      {/* <Assignment></Assignment> */}
    </div>
  );
};

export default ClassProgress;
