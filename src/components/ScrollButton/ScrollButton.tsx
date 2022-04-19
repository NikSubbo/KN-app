import { FC, useState } from 'react';
import cx from 'classnames';
import { ReactComponent as ArrowIcon } from '../../assets/arrow.svg';

export const ScrollButton: FC = () => {
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <button
      onClick={scrollToTop}
      className={cx(
        'fixed bottom-6 left-1/2 -translate-x-1/2',
        visible ? 'inline' : 'hidden'
      )}
    >
      <ArrowIcon className="bg-red" />
    </button>
  );
};

export default ScrollButton;
