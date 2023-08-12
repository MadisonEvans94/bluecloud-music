import React from "react";

const AppContext = React.createContext({
	currentStoreItem: null,
	setCurrentStoreItem: () => {},
});

export default AppContext;
