import { Blog } from "@/types";
import Image from "next/image";
import { AiFillLike } from "react-icons/ai";
import { FaCalendar } from "react-icons/fa";

const BlogDetailsCard = ({ blog }: { blog: Blog }) => {
  return (
    <div className=" bg-white shadow-lg rounded-lg mx-auto p-6">
      <p className="flex items-center justify-center mx-auto text-teal-500 bg-teal-100 w-fit px-3 py-1 rounded-full">
        <FaCalendar className="mr-2" />
        {blog.publish_date}
      </p>
      <h2 className="text-center text-4xl font-semibold my-5">{blog.title}</h2>
      <div className="flex items-center justify-center bg-gray-100 mb-5 py-2 rounded-lg gap-2">
      <h2>Category:</h2>
        <span className="text-lg font-medium">{blog.category}</span>
      </div>
      <div className="flex gap-2 flex-col ">
      <figure className="mb-5">
        <Image
          src={blog.blog_image}
          width={600}
          height={100}
          alt="blog image"
          className="rounded-lg  object-cover"
        />
      </figure>
      <div className=" text-lg leading-relaxed">
      <h2 className="text-4xl font-semibold my-5">{blog.title}</h2>
        <p className="text-justify text-gray-700">{blog.description}</p>
      </div>
      <div className="flex justify-between items-center mt-5">
        <div className="flex items-center text-xl text-gray-600">
          <AiFillLike className="text-teal-500 mr-2" />
          <span className="mr-1">{blog.total_likes}</span>
          Likes
        </div>
      </div>
      </div>
    </div>
  );
};

export default BlogDetailsCard;
