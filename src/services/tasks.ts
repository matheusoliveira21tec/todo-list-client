import Api from "./api";

const TaskService = {
    index: () => Api.get("/item"),
    create: (params: any) => Api.post('/item/', params),
    update: (id: string, params: any) => Api.put(`/item/${id}`, params)
}

export default TaskService;