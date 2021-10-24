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
        console.log(data.body)
        dispatch({
          type: "FETCH_MOVIES",
          payload: data,
        })
      } else {
        return (console.log("some error happened"))
      }
    } catch (error) {
      console.log(error)
    }
  }
}