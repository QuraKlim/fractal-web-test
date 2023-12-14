import { api } from "shared/api/axios.config";

export class SendDataApi {
  static async sendUserData(body: any) {
    console.log(body);
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        const random = Math.random();
        if (random > 0.5) {
          resolve({
            status: "success",
          });
        } else {
          reject({
            status: "error",
          });
        }
      }, 5000);
    });
    /* api.get("/todos/1", body) */ //тут есть реальный запрос с json placeholder
  }
}
