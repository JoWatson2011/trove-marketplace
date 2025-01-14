import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import ListItem from "../../Components/ListItem";
import { redirect } from "next/navigation";

export default function Page() {
  const { userDetails } = useContext(UserContext);

  if (userDetails.username) {
    return <ListItem />;
  } else {
    redirect("/login");
  }
}
