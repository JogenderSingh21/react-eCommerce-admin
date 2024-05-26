import React, { ReactNode } from 'react';

interface CardDataStatsProps {
  title: string;
  total: string;
  rate: string;
  levelUp?: boolean;
  levelDown?: boolean;
  bg: string;
  children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  total,
  rate,
  levelUp,
  levelDown,
  bg,
  children,
}) => {
  return (
    <div className="rounded-2xl border border-stroke bg-white py-4 px-5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <span className="font-semibold">{title}</span>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className={`flex h-9 w-9 items-center justify-center rounded-xl bg-${bg}-400 dark:bg-meta-4`}
          >
            {children}
          </div>
          <h4 className="text-title-sm font-extrabold text-black dark:text-white">
            {total}
          </h4>
        </div>

        <span
          className={`flex items-center gap-1 font-medium ${
            levelUp && 'text-meta-3'
          } ${levelDown && 'text-red-500'} `}
        >
          {rate}

          {levelUp && (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              data-name="Flat Line"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21,7l-6.79,6.79a1,1,0,0,1-1.42,0l-2.58-2.58a1,1,0,0,0-1.42,0L3,17"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                stroke="currentColor"
                fill="none"
              ></path>
              <polyline
                points="21 11 21 7 17 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                stroke="currentColor"
                fill="none"
              ></polyline>
            </svg>
          )}
          {levelDown && (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3,7l5.79,5.79a1,1,0,0,0,1.42,0l2.58-2.58a1,1,0,0,1,1.42,0L21,17"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                stroke="currentColor"
                fill="none"
              ></path>
              <polyline
                points="17 17 21 17 21 13"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                stroke="currentColor"
                fill="none"
              ></polyline>
            </svg>
          )}
        </span>
      </div>
      <div className="flex justify-end mt-1">
        <span className="text-xs font-medium text-slate-400">
          Compared to Jan 2022
        </span>
      </div>
    </div>
  );
};

export default CardDataStats;
