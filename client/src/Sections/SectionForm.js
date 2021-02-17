import { useState } from "react";
import Api from "../Api";
import { useHistory } from "react-router-dom";

function SectionForm() {
    const history = useHistory();
    const [section, setSection] = useState({
        name: '',
        slug: '',
        position: 0
    });

    function onChange(event) {
        const newSection = {...section};
        newSection[event.target.name] = event.target.value;
        setSection(newSection);
    }

    async function onSubmit(event) {
        event.preventDefault();
        try {
            await Api.sections.create(section);
            history.push('/sections');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main className="container">
            <h1>Section Form</h1>
            <form onSubmit = {onSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input className="form-control" type="text" name="name" value={section.name} onChange={onChange}></input>
                </div>
            </form>
            <form>
                <div className="mb-3">
                    <label className="form-label">Slug</label>
                    <input className="form-control" type="text" name="slug" value={section.slug} onChange={onChange}></input>
                </div>
            </form>
            <form>
                <div className="mb-3">
                    <label className="form-label">Position</label>
                    <input className="form-control" type="text" name="position" value={section.position} onChange={onChange}></input>
                </div>
                <button className="btn btn-primary" type="submit">submit</button>
            </form>
            
        </main>
    );
}
export default SectionForm;