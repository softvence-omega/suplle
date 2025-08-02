import React, { useEffect, useState } from "react";
import PricingCard from "./PricingCard";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { fetchSubscriptions } from "@/store/features/admin/subscriptionPlan";
import { Button } from "@/components/ui/button";
import UpdateModal from "./UpdateModal";

const PricingSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const { subscriptions } = useAppSelector((state) => state.subscriptionPlan);

  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<any>(null); // Track which plan is selected

  useEffect(() => {
    dispatch(fetchSubscriptions());
  }, [dispatch]);

  const handleUpdateClick = (plan: any) => {
    setSelectedPlan(plan);
    setShowUpdateModal(true);
  };

  const handleUpdateSubmit = async (updatedData: any) => {
    try {
      // Here you would call your API to update the plan
      // For example:
      // await updateSubscriptionPlan(selectedPlan._id, updatedData);
      console.log("Updating plan:", selectedPlan._id, updatedData);

      // Refresh the subscriptions after update
      dispatch(fetchSubscriptions());
      setShowUpdateModal(false);
    } catch (error) {
      console.error("Failed to update plan:", error);
    }
  };

  return (
    <div>
      <p className="mt-3 text-2xl text-[#101828] dark:text-white text-center font-semibold">
        Simple, transparent pricing
      </p>
      <p className="mt-6 text-lg font-normal text-[#667085] dark:text-white text-center">
        We believe Untitled should be accessible to all companies, no matter the
        size.
      </p>

      <div className="md:mt-[100px] mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
        {[...subscriptions].map((sub, idx) => (
          <div
            key={sub._id || idx}
            className="relative mt-[80px] lg:mt-0 h-full"
          >
            <PricingCard
              key={sub._id || idx}
              price={`$${sub.price}`}
              name={sub.name}
              features={sub.features}
              onUpdateClick={() => {
                setSelectedPlan(sub); // Set the selected plan
                setShowUpdateModal(true);
              }}
              onDeleteClick={() => {
                setSelectedPlan(sub); // Set the selected plan
                setShowDeleteModal(true);
              }}
            />
          </div>
        ))}
      </div>

      {showUpdateModal && selectedPlan && (
        <UpdateModal
          showUpdateModal={showUpdateModal}
          setShowUpdateModal={setShowUpdateModal}
          planData={selectedPlan}
          onSubmit={handleUpdateSubmit}
        />
      )}

      {showDeleteModal && selectedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent backdrop-blur">
          <div className="bg-white dark:bg-primary-dark p-5 rounded-lg shadow-lg w-full max-w-lg relative">
            <div className="flex flex-col">
              <h1>
                Are you sure you want to delete the {selectedPlan.name} plan?
              </h1>
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <Button
                className="bg-red-500 hover:bg-red-600"
                onClick={async () => {
                  try {
                    // Call your delete API here
                    // await deleteSubscriptionPlan(selectedPlan._id);
                    console.log("Deleting plan:", selectedPlan._id);
                    dispatch(fetchSubscriptions());
                    setShowDeleteModal(false);
                  } catch (error) {
                    console.error("Failed to delete plan:", error);
                  }
                }}
              >
                Yes
              </Button>
              <Button
                className="bg-gray-400 hover:bg-gray-500"
                onClick={() => setShowDeleteModal(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingSection;
