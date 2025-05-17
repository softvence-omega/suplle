import ReusableTitle from "./Shared/ReuseabaleTitle";
import ReuseabaleUserTable from "./Shared/ReuseabaleUserTable";
const UserStaff = () => {
  return (
    <div className="space-y-4 mt-7">
      <ReusableTitle text="All Users"></ReusableTitle>

      <div>
        {" "}
        <ReuseabaleUserTable />
      </div>
    </div>
  );
};

export default UserStaff;
