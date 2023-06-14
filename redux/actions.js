export const increment = () => {
    return {
      type: 'INCREMENT',
    };
  };
  
  export const addNumber = () => {
    return {
      type: 'ADD_NUMBER',
    };
  };
  
  
  
  export const deleteNumber = (index) => {
    return {
      type: 'DELETE_NUMBER',
      payload: index,
    };
  };
  