import { api } from "./axiosConfig";

export const get = (URL, setData, setGetData) => {
  api
    .get(`${URL}`)
    .then((res) => {
      if (res.status != 200) {
        setGetData("error");
      } else {
        setGetData("got-data");
        setData(res.data);
      }
    })
    .catch(() => {
      setGetData("error");
    });
};

export const post = (URL, setData) => {
  api
    .post(`${URL}`)
    .then((res) => {
      setData((prevData) => [...prevData, res.data]);
    })
    .catch(() => {
      alert("Error Occured");
    });
};

export const put = (URL, setData) => {
  api
    .put(`${URL}`)
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

export const del = (URL, setData, itemID) => {
  api
    .delete(`${URL}`)
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

export const putState = (URL, setData) => {
  api
    .put(`${URL}`)
    .then((res) => {
      setData((prevData) => {
        const newData = prevData.map((data) => {
          if (data.id == res.data.id) {
            return res.data;
          }
          return data;
        });
        return newData;
      });
    })
    .catch(() => {
      alert("Error Occured!!");
    });
};
