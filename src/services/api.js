export const getTodo = () => {
  return fetch(`https://bp01d5t307.execute-api.us-east-1.amazonaws.com/dev/todo`, {
      method: 'GET'
  })
  .then(res=>res.json())
}

export const addTodo = (obj) => {
  return fetch(`https://bp01d5t307.execute-api.us-east-1.amazonaws.com/dev/todo`, {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj)    
  })
  .then(res=>res.json())
}