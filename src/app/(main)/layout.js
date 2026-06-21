import NavBarApp from "@/components/NavBarApp";

export default function MainLayout({ children }) {
  return (
    <>
      <NavBarApp />
      {children}
    </>
  );
}
