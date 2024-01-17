export default function odc({id, x2}){


    return(
        <>
    <svg class="odcdrogi" id={id} height="10" width="200" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="5" x2={x2} y2="5" stroke="blue" />
        </svg>
        </>
    )}