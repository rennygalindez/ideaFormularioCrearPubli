import { createContext, useState, useCallback } from 'react';

export const CreatePostContext = createContext({});

const CreatePostProvider = ({ children, ...routerProps }) => {
  const [postDetails, setPostDetails] = useState({
    title: '',
    price: 0,
    address: '',
    images: [],
  });
  const handleOnInputsChange = useCallback(
    (event) => {
      const { target } = event;
      const { name, value } = target;
      setPostDetails({ ...postDetails, [name]: value });
    },
    [postDetails]
  );

  const [currentComponent, setCurrentComponent] = useState('SelectPlan');

  return (
    <CreatePostContext.Provider
      value={{
        routerProps,
        postDetails,
        setPostDetails,
        currentComponent,
        setCurrentComponent,
        handleOnInputsChange,
      }}
    >
      {children}
    </CreatePostContext.Provider>
  );
};

export default CreatePostProvider;
