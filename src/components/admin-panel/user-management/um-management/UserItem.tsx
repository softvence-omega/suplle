// UserItem.tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Eye, SquarePen } from "lucide-react";
import type { User } from "./user";

interface UserItemProps {
  users: User[];
  onClick: (userId: string) => void;
}

const UserItem: React.FC<UserItemProps> = ({ users, onClick }) => {
  return (
    <Table>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>
              <div className="flex items-center gap-x-4">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={user.image} alt={user.name} />
                  <AvatarFallback>
                    {user.name?.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <h1 className="text-xs sm:text-sm">{user.name}</h1>
              </div>
            </TableCell>
            <TableCell>{user.mail}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{user.status}</TableCell>
            <TableCell>
              <div className="flex justify-end items-end space-x-4 text-[#36BDA1] w-full">
                <Eye
                  className="w-6 h-6 cursor-pointer"
                  onClick={() => onClick(user.id)}
                />
                <div className="w-[18.81px] border border-[#B6B6B6] rotate-[-90deg]" />
                <SquarePen className="w-6 h-6 cursor-pointer" />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UserItem;
