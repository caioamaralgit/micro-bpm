import styled from 'styled-components';

const Container = styled.article(() => ({
    backgroundColor: '#FFFFFF',
    borderRadius: '6px',
    left: '50%',
    minWidth: '300px',
    position: 'fixed',
    transform: 'translate(-50%, -50%)',
    top: '50%',
    zIndex: 150,
}));

export default Container;
