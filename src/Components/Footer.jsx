import GitHubIcon from "@mui/icons-material/GitHub";
import { Divider } from "@mui/material";
function Footer() {
  return (
    <div className="relative bottom-0 flex flex-col align-center mt-[20px] w-full bg-white">
      <Divider />
      <p className="text-slate-500">
        This website was built by Jo Watson as a portfolio project.{" "}
        <a
          href="https://github.com/JoWatson2011/trove-marketplace"
          className="underline hover:text-black"
        >
          Source code here
          <GitHubIcon className="mx-1" />
        </a>
      </p>
    </div>
  );
}
export default Footer;
