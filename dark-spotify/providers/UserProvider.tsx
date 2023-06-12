"user client"

import { MyUserContextProvider } from "@/hooks/useUser"

interface  MyUserContextProvider {
    children: React.ReactNode;
};

const UserProvider: React.FC<UserProviderProps> = ({
    children
}) => {
    return (
        <MyUserContextProvider>
            {children}
        </MyUserContextProvider>
    )
};

export default UserProvider;