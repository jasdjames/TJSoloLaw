import { Outlet } from 'react-router';
import { Header, Footer } from '../components';

export const Main = (props) => {
  return (
    <>
      <div>
        <div>
          <Header />
        </div>

        <div>
          <Outlet />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};
