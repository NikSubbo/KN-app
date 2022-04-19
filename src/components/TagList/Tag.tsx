import { FC } from 'react';

type Props = {
  name: string;
};

export const Tag: FC<Props> = ({ name }) => {
  return (
    <div className="text-xs font-medium text-aqua px-2 py-1 rounded bg-aquaLight mr-2 mt-2">
      {name}
    </div>
  );
};

export default Tag;
