import { createContext, useState, useCallback, useEffect } from 'react';

export const CreatePostContext = createContext({});

const CreatePostProvider = ({ children, ...routerProps }) => {
  const [postDetails, setPostDetails] = useState({
    title: '',
    price: 0,
    address: '',
    images: [],
  });
  useEffect(() => {
    const postDetailsLocalStorage = localStorage.getItem('postDetails');
    if (!postDetailsLocalStorage) {
      return;
    }
    setPostDetails(JSON.parse(postDetailsLocalStorage));
  }, []);

  const handleOnInputsChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    setPostDetails({ ...postDetails, [name]: value });
    localStorage.setItem('postDetails', JSON.stringify(postDetails));
  };

  const [currentComponent, setCurrentComponent] = useState('SelectPlan');

  return (
    <CreatePostContext.Provider
      value={{
        routerProps,
        postDetails,
        currentComponent,
        setPostDetails,
        setCurrentComponent,
        handleOnInputsChange,
      }}
    >
      {children}
    </CreatePostContext.Provider>
  );
};

export default CreatePostProvider;
