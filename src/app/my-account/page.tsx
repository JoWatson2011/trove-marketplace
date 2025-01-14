import { useContext } from "react";
import { redirect } from "next/navigation";
import MyAccount from "../../Components/ListItem";
import { UserContext } from "../../context/UserContext";

export default function Page() {
  const { userDetails } = useContext(UserContext);

  if (userDetails.username) {
    return <MyAccount />;
  } else {
    redirect("/login");
  }
}
