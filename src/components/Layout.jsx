import Sidebar from './layout/Sidebar';
import PageContent from './layout/PageContent';
import Footer from './layout/Footer';
import MobileNav from './layout/MobileNav';

function Layout() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="w-[150px] hidden sm:block bg-[#191718]">
        <Sidebar />
      </div>

      <div className="flex flex-col flex-1">
        <div className="flex flex-1 items-center flex-col">
          <div className="block sm:hidden w-full h-[55px] bg-black fixed top-0 left-0">
            <MobileNav />
          </div>
          <PageContent />
        </div>
        <div className="h-[80px]">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;
