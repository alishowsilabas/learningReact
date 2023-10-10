export default function H1(props) {
    return <h1 style={{color: "orange"}}>{props.name}</h1>
}


export const H3 = () => {
    return <h3 style={{color: "red"}}>Export sem ser padrão/default</h3>
}

export const H4 = () => {
    return <h4 style={{color: "darkred"}}>Hello World, it's me again!</h4>
}