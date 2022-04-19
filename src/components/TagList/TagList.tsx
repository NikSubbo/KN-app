import { FC } from 'react';
import cx from 'classnames';
import Tag from './Tag';

export type Props = {
  tags: string[];
  className?: string;
};

export const TagList: FC<Props> = ({ tags, className }) => {
  if (!tags.length) return null;

  return (
    <div className={cx(className, 'flex flex-wrap')}>
      {tags.map((el) => (
        <Tag key={el} name={el} />
      ))}
    </div>
  );
};

export default TagList;
