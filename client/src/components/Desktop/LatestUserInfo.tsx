import { User } from "../../commonTypes";
import { useEffect, useRef, useState } from "react";
import UserModal from "../Mobile/userModal/UserModal";
import none from "../../assets/none_profile.jpg";
interface LatestUserInfoProps {
  user: User;
  onAddUser: (user: User) => void;
  setIsUserAdded: React.Dispatch<React.SetStateAction<boolean>>;
}
const LatestUserInfo: React.FC<LatestUserInfoProps> = ({
  user,
  onAddUser,
  setIsUserAdded,
}) => {
  console.log("모스트", user.MostChamp);
  const [userModal, setUserModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setUserModal(false); // 모달 닫기
      }
    };

    if (userModal) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [userModal]);
  return (
    <div
      className="font-blackHanSans flex flex-row items-center h-[55px] mx-2 my-1 gap-2 relative justify-center"
      onClick={() => {
        setUserModal(true);
      }}
    >
      <img
        src={`${user.profileInfo?.Profile_img || none}`}
        alt="most-champ-info"
        className="w-[20px] h-[20px]"
      />
      <div className="flex flex-col">
        <div className="text-[10px] text-white">
          {user.tierScore.Rank}
          {user.tierScore.tier}
        </div>
        <p className="max-w-[115px] min-w-[115px] text-[12px] text-ellipsis overflow-hidden text-white text-nowrap">
          {user.gameName} {user.tagLine}
        </p>
      </div>
      <p className="min-w-[66px] text-[13px] text-nowrap text-white">
        승률 {user.winRate}%
      </p>
      <button
        onClick={() => onAddUser(user)}
        className="w-[10px] bg-inherit text-white"
      >
        +
      </button>
      {userModal && (
        <div ref={modalRef} className="absolute top-0 left-0 z-10">
          <UserModal
            user={user}
            setUserModal={setUserModal}
            setIsUserAdded={setIsUserAdded}
          />
        </div>
      )}
    </div>
  );
};

export default LatestUserInfo;