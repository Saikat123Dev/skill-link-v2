import { ExtendedUser } from "@/next-auth";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface UserInfoProps {
  user?: ExtendedUser;
  label: string;
};

export const UserInfo = ({ user, label }: UserInfoProps) => {
  return (
   
     
      <CardContent className="flex flex-col items-center space-y-4">
        <div className="rounded-full overflow-hidden border-4 border-white">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbgk0yfCOe55931lf6q0osfhGRU-fnH8Im1g&s"
            alt={user?.name}
            className="w-24 h-24 rounded-full"
          />
        </div>
        <p className="text-lg font-semibold">
          {user?.name}
        </p>
      </CardContent>
  
  );
};
