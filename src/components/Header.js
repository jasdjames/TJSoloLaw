import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className=" text-center m-4 text-gray-400 bg-gray-900 body-font">
      {' '}
      <div className="">
        <h1 className="m-3 p-4 text-center text-8xl">
          {' '}
          T.J. Solomon Law Group, PLLC
        </h1>{' '}
      </div>
      <div className="min-w-full">
        <Link
          to="/"
          className="transform hover:scale-300 hover:bg-purple-700 hover:text-white"
        >
          <span>Home</span>
        </Link>
        <Link
          to="/TaskPage"
          className="transform hover:scale-300 hover:bg-purple-700 hover:text-white"
        >
          <span> | Task Page</span>
        </Link>

        <div className="transform hover:scale-300 hover:bg-purple-700 hover:text-white">
          {' '}
        </div>
        <div className="transform hover:scale-300 hover:bg-purple-700 hover:text-white"></div>
      </div>
    </header>
  );
};
