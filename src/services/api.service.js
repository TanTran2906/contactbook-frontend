// Thư viện HTTP client: giao tiếp với các API.
import axios from "axios";
//Cấu hình chung  áp dụng cho tất cả các yêu cầu HTTP. 
const commonConfig = {
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
};
//Khi cung cấp một baseURL như http://example.com/api, và nó sẽ trả về một instance của Axios đã được cấu hình (commonConfig) để gửi các yêu cầu đến URL này 
export default (baseURL) => {
    return axios.create({
        baseURL,
        ...commonConfig,
    });
};