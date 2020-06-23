function getData(data: any) {
  return Promise.resolve(data);
}

function updateData(data: any) {
  return Promise.resolve(data);
}

const API = {
  getData,
  updateData,
};

export default API;
