import {INote} from "../Interfaces/INote";
import AuthService from "./AuthService";

class NotesService {

    url = "http://localhost:8080/api/notes";

    getNotes(): Promise<INote[]> {
        return fetch(this.url, {
            headers: {
                'Authorization' : AuthService.getHeaders()
            }
        }).then(res => {
            if(!res.ok) throw res;
            return res.json();
        });
    }

    editNote(note: INote): Promise<INote> {
        return fetch(this.url + "/" + note.id, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : AuthService.getHeaders()
            },
            body: JSON.stringify({
                title: note.title,
                content: note.content
            })
        }).then(res => {
            if(!res.ok) throw res;
            return res.json();
        });
    }

    removeNote(id: string): Promise<Response> {
        return fetch(this.url + "/" + id, {
            method: "DELETE",
            headers: {
                'Authorization' : AuthService.getHeaders()
            }
        }).then(res => {
            if(!res.ok) throw res;
            return res;
        });
    }

    getSingleNote(id: string): Promise<INote> {
        return fetch(this.url + "/" + id, {
            headers: {
                'Authorization' : AuthService.getHeaders()
            }
        }).then(res => {
            if(!res.ok) throw res;
            return res.json();
        });
    }
}

export default new NotesService();