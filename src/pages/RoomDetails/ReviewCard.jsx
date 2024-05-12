import { FaStar } from "react-icons/fa";
import demoUserPic from "../../assets/demoUser.png";

// eslint-disable-next-line react/prop-types
const ReviewCard = ({item}) => {
      // eslint-disable-next-line react/prop-types
      const {userName,userRating,userComment,timestamp} = item;
    return (
        <div className="container flex flex-col w-full  p-6  divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
	<div className="flex justify-between p-4">
		<div className="flex space-x-4">
			<div>
				<img src={demoUserPic} className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
			</div>
			<div>
				<h4 className="font-bold">{userName}</h4>
				<span className="text-xs dark:text-gray-600">{new Date(timestamp).toLocaleDateString()} {new Date(timestamp).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: true})}</span>
			</div>
		</div>
		<div className="flex items-center space-x-2 dark:text-yellow-700">
			<span><FaStar /></span>
			<span className="text-xl font-bold">{userRating}</span>
		</div>
	</div>
	<div className="p-4 space-y-2 text-sm dark:text-gray-600">
		<p>{userComment}</p>
	</div>
</div>
    );
};

export default ReviewCard;