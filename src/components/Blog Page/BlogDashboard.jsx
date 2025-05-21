import Header from "../Header";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer";
import BlogCard from "./BlogCard";

const blogData = [
  {
    title: "Working Remotely: Boosting Productivity from Home",
    category: "Technology",
    image:
      "https://img.freepik.com/free-photo/aerial-view-man-using-computer-laptop-wooden-table_53876-20657.jpg?ga=GA1.1.1213500636.1747635848&semt=ais_hybrid&w=740",
  },
  {
    title: "The Power of Blogging in the Digital Era",
    category: "Digital Marketing",
    image:
      "https://img.freepik.com/premium-vector/blog-vector-illustration_1237743-80602.jpg?ga=GA1.1.1213500636.1747635848&semt=ais_hybrid&w=740",
  },
  {
    title: "Starting Your First Blog: Tips for Beginners",
    category: "Blogging",
    image:
      "https://img.freepik.com/free-photo/online-blog_53876-123696.jpg?ga=GA1.1.1213500636.1747635848&semt=ais_hybrid&w=740",
  },
  {
    title: "Why Every Business Needs a Blog",
    category: "Business",
    image:
      "https://img.freepik.com/premium-photo/notebook-with-blog-word-computer-desk_104165-19.jpg?ga=GA1.1.1213500636.1747635848&semt=ais_hybrid&w=740",
  },
  {
    title: "Designing an Effective Workspace",
    category: "Lifestyle",
    image:
      "https://img.freepik.com/free-photo/flat-lay-workstation-with-copy-space-laptop_23-2148430879.jpg?ga=GA1.1.1213500636.1747635848&semt=ais_hybrid&w=740",
  },
  {
    title: "Fitness Goals: Working Out as a Couple",
    category: "Health & Fitness",
    image:
      "https://img.freepik.com/free-photo/medium-shot-fit-couple-outdoors_23-2150445047.jpg?ga=GA1.1.1213500636.1747635848&semt=ais_hybrid&w=740",
  },
  {
    title: "Hiking Adventures: Reaching New Heights",
    category: "Travel",
    image:
      "https://img.freepik.com/free-photo/rear-view-back-young-asian-hiking-man-standing-riseup-hands-with-happy-peak-rocky-mountain-copy-space_1150-57186.jpg?ga=GA1.1.1213500636.1747635848&semt=ais_hybrid&w=740",
  },
  {
    title: "Discover Thailand's Hidden Gems",
    category: "Travel",
    image:
      "https://img.freepik.com/free-photo/tourist-sitting-phu-sub-lek-viewpoint-sunset-lopburi-thailand_335224-1390.jpg?ga=GA1.1.1213500636.1747635848&semt=ais_hybrid&w=740",
  },
];

export default function BlogDashboard() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <Navbar />
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-teal-700">
          Explore Our Latest Blogs
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {blogData.map((blog, index) => (
            <BlogCard
              key={index}
              title={blog.title}
              category={blog.category}
              image={blog.image}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
