// Hàm mà bạn đã định nghĩa trước đó để tạo ra một instance của Axios với cài đặt cụ thể.
import createApiClient from "./api.service";
class ContactService {
    constructor(baseUrl = "/api/contacts") {
        this.api = createApiClient(baseUrl);
    }
    // Các phương thức để thực hiện các hoạt động CRUD 
    async getAll() {
        return (await this.api.get("/")).data;
    }
    async create(data) {
        return (await this.api.post("/", data)).data;
    }
    async deleteAll() {
        return (await this.api.delete("/")).data;
    }
    async get(id) {
        return (await this.api.get(`/${id}`)).data;
    }
    async update(id, data) {
        return (await this.api.put(`/${id}`, data)).data;

    }
    async delete(id) {
        return (await this.api.delete(`/${id}`)).data;
    }
}
export default new ContactService();