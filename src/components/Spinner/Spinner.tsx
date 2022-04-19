import { FC } from 'react';

export const Spinner: FC = () => (
  <div
    className="min-h-screen flex justify-center items-center"
    data-testid="spinner"
  >
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-aqua"></div>
  </div>
);

export default Spinner;
