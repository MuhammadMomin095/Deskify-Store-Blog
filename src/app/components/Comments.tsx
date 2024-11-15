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
    <div>
      {/* Comments Section */}
      <section className="comments mt-96 bg-gradient-to-r from-[#E5E7EB] to-[#F3F4F6] py-12 hover:shadow-xl shadow-lg hover:scale-105 transition-all duration-300">
        <div className="container mx-auto max-w-2xl p-6">
          <h2 className="text-5xl font-semibold text-shadow-lg text-center mb-6 text-black" style={{ textShadow: '1px 1px 3px rgba(0, 255, 255, 0.5), -1px -1px 3px rgba(255, 255, 0, 0.5)' }}
>User Comments</h2>
          <p className="text-center text-lg text-gray-600 mb-8">Feel free to share your thoughts, questions, or feedback below!</p>

          {/* Featured Comment */}
          <div className="featured-comment bg-yellow-100 p-6 rounded-lg mb-8 shadow-lg">
            <h4 className="font-semibold text-xl text-black">Featured Comment:</h4>
            <p className="text-lg mt-2">"I absolutely love the products from Craftiverse! They are not only beautiful but also sustainable, which is a huge plus for me!" - Jessica W.</p>
          </div>

          {/* Comment Input */}
          <div className="flex flex-col gap-4">
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add a comment"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring focus:ring-pink-200 transition-all duration-300 hover:border-[#9333EA] bg-white"
            />
            <button
              onClick={handleAddComment}
              className="w-full bg-[#9333EA] text-white px-4 py-3 rounded-lg animate-bounce hover:bg-[#8B5CF6] transition-all duration-300 transform hover:scale-105"
            >
              Add Comment
            </button>
          </div>

          {/* Comment Sorting */}
          <div className="comment-sorting mt-6 text-center">
            <label className="mr-4 text-lg">Sort by:</label>
            <select className="bg-white border border-gray-300 p-2 rounded-md">
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="liked">Most Liked</option>
            </select>
          </div>

          {/* Display Comments */}
          <div className="comments-list mt-8 space-y-6">
            {comments.length > 0 ? (
              comments.map((comment, index) => (
                <div key={index} className="comment bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-gray-300 mr-4"></div> {/* Placeholder avatar */}
                    <div className="font-semibold text-black">{comment.user}</div>
                    <span className="ml-auto text-sm text-gray-500">{comment.time}</span>
                  </div>
                  <p>{comment.text}</p>
                  <div className="comment-actions mt-4 flex gap-4">
                    <button className="text-[#9333EA] hover:text-[#8B5CF6]">Like</button>
                    <button className="text-[#9333EA] hover:text-[#8B5CF6]">Dislike</button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No comments yet. Be the first to comment!</p>
            )}
          </div>

          {/* Call to Action */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">Help us improve. Share your thoughts and feedback!</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Comments;
