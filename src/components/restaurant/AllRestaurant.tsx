import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { useEffect, useState } from "react";
import { Modal } from "../ui/modal";
import RestaurantUpdateForm from "./RestaurantUpdateForm";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { fetchRestaurants, editRestaurant } from "@/store/features/restaurant/restaurantSlice";
import EyeButton from "../icons/EyeButton";
import { TfiPencilAlt } from "react-icons/tfi";
import EditButton from "../icons/EditButton";
import { toast } from "react-toastify";

type Restaurant = {
  _id: string;
  logo: string;
  restaurantName: string;
  status: string;
  phone: string;
  restaurantAddress: string;
  coverPhoto?: string;
  description?: string;
  // add other fields as needed
};

const AllRestaurant = () => {
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDetailsData, setShowDetailsData] = useState<Restaurant | null>(null);
  const [showUpdateData, setShowUpdateData] = useState<Restaurant | null>(null);

  const dispatch = useAppDispatch();
  const { restaurants, loading, error } = useAppSelector((state) => state.restaurants);

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [dispatch]);

  const handleClosePreviewModal = () => setShowPreviewModal(false);
  const handleCloseUpdateModal = () => setShowUpdateModal(false);

  const handleShowDetailsData = (restaurant:any) => {
    setShowDetailsData(restaurant);
    setShowPreviewModal(true);
  };

  const handleUpdateData = (restaurant:any) => {
    setShowUpdateData(restaurant);
    setShowUpdateModal(true);
  };

  const setShowModal = (open:any) => {
    setShowPreviewModal(open);
    setShowUpdateModal(open);
  };



  return (
    <div className="space-y-4 mt-7">
      <h1 className="font-rubik text-sm sm:text-[18px]">All Restaurants</h1>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">Error: {error}</p>
      ) : (
        <Table>
          <TableBody>
            {restaurants.map((restaurant) => (
              <TableRow key={restaurant._id}>
                <TableCell>
                  <div className="flex items-center gap-x-4">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={restaurant.logo} alt="logo" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <h1 className="text-xs sm:text-sm">{restaurant.restaurantName}</h1>
                  </div>
                </TableCell>
                <TableCell className="text-center">{restaurant.status}</TableCell>
                <TableCell className="text-center">{restaurant.phone}</TableCell>
                <TableCell className="text-center">{restaurant.restaurantAddress}</TableCell>
                <TableCell colSpan={3}>
                  <div className="flex items-center justify-end space-x-4">
                    <button
                      onClick={() => handleShowDetailsData(restaurant)}
                      className="cursor-pointer"
                    >
                      <EyeButton/>
                    </button>
                    <div className="w-[1.5px] h-[15px] bg-gray-300" />
                    <button
                      onClick={() => handleUpdateData(restaurant)}
                      className="cursor-pointer"
                    >
                      <TfiPencilAlt className="text-[#56DAAB] w-4 h-4"/>
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      <Modal
        open={showPreviewModal}
        onOpenChange={handleClosePreviewModal}
        trigger="Close"
        title="Restaurant Details"
      >
        {showDetailsData && (
          <div className="text-center space-y-4">
            <img
              src={showDetailsData.coverPhoto || showDetailsData.logo}
              alt="cover"
              className="w-24 h-24 object-cover rounded mx-auto"
            />
            <h1 className="text-green-600 text-lg font-semibold">{showDetailsData.restaurantName}</h1>
            <p>Status: {showDetailsData.status}</p>
            <p>Phone: {showDetailsData.phone}</p>
            <p>Address: {showDetailsData.restaurantAddress}</p>
            <p>Description: {showDetailsData.description}</p>
          </div>
        )}
      </Modal>

      <Modal
        open={showUpdateModal}
        onOpenChange={handleCloseUpdateModal}
        trigger={<button style={{ display: "none" }} />}
        title="Update Restaurant Info"
      >
        {showUpdateData && (
          <RestaurantUpdateForm
            initialData={
              showUpdateData
                ? {
                    name: showUpdateData.restaurantName,
                    mail: showUpdateData.phone,
                    address: showUpdateData.restaurantAddress,
                    image: showUpdateData.logo,
                  }
                : undefined
            }
          onSave={(updatedData) => {
          if (!showUpdateData?._id) return;

          dispatch(
            editRestaurant({
              id: showUpdateData._id,
              restaurantName: updatedData.name,
              phone: updatedData.mail,
              restaurantAddress: updatedData.address,
              logo: updatedData.image, // If you are uploading file, make sure it's a File object
            })
          )
            .unwrap()
            .then(() => {
              toast.success("Restaurant updated successfully");
              setShowModal(false);
            })
            .catch((err) => {
              toast.error(`Update failed: ${err}`);
            });
        }}
          />
        )}
      </Modal>
    </div>
  );
};

export default AllRestaurant;
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}

