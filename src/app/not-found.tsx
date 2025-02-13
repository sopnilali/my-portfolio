import Image from "next/image";

export const metadata = {
  title: "Page Not Found | MD Abdul Adud Portfolio",
  description: "Oops! The page you're looking for doesn't exist. Please make sure the URL is correct."
}
const NotFoundPage = () => {
  return (
    <div className="w-[90%] mx-auto my-5 ">
      <Image
        src="https://freefrontend.com/assets/img/html-css-404-page-templates/Pure-CSS-404-Error-Page.gif"
        width={1000}
        height={500}
        alt="not found page!"
        className="w-full rounded-3xl"
      />
    </div>
  );
};

export default NotFoundPage;
