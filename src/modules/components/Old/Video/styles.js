import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;   
    /* height: calc(100vh - 70px); */
    /* overflow-y: scroll;  */
    @media (max-width: 414px) {
            /* background-color: green; */
            height: 20%;
            overflow: hidden;
            /* font-size: 20px;
            margin-top: -50px; */
        }
    `;
    
export const SText = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
margin-top: 110px;
margin-bottom: 110px;
h3 {
    color: #FFFF;
    text-align: center;
    font-weight: lighter;
    text-decoration: none;
    @media (max-width: 414px) {
            display: none;
        }
}
span {
    z-index: 1;
    line-height: 1.5;
    font-size: 55px;
    color: #FFFF;
    font-weight: bold;
    text-decoration: none;
    text-align: center;
    -webkit-animation: fadeinup 2s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadeinup 2s; /* Firefox < 16 */
    -ms-animation: fadeinup 2s; /* Internet Explorer */
    -o-animation: fadeinup 2s; /* Opera < 12.1 */
    animation: fadeinup 2s;
    @media (max-width: 414px) {
        /* background-color: red; */
        font-size: 20px;
        margin-top: -50px;
    }
}
`;


export const SVideo = styled.div`
    position: absolute;
    width: 100%;
    z-index: -1;
    opacity: 0.1;
    @media (min-width: 1000px){
        #videoBanner {
            width: 100%;
            height: 30%;
        }
    }
    @media (max-width: 414px) {
            /* background-color: red; */
            width: 100%;
            /* margin-top: 10px; */
        }
    @media (max-width: 700px){
        #videoBanner {
            width: 100%;
            height: 40%;
    @keyframes fadeinup {
        from { opacity: 0; }
        to   { opacity: 1; }
    }
    /* Firefox < 16 */
    @-moz-keyframes fadeinup {
    from { opacity: 0; }
    to   { opacity: 1; }
    }
    /* Safari, Chrome and Opera > 12.1 */
    @-webkit-keyframes fadeinup {
    from { opacity: 0; }
    to   { opacity: 1; }
    }
    /* Internet Explorer */
    @-ms-keyframes fadeinup {
    from { opacity: 0; }
    to   { opacity: 1; }
    }
    }
    }
`;