import { useNavigate } from 'react-router-dom';

import './NewPost.scss'

const NewPost = () =>{
    const navigate = useNavigate()

    const createPost = async(e) =>{
        e.preventDefault();

        navigate('/');
    }

    return(
        <div className='new-post'>
            <h2>Inserir novo Post:</h2>
            <form onSubmit={(e) => createPost(e)}>
                <div className="form-control">
                    <label htmlFor="title">Título:</label>
                    <input type="text" name="title" id="title" placeholder='Digite o título'/>
                </div>

                <div className="form-control">
                    <label htmlFor="body">Conteúdo:</label>
                    <textarea name="body" id="body" placeholder='Digite o conteúdo'></textarea>
                </div>
                <input type="submit" value="Criar post" className='btn'/>
            </form>
        </div>
    )
    
}

export default NewPost;