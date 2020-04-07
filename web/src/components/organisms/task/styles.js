import styled from 'styled-components';

const Container = styled.section(() => ({
    background: '#FFFFFF',
    borderRadius: '6px',
    margin: '20px 30px',
    maxHeight: '570px',
    minWidth: '350px',
    padding: '10px 40px'
}));

export const ToggleButtonStyles = {
    fontSize: '0.6em',
    fontWeight: '300'
};

export const LoadingImage = styled.img({
    margin: '0px auto',
    width: '100px'
});

export default Container;
