import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import AuthHandler from '@/handlers/user-auth-handler';
import {Outlet} from 'react-router-dom'; {/* This will use to load the inner components. */}

export const PublicLayouts = () => {
  return (
    <div >
      <AuthHandler /> {/* This will handle the user authentication and data storage */}
      {/* Header and Footer components can be added here */}
      {/* Header will contain the logo and profile section */}
      <Header></Header>
      <Outlet /> {/* This is where the nested routes will be rendered */}
      <Footer></Footer>

    </div>
   
  );
}   