import { Link } from 'react-router-dom';
import { PATH } from 'routes/path';

export default function NotFound() {
  return (
    <section className="font-primary flex items-center h-screen dark:bg-gray-900 dark:text-gray-100">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <p className="mt-4 mb-8 dark:text-gray-400">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link
            to={PATH.app.dashboard}
            className="px-8 py-3 font-semibold rounded bg-teal-500 text-gray-100"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
