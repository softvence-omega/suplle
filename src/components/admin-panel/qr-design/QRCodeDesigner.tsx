import React, { useState } from 'react';
import { useDesigns } from './data/useDesign';
import { Tabs } from './Tab';
import { DesignGrid } from './DesignGrid';
import { NewDesignForm } from './NewDesignForm';

export const QRCodeDesigner: React.FC = () => {
  const {
    availableDesigns,
    comingSoonDesigns,
    unavailableDesigns,
    addDesign,
    updateDesign,
    changeDesignStatus
  } = useDesigns();

  const [activeTab, setActiveTab] = useState('available');
  const [showNewDesignForm, setShowNewDesignForm] = useState(false);

  const tabs = [
    { id: 'available', label: 'Available' },
    { id: 'comingSoon', label: 'Coming Soon' },
    { id: 'unavailable', label: 'Unavailable' }
  ];
  console.log(updateDesign)

  return (
    <div className="">
      <div className="py-6">
        <h2 className='md:text-2xl text-xl text-[#333333] dark:text-[#FFFFFF]'>QR Code Designs</h2>
      </div>



      <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

      {activeTab === 'available' && (
        <>
          {!showNewDesignForm && (
            <DesignGrid
              designs={availableDesigns}
              onEdit={() => {/* Handle edit logic id */ }}
              onStatusChange={(id) => changeDesignStatus(id, 'unavailable')}
              statusChangeLabel="Set Unavailable"
            />
          )}

          {showNewDesignForm ? (
            <div className="mt-6 ">
              <h2 className="md:text-2xl text-xl font-normal text-[#333333] dark:text-white mb-4">Add New Design</h2>
              <NewDesignForm
                onSubmit={(design) => {
                  addDesign({ ...design, status: 'available' });
                  setShowNewDesignForm(false);
                }}
                onCancel={() => setShowNewDesignForm(false)}
              />
            </div>
          ) : (
            <button
              className="mt-6 px-4 py-2 bg-primary text-white rounded-md hover:bg-teal-700 transition duration-200 flex items-center md:text-base text-sm "
              onClick={() => setShowNewDesignForm(true)}
            >
              <span className="mr-2">+</span> Add New Design
            </button>
          )}
        </>
      )}

      {activeTab === 'comingSoon' && (
        <>
          <DesignGrid
            designs={comingSoonDesigns}
            onEdit={() => {/* Handle edit logic id */ }}
            onStatusChange={(id) => changeDesignStatus(id, 'available')}
            statusChangeLabel="Set Available"
          />

        </>
      )}

      {activeTab === 'unavailable' && (
        <>
          <DesignGrid
            designs={unavailableDesigns}
            onEdit={() => {/* Handle edit logic id */ }}
            onStatusChange={(id) => changeDesignStatus(id, 'available')}
            statusChangeLabel="Set Available"
          />

        </>
      )}
    </div>
  );
};