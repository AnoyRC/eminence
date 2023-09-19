import Logo from '@/components/ui/Logo';
import LaunchApp from './LaunchApp';

const NavBar = () => {
  return (
    <nav className="flex justify-between pt-6">
      <Logo />
      <LaunchApp />
    </nav>
  );
};

export default NavBar;
