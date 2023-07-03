const user = {
    name: 'Elon',
    lastName: 'Musk',
    username: 'Tesla007'
  };
  
  function fun() {
    const clone = user;
    return clone;
  }
  
  const newObject = fun(user);

  console.log(newObject);
  