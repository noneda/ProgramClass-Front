import axios from "axios";

export const allClass = async () => {
  try {
    const res = await axios.get("http://127.0.0.1:8000/Api/Class/");
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
    const res = await axios.get(`http://127.0.0.1:8000/Api/DataClass/${id}`);
    if (res.status === 200) {
      const { Class, Sections } = res.data;
      BubbleSort(Sections, "Order");
      console.log(Sections);
    }
  } catch (err) {}
};

const BubbleSort = (a, par) => {
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
