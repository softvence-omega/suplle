
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import type { User } from "@/pages/Dashboard/user/UserViewForOwner";



interface UserTableProps {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
}

const UserTable = ({ users, onEdit, onDelete }: UserTableProps) => {
  return (
    <Table className="mt-4">
      <TableHeader>
        <TableRow className="text-center">
          <TableHead>Sl.</TableHead>
          <TableHead>User Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead className="text-center">Status</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user, i) => (
          <TableRow key={user.id}>
            <TableCell>{i + 1}</TableCell>
            <TableCell>{user.userName}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell className="text-center">
              <span
                className={cn(
                  "capitalize",
                  "text-center",
                  "p-2",
                  "my-2",
                  "w-10",
                  "rounded",
                  user.status === "Active" ? "bg-[#E3FBEE]" : "bg-[#FFE4E4]",
                  user.status === "Active" ? "text-[#4ADE80]" : "text-[#F04438]"
                )}
              >
                {user.status}
              </span>
            </TableCell>
            <TableCell className="text-right">
              <button className="pr-2 border-r-2 border-[#B6B6B6] cursor-pointer " onClick={() => onEdit(user)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="url(#paint0_linear_904_407)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="url(#paint1_linear_904_407)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <defs>
                    <linearGradient id="paint0_linear_904_407" x1="12" y1="0.209106" x2="13.1547" y2="22.4486" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#56DAAB" />
                      <stop offset="1" stop-color="#0F9996" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_904_407" x1="12" y1="0.209106" x2="13.1547" y2="22.4486" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#56DAAB" />
                      <stop offset="1" stop-color="#0F9996" />
                    </linearGradient>
                  </defs>
                </svg>
              </button>
              <button className="cursor-pointer pl-2" onClick={() => onDelete(user)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5.616 20.0005C5.15533 20.0005 4.771 19.8465 4.463 19.5385C4.155 19.2305 4.00067 18.8458 4 18.3845V5.61645C4 5.15579 4.15433 4.77145 4.463 4.46345C4.77167 4.15545 5.156 4.00112 5.616 4.00045H14.002L13.002 5.00045H5.616C5.462 5.00045 5.32067 5.06445 5.192 5.19245C5.06333 5.32045 4.99933 5.46179 5 5.61645V18.3855C5 18.5388 5.064 18.6798 5.192 18.8085C5.32 18.9371 5.461 19.0011 5.615 19.0005H18.385C18.5383 19.0005 18.6793 18.9365 18.808 18.8085C18.9367 18.6805 19.0007 18.5395 19 18.3855V10.8965L20 9.89645V18.3855C20 18.8455 19.846 19.2298 19.538 19.5385C19.23 19.8471 18.8453 20.0011 18.384 20.0005H5.616ZM10 14.0005V11.3855L18.944 2.44145C19.0547 2.33079 19.1707 2.25412 19.292 2.21145C19.4133 2.16879 19.5417 2.14779 19.677 2.14845C19.803 2.14845 19.9257 2.16979 20.045 2.21245C20.1643 2.25512 20.273 2.32512 20.371 2.42245L21.483 3.50045C21.5897 3.61112 21.6703 3.73279 21.725 3.86545C21.7797 3.99812 21.8073 4.13145 21.808 4.26545C21.8087 4.39945 21.7883 4.52679 21.747 4.64745C21.707 4.76745 21.6317 4.88245 21.521 4.99245L12.52 14.0005H10ZM11 13.0005H12.092L18.758 6.33445L18.212 5.78845L17.602 5.20445L11 11.8065V13.0005Z" fill="url(#paint0_linear_904_409)" />
                  <defs>
                    <linearGradient id="paint0_linear_904_409" x1="12.904" y1="-2.08126" x2="14.6756" y2="22.6726" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#56DAAB" />
                      <stop offset="1" stop-color="#0F9996" />
                    </linearGradient>
                  </defs>
                </svg>
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UserTable; 