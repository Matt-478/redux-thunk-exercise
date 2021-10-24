export const INCREMENT = 'INCREMENT'

export const incrementAction = () => ({
  type: INCREMENT,
})

export const fetchAction = (url) => {
  return async(dispatch) => {
    try {
      let resp = await fetch(url, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log(resp)
      if(resp.ok) {
        const data = await resp.json()
        console.log(data)
        dispatch({
          type: "FETCH_MOVIES",
          payload: data,
        })
        console.log(data[0].question)
      } else {
        return (console.log("some error happened"))
      }
    } catch (error) {
      console.log(error)
    }
  }
}