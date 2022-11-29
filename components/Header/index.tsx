import { useSession, signIn, signOut } from "next-auth/react";
import SignedInHeader from "../SignedInHeader";

const Header = () => {
  const { data: session, status } = useSession();

  const renderHeader = () => {
    // if logged in show the logged in header
    if (session) {
      return <SignedInHeader session={session} />;
    }

    return (
      <div className="flex justify-end">
        <button
          onClick={() => signIn()}
          className="border-solid border-2 ease-in px-3 py-1 rounded tracking-[1.5px] uppercase bg-black/60 transition-all cursor-pointer hover:bg-[#f9f9f9] hover:text-black hover:border-transparent"
        >
          Login
        </button>
      </div>
    );
  };
  return (
    <div className="h-[4.4rem] bg-[#090b13] flex items-center justify-between py-0 px-9 overflow-hidden z-[3] text-white">
      <img
        className="cursor-pointer w-20"
        src="https://cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original"
        alt="Disney Logo"
      />
      {renderHeader()}
    </div>
  );
};

export default Header;
