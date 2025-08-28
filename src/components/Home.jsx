// import React from 'react'


// const Home = () => {
//     const posts = [
//         { id: 1, title: "Post One", category: "Tech" },
//         { id: 2, title: "Post Two", category: "Health" },
//         { id: 3, title: "Post Three", category: "Education" },
//         { id: 4, title: "Post Four", category: "Business" },
//         { id: 5, title: "Post Five", category: "Code" },
//         { id: 6, title: "Post Six", category: "Programming" },
//         { id: 7, title: "Post Seven", category: "Eating" },
//         { id: 8, title: "Post Eight", category: "Logic" },
//         { id: 9, title: "Post Nine", category: "Operation" },
//         { id: 10, title: "Post Ten", category: "Hardwork" },
//     ];


//     function getCategoryColor(category) {
//         return category === "Tech"
//             ? "text-blue-500"
//             : category === "Health"
//                 ? "text-green-500"
//                 : category === "Education"
//                     ? "text-purple-500"
//                     : category === "Business"
//                         ? "text-red-500"
//                         : category === "Code"
//                         ? "text-yellow-500"
//                         : "text-gray-500"; // fallback
//     }



//     return (
//         <div className="space-y-3">
//             {posts.map((post) => (
//                 <div key={post.id}>
//                     <h2 className={`text-lg font-bold hover:${getCategoryColor(post.category)}`}>
//                         {post.title}
//                     </h2>
//                     <p className="text-sm text-gray-400">{post.category}</p>
//                 </div>
//             ))}
//         </div>
//     )
// }

// export default Home

// -------------------------------------------

import React from "react";

const Home = () => {
    const posts = [
        { id: 1, title: "Post One", category: "Tech" },
        { id: 2, title: "Post Two", category: "Health" },
        { id: 3, title: "Post Three", category: "Education" },
        { id: 4, title: "Post Four", category: "Business" },
        { id: 5, title: "Post Five", category: "Code" },
        { id: 5, title: "Post Five", category: "Code" },
        { id: 5, title: "Post Five", category: "Code" },
        { id: 5, title: "Post Five", category: "Code" },
    ];

    function getCategoryColor(category) {
        switch (category) {
            case "Tech":
                return "group-hover:text-blue-500";
            case "Health":
                return "group-hover:text-green-500";
            case "Education":
                return "group-hover:text-purple-500";
            case "Business":
                return "group-hover:text-red-500";
            case "Code":
                return "group-hover:text-yellow-500";
            default:
                return "group-hover:text-gray-500";
        }
    }

    return (
        <div className="space-y-3 flex gap-4 flex-wrap">
            {posts.map((post) => (
                <div key={post.id} className="p-3 border w-sm rounded-lg group cursor-pointer transition-colors duration-300">
                    <h2 className={`text-lg font-bold text-gray-700 transition-colors duration-300 ${getCategoryColor(post.category)}`}>
                        {post.title}
                    </h2>
                    <p className="text-sm text-gray-400">{post.category}</p>
                </div>
            ))}
        </div>
    );
};

export default Home;
