import {INote} from "../Interfaces/INote";

class NotesService {

    url = "http://localhost:8080/api/notes";

    getNotes(): Promise<INote[]> {
        return fetch(this.url, {
            headers: {
                'Authorization' : 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYXRldXN6IiwiZXhwIjoxNjQyODEwNDc4fQ.egdpYp4k09878oWofU1nj3Ij9Kct-LADhzHB5RgWVo8cEGp1Wbx7T79o0VGOJkXXqMq_9O2E4j8khIdSYcaYJg'
            }
        }).then(res => res.json());
    }

    editNote(note: INote): Promise<INote> {
        return fetch(this.url + "/" + note.id, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYXRldXN6IiwiZXhwIjoxNjQyODEwNDc4fQ.egdpYp4k09878oWofU1nj3Ij9Kct-LADhzHB5RgWVo8cEGp1Wbx7T79o0VGOJkXXqMq_9O2E4j8khIdSYcaYJg'
            },
            body: JSON.stringify({
                title: note.title,
                content: note.content
            })
        }).then(res => res.json());
    }

    removeNote(id: string): Promise<Response> {
        return fetch(this.url + "/" + id, {
            method: "DELETE",
            headers: {
                'Authorization' : 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYXRldXN6IiwiZXhwIjoxNjQyODEwNDc4fQ.egdpYp4k09878oWofU1nj3Ij9Kct-LADhzHB5RgWVo8cEGp1Wbx7T79o0VGOJkXXqMq_9O2E4j8khIdSYcaYJg'
            }
        });
    }
}

export default new NotesService();