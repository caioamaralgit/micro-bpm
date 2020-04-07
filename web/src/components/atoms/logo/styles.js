import styled from 'styled-components';

const Container = styled.h1(() => ({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
}));

export const AdminBox = styled.div(() => ({
    backgroundColor: '#FFE000',
    color: '#FFFFFF',
    marginLeft: '10px',
    fontSize: '0.6em',
    padding: '0.4em',
    textTransform: 'uppercase'
}));

export default Container;
