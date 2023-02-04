import React from "react";
import styled, { keyframes } from "styled-components";

/**
 * //TODO Here's an example of a React component that fetches data from an API and displays it along with the loader component:
 * import React, { useState, useEffect } from 'react';
import Loader from './Loader';

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;

In this example, the App component uses the useState hook to keep track of the data and loading state. The useEffect hook is used to fetch the data from the API and update the state when the data is received. The component displays a loader component while the data is being fetched, and displays the data in a list when it's available.
 */

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoaderContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

const LoaderWrapper = styled.div`
	width: 100px;
	height: 100px;
	display: inline-block;
	overflow: hidden;
	background: none;
`;

const Loader = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	transform: translateZ(0) scale(1);
	backface-visibility: hidden;
	transform-origin: 0 0;
`;

const LoaderElement = styled.div`
	box-sizing: content-box;
	left: 94px;
	top: 48px;
	animation: ${rotate} 1s cubic-bezier(0, 0.5, 0.5, 1) infinite;
	transform-origin: 48px 94px;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
	<LoaderContainer>
		<LoaderWrapper>
			<Loader>
				<LoaderElement />
			</Loader>
		</LoaderWrapper>
	</LoaderContainer>
);
