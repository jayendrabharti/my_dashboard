// "use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import SignOutButton from "./SignOutButton";
import { User } from "@supabase/supabase-js";

export default function UserButton({ user }: { user: User }) {
  // const supabase = createSupabaseClient();
  // const [user, setUser] = useState<User | null>(null);

  // useEffect(() => {
  //   const get = async () => {
  //     const { data } = await supabase.auth.getUser();
  //     setUser(data.user);
  //   };
  //   get();
  // }, [supabase.auth]);

  const initials = user?.user_metadata.name
    .split(" ")
    .map((name: string) => name.charAt(0).toUpperCase());

  if (user)
    return (
      <div className={cn("flex items-center")}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer">
              <AvatarImage src={user?.user_metadata.avatar_url} />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <div className="px-3 py-2">
              <span className="block font-medium text-sm text-gray-900 dark:text-gray-100">
                {user?.user_metadata.name}
              </span>
              <span className="block text-xs text-gray-500 dark:text-gray-400">
                {user?.email}
              </span>
            </div>
            <DropdownMenuSeparator />
            <div className="flex flex-col gap-2 p-1">
              <SignOutButton className="mx-auto w-full flex items-center justify-start" />
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
}
