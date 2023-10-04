/* eslint-disable react/prop-types */
import Header from "../components/Header";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
