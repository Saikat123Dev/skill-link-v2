"use client";




import { Editor } from "@/components/Editor";
import { UserInfo } from "@/components/user-info";
import { useCurrentUser } from "@/hooks/use-current-user";

const UserPage = () => {
  const user = useCurrentUser();

  return (
    <div>
      <UserInfo

        user={user}
      />
<Editor subredditId={""}/>
    </div>
  );
}

export default UserPage;