import React from 'react';

const Bar = ({ color, name, percent, current }: { color: string, name: string, current: string, percent: number }) => {
    return (
        <div className="flex justify-between items-center w-80">
            {name !== "" ? (
                <span className="text-base font-medium text-blue-700 dark:text-white">{name}</span>
            ) : null}

            <div className="w-60 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${percent}%` }}></div>
            </div>
            <span className={`text-sm font-medium text-${color}-700 dark:text-white`}>{current}</span>
        </div>
    );
}

export default Bar;
