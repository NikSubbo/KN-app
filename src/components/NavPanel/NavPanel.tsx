import { FC } from 'react';
import NavPanelButton from './NavPanelButton';

export const NavPanel: FC = () => {
  const btnLabeles = ['Product', 'Addressess', 'Overview'];

  return (
    <div className="mt-9 mb-6">
      {btnLabeles.map((el, i) => {
        return <NavPanelButton key={el} number={i + 1} label={el} />;
      })}
    </div>
  );
};

export default NavPanel;
