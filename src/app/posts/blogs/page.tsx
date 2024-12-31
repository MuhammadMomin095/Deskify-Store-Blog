import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/client";

export default async function Blogs() {
  const data = await client.fetch(`*[_type == "blog"]`);
  console.log(data);

  return (
    <div className="text-left bg-black text-white relative">
      {/* Navbar */}
      <Navbar />

      {/* Background Images */}
      <img
        src="/bg/3.jpg"
        className="w-full h-48 sm:h-64 md:h-80 lg:h-[400px] absolute top-0 left-0 object-cover opacity-50 z-0"
        alt="Background"
      />
      <img
        src="/bg/9.jpg"
        className="w-full h-48 sm:h-64 md:h-80 lg:h-[400px] absolute bottom-0 left-0 object-cover opacity-30 z-0"
        alt="Background"
      />

      {/* Main Section */}
      <section className="relative z-10 text-gray-300 text-center py-16 sm:py-24 md:py-32 lg:py-48">
        {/* Section Heading */}
        <div className="flex justify-center z-10">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase mb-6 w-full max-w-[350px] h-[87px] flex items-center justify-center bg-transparent border-4 text-white border-black"
            style={{ boxShadow: "10px 10px 20px #C1AA90" }}
          >
            Deskify Blogs
          </h2>
        </div>

        {/* Blogs Grid */}
        <div className="flex flex-wrap justify-center mt-16 sm:mt-20 gap-8 px-6 sm:px-10 lg:px-16 z-10">
          {data.map((blog: any, index: number) => (
            <div
              key={index}
              className="flex flex-col justify-start items-center gap-4 w-full max-w-[370px] bg-gradient-to-r from-[#1D1915] via-[#3A3126] to-[#1D1915] h-auto border-black border-2 rounded-lg overflow-hidden z-10"
              style={{
                boxShadow: "-20px -20px 28px #C1AA90, 20px 20px 28px #C1AA90",
              }}
            >
              {blog.image?.asset && (
                <div className="w-full aspect-square overflow-hidden">
                  <img
                    src={urlFor(blog.image).url()}
                    alt={blog.name}
                    className="w-full h-full object-cover px-3 py-3"
                  />
                </div>
              )}
              <div className="px-4 text-center">
                <p className="text-lg sm:text-xl font-bold text-white mb-2">
                  {blog.heading}
                </p>
                <p className="text-sm sm:text-md text-white leading-relaxed">
                  {blog.para}
                </p>
              </div>
              <div className="mt-4 mb-6">
                <a
                  href={blog.read}
                  className="text-blue-500 hover:text-blue-700 text-sm sm:text-md font-medium"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
