import React from "react";
import PropTypes from "prop-types";

import Result from "./result";
import { getRandomStory } from "../../utils/util";

const Results = (props) => {
  return (
    <div className="expand-collapse-component-container search-results-listings">
      <div className="expand-collapse-component-section">
        {props.results &&
          props.results.map((result, key) => {
            let story = getRandomStory(5, 1);
            let { url, searchImage, ...rest } = result;
            return (
              <Result
                item={{
                  ...rest,
                  url: `${story}.html`,
                  searchImage: `assets/images/${story}.jpg`,
                }}
                key={key}
                query={props.query}
                shouldShowImage={props.displayImages}
              />
            );
          })}
      </div>
    </div>
  );
};

Results.propTypes = {
  displayImages: PropTypes.bool,
  query: PropTypes.string,
  results: PropTypes.array,
};

export default Results;
