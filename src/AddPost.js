// import React, { useState } from 'react';

// const AddPost = () => {
//   const [title, setTitle] = useState('');

//   const handlePost = async () => {
//     try {
//       const response = await fetch('http://localhost:3001/posts', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ title }),
//       });

//       if (response.ok) {
//         // Post added successfully
//         console.log('Post added');
//       } else {
//         // Handle error if needed
//         console.error('Failed to add post');
//       }
//     } catch (error) {
//       console.error('Error adding post:', error);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter post title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <button onClick={handlePost}>Add Post</button>
//     </div>
//   );
// };

// export default AddPost;