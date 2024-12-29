import React, { useState } from 'react';

const Comments = () => {
  const [comment, setComment] = useState<string>('');
  const [comments, setComments] = useState<{ text: string; user: string; time: string }[]>([]);

  const handleAddComment = () => {
    if (comment.trim()) {
      const newComment = {
        text: comment,
        user: 'Anonymous', // Placeholder for user name
        time: new Date().toLocaleString(), // Adding timestamp
      };
      setComments((prevComments) => [...prevComments, newComment]);
      setComment('');
    }
  };

  return (
    <div className="text-left bg-black text-white relative py-24 px-16">
      {/* Background Image */}
      <div
        className="absolute top-0 z-index left-0 w-full h-full bg-cover bg-center opacity-40"
        style={{ backgroundImage: 'url("images/20.jpg")' }}
      ></div>

      {/* Comments Section */}
      <section className="comments relative z-10">
        <div className="container mx-auto max-w-2xl p-6 relative z-10">
        <div className="flex justify-center relative z-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase mb-4 w-[400px] h-[87px] justify-center flex items-center bg-transparent border-4 text-white border-black" style={{ boxShadow: "10px 10px 20px #C1AA90" }}>User Comments</h2>
            </div>
          <p className="text-center text-lg text-gray-100 mb-8 mt-16 relative z-10">Feel free to share your thoughts, questions, or feedback below!</p>

          {/* Featured Comment */}
          <div className="featured-comment bg-yellow-100 p-6 rounded-lg mb-8 shadow-lg">
            <h4 className="font-semibold text-xl text-black">Featured Comment:</h4>
            <p className="text-lg mt-2 text-gray-900">"I absolutely love the products from Craftiverse! They are not only beautiful but also sustainable, which is a huge plus for me!" - Jessica W.</p>
          </div>

          {/* Comment Input */}
          <div className="flex flex-col gap-4">
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add a comment"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring text-black focus:ring-pink-200 transition-all duration-300 hover:border-[#9333EA] bg-white"
            />
            <button
              onClick={handleAddComment}
              className="w-full bg-[#9333EA] text-white px-4 py-3 rounded-lg animate-bounce hover:bg-[#8B5CF6] transition-all duration-300 transform hover:scale-105"
            >
              Add Comment
            </button>
          </div>

          {/* Comment Sorting */}
          <div className="comment-sorting mt-6 text-center relative z-10">
            <label className="mr-4 text-lg relative z-10">Sort by:</label>
            <select className="relative z-10 bg-white text-black border border-gray-300 p-2 rounded-md">
              <option value="relative z-10 newest">Newest First</option>
              <option value="relative z-10 oldest">Oldest First</option>
              <option value=" relative z-10 liked">Most Liked</option>
            </select>
          </div>

          {/* Display Comments */}
          <div className="comments-list mt-8 space-y-6 relative z-10">
            {comments.length > 0 ? (
              comments.map((comment, index) => (
                <div key={index} className=" relative z-10 comment bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-3 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-gray-300 mr-4 relative z-10"></div> {/* Placeholder avatar */}
                    <div className="font-semibold text-black relative z-10">{comment.user}</div>
                    <span className="ml-auto text-sm text-gray-900 relative z-10">{comment.time}</span>
                  </div>
                  <p>{comment.text}</p>
                  <div className="relative z-10 comment-actions mt-4 flex gap-4">
                    <button className="text-[#9333EA] hover:text-[#8B5CF6] relative z-10">Like</button>
                    <button className="text-[#9333EA] hover:text-[#8B5CF6] relative z-10">Dislike</button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-200 relative z-10">No comments yet. Be the first to comment!</p>
            )}
          </div>

          {/* Call to Action */}
          <div className="mt-8 text-center relative z-10">
            <p className="text-gray-200 relative z-10">Help us improve. Share your thoughts and feedback!</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Comments;
