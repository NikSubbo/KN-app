import { FC } from 'react';
import cx from 'classnames';

type Props = {
  number: number;
  label: string;
};

export const NavPanelButton: FC<Props> = ({ number, label }) => {
  const isHighlighted =
    number === 1 ? 'text-aqua' : 'text-gray cursor-not-allowed';

  return (
    <button
      className={cx(
        'pt-4 pb-3 px-6 text-sm font-medium text-aqua border-b-2',
        isHighlighted
      )}
    >
      {number} {label}
    </button>
  );
};

export default NavPanelButton;
