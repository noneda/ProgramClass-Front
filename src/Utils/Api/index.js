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
