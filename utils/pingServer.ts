import axios from "axios";

export const pingServer = () => {
  axios.get("https://events-registration-app-server.onrender.com/api/events");
};
