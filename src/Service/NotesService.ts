import {INote} from "../Interfaces/INote";

class NotesService {

    url = "http://localhost:8080/api/notes";

    getNotes(): Promise<INote[]> {
        return fetch(this.url)
            .then(res => res.json());
    }
}

export default new NotesService();