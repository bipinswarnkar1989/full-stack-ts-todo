import React, { useCallback } from 'react';
import { 
    Container,
    Link,
    AddIcon
} from './styles';
import { useHistory } from 'react-router-dom';

export const AddButton: React.FC = () => {
    const history = useHistory();

    const handleClick = useCallback(() => {
         history.push('/add-todo')
    }, [history]);

    return (
        <Container>
            <Link onClick={handleClick}><AddIcon /></Link>
        </Container>
    )
}