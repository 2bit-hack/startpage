import React from "react";

import linkConstants from "../../constants/linkConstants";

const QuickLinks = () => {
  return (
    <div className="inner">
      <div className="row justify-space-between">
        {Object.keys(linkConstants).map((category) => {
          return (
            <div className="col" key={category}>
              <p className="text text-md text-bold">{category}</p>
              <div className="space-y" />
              {linkConstants[category].map(({ name, url }) => {
                return (
                  <a
                    key={name}
                    className="text text-md text-link"
                    href={url}
                    target="_blank"
                  >
                    {name}
                  </a>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuickLinks;
