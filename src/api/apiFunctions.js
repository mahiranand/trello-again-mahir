import axios from "axios";

const yourKey = "e329af9483b37135d074e667f5f48020";
const yourToken =
  "ATTA7b429b51abd4c5a77e17cc2148635edce084bc45b889d6a7c21bbadaea2709fc28232EFF";

const baseUrl = "https://api.trello.com/1";

export const get = (pathParamUrl, setData, setGetData) => {
  axios
    .get(`${baseUrl}/${pathParamUrl}?key=${yourKey}&token=${yourToken}`)
    .then((res) => {
      setData(res.data);
      setGetData("got-data");
    })
    .catch(() => {
      setGetData("error");
    });
};

export const post = (pathParamUrl, setData) => {
  axios
    .post(`${baseUrl}/${pathParamUrl}&key=${yourKey}&token=${yourToken}`)
    .then((res) => {
      setData((prevData) => [...prevData, res.data]);
    })
    .catch(() => {
      alert("Error Occured");
    });
};

export const put = (pathParamUrl, setData) => {
  axios
    .put(`${baseUrl}/${pathParamUrl}&key=${yourKey}&token=${yourToken}`)
    .then((res) => {
      setData((prevData) => {
        const newData = prevData.filter(({ id }) => id !== res.data.id);
        return newData;
      });
    })
    .catch(() => {
      alert("Error Occured");
    });
};

export const del = (pathParamUrl, setData, itemID) => {
  axios
    .delete(`${baseUrl}/${pathParamUrl}?key=${yourKey}&token=${yourToken}`)
    .then(() => {
      setData((prevData) => {
        const newData = prevData.filter(({ id }) => id !== itemID);
        return newData;
      });
    })
    .catch(() => {
      alert("Error Occurred!!");
    });
};

export const putState = (pathParamUrl, setData, itemID) => {
  axios.put(`${baseUrl}/`)
}
