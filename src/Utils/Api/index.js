import axios from "axios";

export const allClass = async () => {
  try {
    const res = await axios.get("https://programclass-back-production.up.railway.app/Api/Class/");
    const send = [];
    if (res.status === 200) {
      const { Data } = res.data;
      let temp = [];
      Data.forEach((item, index) => {
        temp.push(item);
        if ((index + 1) % 12 === 0) {
          send.push([...temp]);
          temp.length = 0;
        }
      });
      if (temp.length) send.push(temp);
      return send;
    }
  } catch (err) {
    console.error(err);
  }
};

export const UniqueClass = async (id) => {
  try {
    const res = await axios.get(`https://programclass-back-production.up.railway.app/Api/DataClass/${id}`);
    if (res.status === 200) {
      const { Class, set } = res.data;
      BubbleSortSections(set, "Order");
      return { Class, set };
    }
  } catch (err) {
    console.log(err);
  }
};

const BubbleSortSections = (a, par) => {
  var swapped;
  do {
    swapped = false;
    for (var i = 0; i < a.length - 1; i++) {
      if (a[i][par] > a[i + 1][par]) {
        var temp = a[i];
        a[i] = a[i + 1];
        a[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
};

export const getSubSection = async (id) => {
  try {
    const res = await axios.get(`https://programclass-back-production.up.railway.app/Api/SubSection/${id}`);
    if (res.status === 200) {
      const { Data } = res.data;
      console.log(Data);
      return Data;
    }
  } catch (err) {
    console.log(err);
  }
};
