import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "28d8182cb135412eb72d61261a44ca75",
  },
});
