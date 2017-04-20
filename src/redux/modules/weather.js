const initialState = {
  zip: null,
  sending_request: false,
  status: ''
};

export default function findTemp(state = initialState, action = {}) {
  switch (action.type) {
    case 'Fetch_Temp_Pending':
      console.log('weather reducer')
      return {...state, status: 'pending', sending_request: true};
    case 'Fetch_Temp_Fullfilled':
      console.log('weather data')
      return {...state, sending_request: false, status: 'temp found', temp: client.get('/getweather')};
    case 'Fetch_Temp_Rejected':
      return {...state, status: 'An Error occured', sending_request: true};
    default:
      console.log("Default");
      return {...state};
  }
}