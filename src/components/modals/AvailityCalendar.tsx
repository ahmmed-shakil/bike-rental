import React, { Dispatch, SetStateAction } from "react";
import { Modal, Calendar } from "antd";

type TCalendarProps = {
  bikeID: string;
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};

const AvailityCalendar: React.FC<TCalendarProps> = ({
  bikeID,
  isModalOpen = false,
  setIsModalOpen,
}) => {
  return (
    <div>
      <Modal
        title={`Availability for Bike ${bikeID}`}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        centered
        getContainer={false}
      >
        <Calendar fullscreen={false} className="p-2 border rounded-lg" />
      </Modal>
    </div>
  );
};

export default AvailityCalendar;
