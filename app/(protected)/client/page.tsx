"use client";

import { UserInfo } from "@/components/user-info";
import { useCurrentUser } from "@/hooks/use-current-user";

const UserPage = () => {
  const user = useCurrentUser();

  return ( 
    <UserInfo
    
      user={user}
    />
   );
}
 
export default UserPage;