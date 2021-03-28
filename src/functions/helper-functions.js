import axios from 'axios'

const config = {
  headers: {
    "Accept": "application/json",
    "Content-Type": 'application/json'
  }
}
export const post_to_api =  async (url, data) => {
    const stringified = JSON.stringify(data)
    const response = await axios.post(url, stringified, config);
    const response_data = response.data;

    return response_data;
}

export const get_from_api = async (url) => {
  const response = await axios.get(url);
  const response_data = response.data;
  
  return  response_data; 
}


export const update_to_api = async(url, data) => {
  const stringified = JSON.stringify(data)
  const response = await axios.put(url,stringified, config)
  const response_data = response.data

  return response_data
}

export const delete_to_api = async(url, id) => {
  const response = await axios.delete(url + id);
  const response_data = response.data;

  return response_data;
}

export const convertImageToText = (imageObj, func) => {
    const reader = new FileReader();
    reader.readAsDataURL(imageObj);
    
    reader.onloadend = function () {
     func(reader.result)    
    }
}