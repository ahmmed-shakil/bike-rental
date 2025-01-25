import React from "react";

const BikesPage: React.FC = () => {
  return (
    <div className=" px-4 pt-10 min-h-screen dark:bg-slate-800 dark:text-white">
      <div className=" max-w-5xl mx-auto">
        <h6 className=" mb-4 font-semibold text-xl">Bike List</h6>
        <hr className=" mb-4 bg-primary" />
        <div className=" py-10">
          <div className=" grid grid-cols-1 md:grid-cols-3">
            <div>Images</div>
            <div className=" md:col-span-2">
              <h6 className=" text-lg font-semibold">Model Name</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikesPage;
