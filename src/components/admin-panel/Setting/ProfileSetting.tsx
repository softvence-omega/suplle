import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const ProfileSetting = () => {
  return (
    <div className="w-full mx-auto p-6 bg-white rounded-lg shadow-sm">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">My Profilee</h1>

      <div className="flex items-center gap-4 mb-8">
        <Avatar className="w-20 h-20">
          <AvatarImage src="/path-to-user-image.jpg" alt="Alexa Rawles" />
          <AvatarFallback>AR</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Alexa Rawles</h2>
          <p className="text-gray-600">alexarawles@gmail.com</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProfileField label="Full Name" value="Alexa" />
          <ProfileField label="Gender" value="Male" />
          <ProfileField label="Language" value="English" />
          <ProfileField
            label="My email Address"
            value="alexarawles@gmail.com"
            subtext="1 month ago"
          />
          <ProfileField label="Nick Name" value="Rawles" />
          <ProfileField label="Country" value="India" />
          <ProfileField label="Time Zone" value="(GMT+5:30)" />
        </div>

        <div className="flex justify-end mt-8">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md">
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
};

interface ProfileFieldProps {
  label: string;
  value: string;
  subtext?: string;
}

const ProfileField = ({ label, value, subtext }: ProfileFieldProps) => {
  return (
    <div className="space-y-1">
      <p className="text-sm font-medium text-gray-500">{label}</p>
      <p className="text-base font-normal text-gray-800">{value}</p>
      {subtext && <p className="text-xs text-gray-400">{subtext}</p>}
    </div>
  );
};

export default ProfileSetting;
