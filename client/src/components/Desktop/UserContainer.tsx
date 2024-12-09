import React from "react";
import { User } from "../../commonTypes";
import PlusIcon from "../../assets/svg/add.svg";

interface UserContainerProps {
  allUser: User[];
  onAddUser: (userId: number) => void;
  setAllUser: React.Dispatch<React.SetStateAction<User[]>>;
  setRedTeam: React.Dispatch<React.SetStateAction<User[]>>;
  setBlueTeam: React.Dispatch<React.SetStateAction<User[]>>;
}

const UserContainer: React.FC<UserContainerProps> = ({
  allUser,
  onAddUser,
}) => {
  return (
    <div>
      <div className="w-[100%] h-[70vh] overflow-auto bg-[#F0E6D2] border border-solid border-[#C89B3C] rounded-2xl bg-[#F0E6D2] bg-opacity-30 p-4">
        <div className="ml-3 mb-5 mt-3">최근에 같이한 친구</div>
        <ul>
          {allUser.map((user) => (
            <li key={user.id} className="mb-2">
              <div className="flex gap-[5px] justify-center">
                <span className="font-bold">{user.nickname}</span>
                <span>{user.winRate}%</span>
                <img
                  src={PlusIcon}
                  alt="Add"
                  className="cursor-pointer w-6 h-6"
                  onClick={() => onAddUser(user.id)}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserContainer;
