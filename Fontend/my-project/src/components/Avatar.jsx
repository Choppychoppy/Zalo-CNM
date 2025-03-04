import React from 'react';

const Avatar = ({ user }) => {
  return (
    <div className='relative'>
      <div
        className='
          relative 
          inline-block
          rounded-full
          overflow-hidden
          h-9
          w-9
          md:h-11
          md:w-11
        '
      >
        <img
          alt='user'
          src={user?.image || '/images/user.svg'}
          className='object-cover w-full h-full'
        />
      </div>

      <span
        className='
          absolute
          block
          rounded-full
          bg-green-500
          ring-2
          ring-white
          top-0
          right-0
          h-2
          w-2
          md:h-3
          md:w-3
        '
      ></span>
    </div>
  );
};

export default Avatar;
