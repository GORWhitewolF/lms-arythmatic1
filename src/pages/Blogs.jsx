import BlogCard from "../components/Blogcard";
import cardContent from "../components/Cardcontent";

const Blogs = () => {
  return (
    <div className=" ">
      <div className="px-10 py-10 ">
        <h1 className="text-4xl font-bold mb-8">
          <span className="text-blue-600">Trending</span> Blogs
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {cardContent.map((card) => (
            <BlogCard key={card.id} {...card} />
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-8">
          <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-sm font-semibold hover:bg-blue-600 hover:text-white transition hover:cursor-pointer">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};
export default Blogs;
