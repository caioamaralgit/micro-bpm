import styled from 'styled-components';

const Container = styled.section(() => ({
    border: '1px solid #000',
    borderRadius: '6px',
    margin: '20px',
    overflow: 'hidden'
}));

export const TasksContainer = styled.div(() => ({
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
    backgroundImage: 'linear-gradient(90deg,hsla(0,0%,100%,.2) 1px,transparent 0), linear-gradient(180deg,hsla(0,0%,100%,.2) 1px,transparent 0)',
    backgroundSize: '20px 20px',
    display: 'flex',
    overflowX: 'auto',
    transition: 'height, max-height .5s cubic-bezier(0,1,0.5,1)'
}));

export default Container;
